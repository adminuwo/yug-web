import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Trash2 } from 'lucide-react';

const SiteVisitsTab = ({
    siteVisits,
    setSelectedSiteVisit,
    handleDeleteSiteVisit
}) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Site Visit Bookings</h2>
            </div>

            <div className="bg-white rounded-3xl border border-secondary shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/30 border-b border-secondary">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Customer Info</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Location / Budget</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Visit Slot</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold">Booked On</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary/50">
                            {siteVisits.length === 0 ? (
                                <tr><td colSpan="5" className="px-6 py-10 text-center text-text font-bold italic">Abhi koi booking nahi hai.</td></tr>
                            ) : (
                                siteVisits.map((visit) => (
                                    <tr key={visit._id} className="hover:bg-primary/10 group">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-sm">{visit.name}</div>
                                            <div className="text-[10px] text-text font-bold">{visit.phone}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs font-medium text-text font-bold">{visit.location}</div>
                                            <div className="text-[10px] text-accent font-bold uppercase">{visit.budget}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs font-bold text-text font-bold">{new Date(visit.visitDate).toLocaleDateString('en-GB')}</div>
                                            <div className="text-[10px] text-text font-bold uppercase">{visit.timeSlot}</div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-text font-bold">
                                            {new Date(visit.timestamp).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => setSelectedSiteVisit(visit)} className="p-2 text-text font-bold hover:text-accent group-hover:scale-110 transition-transform"><Eye size={16} /></button>
                                                <button onClick={() => handleDeleteSiteVisit(visit._id)} className="p-2 text-red-300 hover:text-red-500 group-hover:scale-110 transition-transform"><Trash2 size={16} /></button>
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

export default SiteVisitsTab;
