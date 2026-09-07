import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Download, MessageSquare } from 'lucide-react';

const ChatLeadsTab = ({
    chatLeads,
    handleExportLeads,
    isExporting,
    setSelectedChatLead
}) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Chat Assistant Leads</h2>
                <button 
                    onClick={handleExportLeads}
                    disabled={isExporting}
                    className="flex items-center gap-2 px-4 py-2 bg-text text-white rounded-xl text-xs font-bold hover:bg-accent transition-all disabled:opacity-50"
                >
                    {isExporting ? <RefreshCcw size={14} className="animate-spin" /> : <Download size={14} />}
                    Export CSV
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-secondary shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/30 border-b border-secondary">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Lead Info</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Reg. Date</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Messages</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary/50">
                            {chatLeads.length === 0 ? (
                                <tr><td colSpan="4" className="px-6 py-10 text-center text-text font-bold italic">Abhi koi chat lead nahi hai.</td></tr>
                            ) : (
                                chatLeads.map((lead) => (
                                    <tr key={lead._id} className="hover:bg-primary/10 group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-sm">{lead.name}</div>
                                            <div className="text-[10px] text-text font-bold">{lead.email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-text font-bold">
                                            {new Date(lead.timestamp).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-lg ${lead.messages.length > 0 ? 'bg-green-50 text-green-600' : 'bg-secondary text-text font-bold'}`}>
                                                {lead.messages.length} Msgs
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => setSelectedChatLead(lead)}
                                                className="p-2 text-text font-bold hover:text-accent transition-all"
                                            >
                                                <MessageSquare size={16} />
                                            </button>
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

export default ChatLeadsTab;
