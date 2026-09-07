import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogOut, Home, X } from 'lucide-react';
import yugLogo from '../assets/yug logo.webp';
import { useAdminData } from '../hooks/useAdminData';
import { logout } from '../auth/authStorage';

// Modular Components
import EnquiriesTab from '../components/admin/EnquiriesTab';
import ChatLeadsTab from '../components/admin/ChatLeadsTab';
import SiteVisitsTab from '../components/admin/SiteVisitsTab';
import TrainingTab from '../components/admin/TrainingTab';
import { 
    EnquiryDetailModal, 
    ChatHistoryModal, 
    SiteVisitDetailModal 
} from '../components/admin/LeadDetailModal';

const AdminDashboard = () => {
    const [activeTab, setActiveTab ] = useState('enquiries');

    const {
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
    } = useAdminData();

    useEffect(() => {
        fetchEnquiries();
        fetchFiles();
        fetchChatLeads();
        fetchSiteVisits();
    }, []);

    const handleLogoutClick = () => {
        logout();
    };

    return (
        <section className="min-h-screen bg-[#F8F9FA] pt-12 pb-20 px-4 md:px-10 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Simplified Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div className="flex items-center gap-4">
                        <img src={yugLogo} alt="YUG AMC" className="w-12 h-12 object-contain" />
                        <div>
                            <h1 className="text-2xl font-serif text-text font-bold leading-tight">YUG AMC Admin</h1>
                            <Link to="/" className="text-[10px] uppercase font-bold text-accent tracking-[0.2em] flex items-center gap-1 hover:underline">
                                <Home size={10} /> Back to Website
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-secondary/50 flex-1 md:flex-none">
                            <button 
                                onClick={() => setActiveTab('enquiries')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'enquiries' ? 'bg-accent text-white' : 'text-text font-bold'}`}
                            >
                                User Entries
                            </button>
                            <button 
                                onClick={() => setActiveTab('chat_leads')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'chat_leads' ? 'bg-accent text-white' : 'text-text font-bold'}`}
                            >
                                Chat Leads
                            </button>
                            <button 
                                onClick={() => setActiveTab('site_visits')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'site_visits' ? 'bg-accent text-white' : 'text-text font-bold'}`}
                            >
                                Site Visits
                            </button>
                            <button 
                                onClick={() => setActiveTab('training')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'training' ? 'bg-accent text-white' : 'text-text font-bold'}`}
                            >
                                AI Training
                            </button>
                        </div>
                        <button onClick={handleLogoutClick} className="p-3 bg-white border border-secondary/50 rounded-xl text-text font-bold hover:text-red-500 transition-all shadow-sm">
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                {message.text && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-4 rounded-xl mb-6 text-sm font-medium border flex justify-between items-center ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                        <span>{message.text}</span>
                        <button onClick={() => setMessage({ type: '', text: '' })}><X size={16} /></button>
                    </motion.div>
                )}

                {activeTab === 'enquiries' && (
                    <EnquiriesTab
                        filteredEnquiries={filteredEnquiries}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        filterType={filterType}
                        setFilterType={setFilterType}
                        setSelectedEnquiry={setSelectedEnquiry}
                        handleDeleteEnquiry={handleDeleteEnquiry}
                    />
                )}

                {activeTab === 'chat_leads' && (
                    <ChatLeadsTab
                        chatLeads={chatLeads}
                        handleExportLeads={handleExportLeads}
                        isExporting={isExporting}
                        setSelectedChatLead={setSelectedChatLead}
                    />
                )}

                {activeTab === 'site_visits' && (
                    <SiteVisitsTab
                        siteVisits={siteVisits}
                        setSelectedSiteVisit={setSelectedSiteVisit}
                        handleDeleteSiteVisit={handleDeleteSiteVisit}
                    />
                )}

                {activeTab === 'training' && (
                    <TrainingTab
                        files={files}
                        selectedUploadFiles={selectedUploadFiles}
                        isUploading={isUploading}
                        handleFileSelect={handleFileSelect}
                        removeSelectedFile={removeSelectedFile}
                        handleUpload={handleUpload}
                        handleDeleteFile={handleDeleteFile}
                    />
                )}

                {/* Details Modals */}
                <EnquiryDetailModal
                    selectedEnquiry={selectedEnquiry}
                    setSelectedEnquiry={setSelectedEnquiry}
                />

                <ChatHistoryModal
                    selectedChatLead={selectedChatLead}
                    setSelectedChatLead={setSelectedChatLead}
                />

                <SiteVisitDetailModal
                    selectedSiteVisit={selectedSiteVisit}
                    setSelectedSiteVisit={setSelectedSiteVisit}
                />

            </div>
        </section>
    );
};

export default AdminDashboard;
