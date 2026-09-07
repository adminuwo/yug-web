import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Trash2, FileText, Check, Plus, MessageSquare } from 'lucide-react';
import { sanitizeHtml } from '../../utils/sanitize';

export const EnquiryDetailModal = ({ selectedEnquiry, setSelectedEnquiry }) => {
    if (!selectedEnquiry) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEnquiry(null)} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <h3 className="text-2xl font-serif font-bold">Inquiry Details</h3>
                        <button onClick={() => setSelectedEnquiry(null)} className="p-1 hover:bg-primary rounded-full transition-colors"><X size={24} className="text-text font-bold" /></button>
                    </div>
                    <div className="space-y-4 mb-8 relative z-10">
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Customer Name</p>
                            <p className="font-bold text-text">{selectedEnquiry.name}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Mobile No.</p>
                            <p className="font-bold text-text">{selectedEnquiry.phone}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Email</p>
                            <p className="font-bold text-text">{selectedEnquiry.email}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Message</p>
                            <p className="text-sm italic text-text font-bold">"{selectedEnquiry.message || 'No message provided'}"</p>
                        </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                        <a href={`tel:${selectedEnquiry.phone}`} className="flex-1 bg-text text-white py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-lg">Call Customer</a>
                        <a href={`mailto:${selectedEnquiry.email}`} className="flex-1 bg-secondary text-text font-bold py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all">Email Customer</a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export const ChatHistoryModal = ({ selectedChatLead, setSelectedChatLead }) => {
    if (!selectedChatLead) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedChatLead(null)} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-2xl bg-white rounded-[2rem] h-[80vh] flex flex-col shadow-2xl overflow-hidden">
                    <div className="p-6 border-b border-secondary flex justify-between items-center bg-primary/30">
                        <div>
                            <h3 className="text-xl font-serif font-bold">{selectedChatLead.name}</h3>
                            <p className="text-[10px] text-text font-bold font-bold uppercase tracking-wider">{selectedChatLead.email}</p>
                        </div>
                        <button onClick={() => setSelectedChatLead(null)} className="p-2 hover:bg-white rounded-full transition-colors"><X size={20} /></button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F9FAFB]">
                        {selectedChatLead.messages.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-text font-bold italic text-sm">No messages yet.</div>
                        ) : (
                            selectedChatLead.messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-white border border-secondary rounded-tl-none shadow-sm text-text font-bold'}`}>
                                        <div className="flex justify-between gap-4 mb-1 opacity-50 font-bold uppercase text-[8px]">
                                            <span>{m.role === 'user' ? 'Customer' : 'AI Assistant'}</span>
                                            <span>{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(m.content) }} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-6 border-t border-secondary bg-white text-center">
                        <p className="text-[9px] text-text font-bold font-bold uppercase tracking-[0.2em]">YUG AMC Chat Intelligence</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export const SiteVisitDetailModal = ({ selectedSiteVisit, setSelectedSiteVisit }) => {
    if (!selectedSiteVisit) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedSiteVisit(null)} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <h3 className="text-2xl font-serif font-bold">Booking Details</h3>
                        <button onClick={() => setSelectedSiteVisit(null)} className="p-1 hover:bg-primary rounded-full transition-colors"><X size={24} className="text-text font-bold" /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50 col-span-2">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Customer</p>
                            <p className="font-bold text-text">{selectedSiteVisit.name}</p>
                            <p className="text-xs text-text font-bold">{selectedSiteVisit.email}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Phone</p>
                            <p className="font-bold text-text">{selectedSiteVisit.phone}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Location</p>
                            <p className="font-bold text-text">{selectedSiteVisit.location}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Date</p>
                            <p className="font-bold text-text">{new Date(selectedSiteVisit.visitDate).toLocaleDateString('en-GB')}</p>
                        </div>
                        <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                            <p className="text-[10px] uppercase font-bold text-text font-bold mb-1 tracking-widest">Time Slot</p>
                            <p className="font-bold text-text">{selectedSiteVisit.timeSlot}</p>
                        </div>
                        <div className="p-4 bg-accent/5 rounded-2xl border border-accent/20 col-span-2">
                            <p className="text-[10px] uppercase font-bold text-accent mb-1 tracking-widest">Budget Preference</p>
                            <p className="font-bold text-text">{selectedSiteVisit.budget}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                        <a href={`https://wa.me/${selectedSiteVisit.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg">WhatsApp</a>
                        <a href={`tel:${selectedSiteVisit.phone}`} className="flex-1 bg-text text-white py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-lg">Call</a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
