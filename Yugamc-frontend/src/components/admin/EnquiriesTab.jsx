import React from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Trash2 } from 'lucide-react';
import CustomDropdown from '../common/CustomDropdown';

const EnquiriesTab = ({
    filteredEnquiries,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    setSelectedEnquiry,
    handleDeleteEnquiry
}) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Simple Search */}
            <div className="bg-white p-4 rounded-2xl border border-secondary flex flex-wrap gap-4 shadow-sm mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text font-bold" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search by Name or Email..." 
                        className="w-full bg-primary/20 border-none rounded-xl py-3 pl-12 outline-none text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <CustomDropdown
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    options={[
                        { value: "All", label: "All Requirements" },
                        { value: "Residential", label: "Residential" },
                        { value: "Commercial", label: "Commercial" },
                        { value: "Investment", label: "Investment" }
                    ]}
                />
            </div>

            {/* Leads List */}
            <div className="bg-white rounded-3xl border border-secondary shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/30 border-b border-secondary">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Customer Name</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Requirement</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Project</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Date</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary/50">
                            {filteredEnquiries.length === 0 ? (
                                <tr><td colSpan="5" className="px-6 py-10 text-center text-text font-bold italic">No entries found.</td></tr>
                            ) : (
                                filteredEnquiries.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-primary/10 group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-sm">{lead.name}</div>
                                            <div className="text-[10px] text-text font-bold">{lead.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-[10px] font-bold uppercase px-2 py-1 bg-secondary rounded-lg">
                                                {lead.requirement}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-text font-bold">{lead.project || '-'}</td>
                                        <td className="px-6 py-4 text-xs text-text font-bold">{new Date(lead.timestamp).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => setSelectedEnquiry(lead)} className="p-2 text-text font-bold hover:text-accent group-hover:scale-110 transition-transform"><Eye size={16} /></button>
                                                <button onClick={() => handleDeleteEnquiry(lead.id)} className="p-2 text-red-300 hover:text-red-500 group-hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default EnquiriesTab;
