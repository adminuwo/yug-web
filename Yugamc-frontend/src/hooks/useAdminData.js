import { useState } from 'react';
import { 
    getEnquiries, 
    getFiles, 
    getChatLeads, 
    getSiteVisits, 
    exportLeads, 
    deleteEnquiry, 
    deleteSiteVisit, 
    uploadFiles, 
    deleteFile 
} from '../services/adminApi';

export const useAdminData = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [files, setFiles] = useState([]);
    const [chatLeads, setChatLeads] = useState([]);
    const [siteVisits, setSiteVisits] = useState([]);
    
    const [selectedUploadFiles, setSelectedUploadFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [selectedChatLead, setSelectedChatLead] = useState(null);
    const [selectedSiteVisit, setSelectedSiteVisit] = useState(null);

    const fetchEnquiries = async () => {
        try {
            const data = await getEnquiries();
            setEnquiries(data);
        } catch (err) {
            console.error('Error fetching enquiries:', err);
        }
    };

    const fetchFiles = async () => {
        try {
            const data = await getFiles();
            setFiles(data);
        } catch (err) {
            console.error('Error fetching files:', err);
        }
    };

    const fetchChatLeads = async () => {
        try {
            const data = await getChatLeads();
            setChatLeads(data);
        } catch (err) {
            console.error('Error fetching chat leads:', err);
        }
    };

    const fetchSiteVisits = async () => {
        try {
            const data = await getSiteVisits();
            setSiteVisits(data);
        } catch (err) {
            console.error('Error fetching site visits:', err);
        }
    };

    const handleExportLeads = async () => {
        setIsExporting(true);
        try {
            const blob = await exportLeads();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `yug_amc_leads_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (err) {
            console.error('Export failed:', err);
        } finally {
            setIsExporting(false);
        }
    };

    const handleDeleteEnquiry = async (id) => {
        if(!window.confirm("क्या आप इसे सच में हटाना चाहते हैं?")) return;
        try {
            await deleteEnquiry(id);
            setMessage({ type: 'success', text: 'सफलतापूर्वक हटा दिया गया।' });
            fetchEnquiries();
        } catch (err) {
            console.error('Delete enquiry error:', err);
            setMessage({ type: 'error', text: 'हटाने में कोई दिक्कत आई।' });
        }
    };

    const handleDeleteSiteVisit = async (id) => {
        if(!window.confirm("क्या आप इस बुकिंग को हटाना चाहते हैं?")) return;
        try {
            await deleteSiteVisit(id);
            setMessage({ type: 'success', text: 'बुकिंग सफलतापूर्वक हटा दी गई।' });
            fetchSiteVisits();
        } catch (err) {
            console.error('Delete site visit error:', err);
            setMessage({ type: 'error', text: 'हटाने में कोई दिक्कत आई।' });
        }
    };

    const handleFileSelect = (e) => {
        const selected = Array.from(e.target.files);
        setSelectedUploadFiles(prev => [...prev, ...selected]);
    };

    const removeSelectedFile = (index) => {
        setSelectedUploadFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async () => {
        if (!selectedUploadFiles.length) return;
        setIsUploading(true);
        setMessage({ type: '', text: '' });

        const formData = new FormData();
        for (let file of selectedUploadFiles) {
            formData.append('files', file);
        }

        try {
            await uploadFiles(formData);
            setMessage({ type: 'success', text: 'Assistant ko training mil gayi!' });
            setSelectedUploadFiles([]);
            fetchFiles();
        } catch (err) {
            console.error('Training file upload error:', err);
            setMessage({ type: 'error', text: 'Training failed.' });
        } finally {
            setIsUploading(false);
        }
    };

    const handleDeleteFile = async (filename) => {
        if(!window.confirm("क्या आप इस जानकारी को Assistant से हटाना चाहते हैं?")) return;
        try {
            await deleteFile(filename);
            setMessage({ type: 'success', text: 'File hata di gayi hai.' });
            fetchFiles();
        } catch (err) {
            console.error('Delete file error:', err);
            setMessage({ type: 'error', text: 'Hataane mein fail ho gaya.' });
        }
    };

    const filteredEnquiries = enquiries.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             item.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'All' || item.requirement === filterType;
        return matchesSearch && matchesFilter;
    });

    return {
        enquiries,
        files,
        chatLeads,
        siteVisits,
        selectedUploadFiles,
        isUploading,
        isExporting,
        message,
        setMessage,
        searchTerm,
        setSearchTerm,
        filterType,
        setFilterType,
        selectedEnquiry,
        setSelectedEnquiry,
        selectedChatLead,
        setSelectedChatLead,
        selectedSiteVisit,
        setSelectedSiteVisit,
        filteredEnquiries,
        fetchEnquiries,
        fetchFiles,
        fetchChatLeads,
        fetchSiteVisits,
        handleExportLeads,
        handleDeleteEnquiry,
        handleDeleteSiteVisit,
        handleFileSelect,
        removeSelectedFile,
        handleUpload,
        handleDeleteFile
    };
};
