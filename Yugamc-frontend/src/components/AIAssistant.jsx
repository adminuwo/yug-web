import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, X, Send } from 'lucide-react';
import yugLogo from '../assets/yug logo.webp';
import { useAssistantChat } from '../hooks/useAssistantChat';

// Modular Components
import AssistantLauncher from './assistant/AssistantLauncher';
import OnboardingPopup from './assistant/OnboardingPopup';
import RegistrationForm from './assistant/RegistrationForm';
import ChatWindow from './assistant/ChatWindow';
import SpeechInput from './assistant/SpeechInput';

const AIAssistant = () => {
  const {
    isOpen,
    setIsOpen,
    message,
    setMessage,
    chatHistory,
    isLoading,
    isRegistered,
    regData,
    setRegData,
    showThankYou,
    regError,
    isRegistering,
    showOnboarding,
    isListening,
    messagesEndRef,
    inputRef,
    toggleListening,
    handleSendMessage,
    handleSuggestion,
    handleRegister,
    handleDismissOnboarding,
    handleChatNow,
  } = useAssistantChat();

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const formatMessage = (text) => {
    if (!text) return "";
    
    // Process line by line for headings
    let lines = text.split('\n');
    let formattedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('### ')) {
        return `<h4 class="font-serif text-[17px] font-bold text-text mt-6 mb-2">${trimmed.replace('### ', '')}</h4>`;
      }
      return line;
    });

    let content = formattedLines.join('\n');
    
    // Replace **bold** with <b>
    content = content.replace(/\*\*(.*?)\*\*/g, '<b class="text-text font-bold">$1</b>');
    
    // Support existing <b> if any
    content = content.replace(/<b>(.*?)<\/b>/g, '<b class="text-text font-bold">$1</b>');

    return content;
  };

  return (
    <>
      {/* Onboarding Welcome Pop-up */}
      <AnimatePresence>
        {showOnboarding && !isOpen && (
          <OnboardingPopup 
            onChatNow={handleChatNow} 
            onDismiss={handleDismissOnboarding} 
          />
        )}
      </AnimatePresence>

      {/* Floating launcher bubble */}
      <AssistantLauncher 
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        showOnboarding={showOnboarding}
      />

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9999]"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              className="fixed top-1/2 left-1/2 w-[calc(100vw-32px)] md:w-[65%] h-[85vh] bg-white z-[10000] shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-[2.5rem] overflow-hidden flex flex-col border border-secondary"
            >
              {/* Panel Header */}
              <div className="p-6 bg-primary border-b border-secondary flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link to="/admin/login" onClick={toggleOpen} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-secondary hover:border-accent group transition-all overflow-hidden p-1.5">
                    <img src={yugLogo} alt="YUG AMC" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                  </Link>
                  <div>
                    <h3 className="font-serif text-text text-lg">YUG AMC Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] text-text/40 tracking-widest uppercase font-bold">Online Now</span>
                    </div>
                  </div>
                </div>
                <button onClick={toggleOpen} className="p-2 hover:bg-secondary rounded-full transition-colors">
                  <X size={20} className="text-text/60" />
                </button>
              </div>

              {/* Chat Area / Registration Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6 flex flex-col relative" data-lenis-prevent="true">
                {!isRegistered ? (
                  <RegistrationForm
                    regData={regData}
                    setRegData={setRegData}
                    regError={regError}
                    isRegistering={isRegistering}
                    showThankYou={showThankYou}
                    handleRegister={handleRegister}
                  />
                ) : (
                  <ChatWindow
                    chatHistory={chatHistory}
                    isLoading={isLoading}
                    formatMessage={formatMessage}
                    handleSuggestion={handleSuggestion}
                    messagesEndRef={messagesEndRef}
                  />
                )}
              </div>

              {/* Form Input (Visible only if registered) */}
              {isRegistered && (
                <form onSubmit={handleSendMessage} className="p-6 border-t border-secondary bg-white relative z-10">
                  <div className="flex items-center gap-3 bg-[#F9FAFB] border border-secondary/50 rounded-2xl p-2 focus-within:ring-1 focus-within:ring-accent transition-all">
                    <input 
                      ref={inputRef}
                      type="text" 
                      placeholder="Ask anything about Jabalpur projects..." 
                      className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-sm font-sans placeholder:text-text/30"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isLoading}
                    />
                    
                    <div className="flex items-center gap-1 shrink-0">
                      <SpeechInput
                        isListening={isListening}
                        toggleListening={toggleListening}
                        disabled={isLoading || !isRegistered}
                      />
                      <button 
                        type="submit"
                        disabled={isLoading || !message.trim() || !isRegistered}
                        className="p-3 bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-[9px] text-center text-text/30 mt-4 tracking-widest uppercase">
                    Premium Real Estate Assistance • Jabalpur
                  </p>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
