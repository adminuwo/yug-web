import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import yugLogo from '../../assets/yug logo.webp';
import { sanitizeHtml } from '../../utils/sanitize';

const ChatWindow = ({
  chatHistory,
  isLoading,
  formatMessage,
  handleSuggestion,
  messagesEndRef
}) => {
  return (
    <>
      {chatHistory.map((msg, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
        >
          <div className={`w-8 h-8 shrink-0 bg-white rounded-full flex items-center justify-center border border-secondary overflow-hidden ${msg.role === 'user' ? 'bg-accent/10 border-none' : 'p-1'}`}>
            {msg.role === 'model' ? (
              <img src={yugLogo} alt="YUG" className="w-full h-full object-contain" />
            ) : (
              <MessageSquare size={14} className="text-accent" />
            )}
          </div>
          <div className={`p-4 rounded-2xl text-sm md:text-[15px] leading-relaxed max-w-[85%] font-sans whitespace-pre-wrap ${msg.role === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-primary/50 text-text/80 rounded-tl-none'}`}>
            {msg.role === 'model' ? (
              <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(formatMessage(msg.parts[0].text)) }} />
            ) : (
              msg.parts[0].text
            )}
          </div>
        </motion.div>
      ))}
      
      {isLoading && (
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 shrink-0 bg-white border border-secondary rounded-full flex items-center justify-center p-1 overflow-hidden">
            <img src={yugLogo} alt="YUG" className="w-full h-full object-contain" />
          </div>
          <div className="bg-primary/50 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
            <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce"></span>
            <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      )}
      
      <div className="flex flex-col gap-2 mt-auto">
        <span className="text-[9px] text-text/30 tracking-widest uppercase font-bold pl-1">Suggested Inquiries</span>
        <div className="flex flex-wrap gap-2">
            {[
              "Current Projects",
              "Book a Site Visit",
              "Investment Benefits",
              "Contact Sales"
            ].map(q => (
              <button 
                key={q} 
                onClick={() => handleSuggestion(q)}
                className="text-[11px] px-3 py-2 bg-secondary/50 border border-secondary rounded-lg text-text/60 hover:border-accent hover:text-accent transition-all"
              >
                {q}
              </button>
            ))}
        </div>
      </div>
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatWindow;
