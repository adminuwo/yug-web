import React from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, X, RefreshCcw, Check, Database, Trash2 } from 'lucide-react';

const TrainingTab = ({
    files,
    selectedUploadFiles,
    isUploading,
    handleFileSelect,
    removeSelectedFile,
    handleUpload,
    handleDeleteFile
}) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Training Step 1: File Selection */}
            <div className="bg-white p-8 rounded-3xl border border-secondary shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</div>
                    <h2 className="text-xl font-bold">Choose a file to train the assistant</h2>
                </div>
                
                {!selectedUploadFiles.length ? (
                    <label className="cursor-pointer block border-2 border-dashed border-secondary/50 rounded-2xl p-12 text-center hover:bg-primary/20 transition-all hover:border-accent/40 group">
                        <input type="file" multiple className="hidden" onChange={handleFileSelect} />
                        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Plus size={32} />
                        </div>
                        <span className="text-sm font-bold block text-text font-bold">Select PDF, Word, or Text files</span>
                        <p className="text-[10px] text-text font-bold mt-2 uppercase tracking-widest font-bold">Click here to browse</p>
                    </label>
                ) : (
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedUploadFiles.map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-primary/20 rounded-xl border border-secondary/30">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <FileText size={18} className="text-accent flex-shrink-0" />
                                        <span className="text-xs font-bold truncate">{file.name}</span>
                                    </div>
                                    <button onClick={() => removeSelectedFile(idx)} className="text-red-400 hover:text-red-600 ml-4"><X size={16} /></button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => document.getElementById('add-more-files').click()} className="text-accent text-[10px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                            <Plus size={12} /> Add more files
                        </button>
                        <input id="add-more-files" type="file" multiple className="hidden" onChange={handleFileSelect} />
                        
                        <div className="pt-6 border-t border-secondary">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</div>
                                <h2 className="text-xl font-bold">Start Training</h2>
                            </div>
                            <button 
                                onClick={handleUpload}
                                disabled={isUploading}
                                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${isUploading ? 'bg-secondary text-text font-bold' : 'bg-text text-white hover:bg-accent shadow-xl active:scale-[0.98]'}`}
                            >
                                {isUploading ? (
                                    <>
                                        <RefreshCcw className="animate-spin" size={18} />
                                        Assistant is training...
                                    </>
                                ) : (
                                    <>
                                        <Check size={18} />
                                        Train Now
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Active Files List */}
            <div className="bg-white p-8 rounded-3xl border border-secondary shadow-sm">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Database size={20} className="text-accent" />
                    Active Knowledge Base (Trained Files)
                </h2>
                <div className="space-y-3">
                    {files.length === 0 ? (
                        <div className="p-10 text-center border border-dashed border-secondary/30 rounded-2xl">
                            <p className="text-sm text-text font-bold italic">No knowledge files uploaded yet.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {files.map(f => (
                                <div key={f.name} className="flex items-center justify-between p-4 bg-white border border-secondary/50 rounded-2xl hover:border-accent/30 transition-all shadow-sm group">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="p-2 bg-green-50 text-green-500 rounded-lg">
                                            <FileText size={18} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <span className="text-[11px] font-bold truncate block">{f.name}</span>
                                            <span className="text-[9px] text-text font-bold uppercase font-bold">Trained Successfully</span>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteFile(f.name)} className="p-2 text-red-200 hover:text-red-500 transition-all group-hover:scale-110"><Trash2 size={16} /></button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default TrainingTab;
