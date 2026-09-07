import { useState, useEffect, useRef } from 'react';
import { sendChatMessage, registerLead } from '../services/assistantApi';
import { useLenis } from 'lenis/react';

export const useAssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'model', parts: [{ text: 'Hello! I am your YUG AMC luxury concierge. How can I assist you with your property investment journey today?' }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Registration States
  const [isRegistered, setIsRegistered] = useState(false);
  const [regData, setRegData] = useState({ name: '', email: '' });
  const [leadId, setLeadId] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [regError, setRegError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Onboarding State
  const [showOnboarding, setShowOnboarding] = useState(false);

  const lenis = useLenis();

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (!isLoading && isRegistered && isOpen) {
        inputRef.current?.focus();
    }
  }, [chatHistory, isLoading, isRegistered, isOpen]);

  // Speech Recognition Setup
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-IN'; // Defaults to English+Hindi

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          finalTranscript += event.results[i][0].transcript;
        }
        setMessage(finalTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setMessage('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Onboarding Logic & persistence Check
  useEffect(() => {
    const storedLead = localStorage.getItem('yug_chat_lead');
    if (storedLead) {
      const parsed = JSON.parse(storedLead);
      setIsRegistered(true);
      setLeadId(parsed.leadId);
      setRegData({ name: parsed.name, email: parsed.email });
    }

    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen || showOnboarding) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('popup-open');
      if (lenis) lenis.start();
    }
  }, [isOpen, showOnboarding, lenis]);

  const handleSendMessageWithText = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', parts: [{ text }] };
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const data = await sendChatMessage(text, chatHistory, leadId);
      if (data.response) {
        setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: data.response }] }]);
      } else {
        setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: `Error: Unknown error` }] }]);
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: `Error: ${err.message}` }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    handleSendMessageWithText(message);
  };

  const handleSuggestion = (q) => {
    handleSendMessageWithText(q);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regData.name || !regData.email) {
      setRegError('Kripya apna naam aur email bharein.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regData.email)) {
      setRegError('Kripya valid email address enter karein.');
      return;
    }

    setIsRegistering(true);
    setRegError('');

    try {
      const data = await registerLead(regData);
      if (data.leadId) {
        setLeadId(data.leadId);
        localStorage.setItem('yug_chat_lead', JSON.stringify({ ...regData, leadId: data.leadId }));
        setShowThankYou(true);
        setTimeout(() => {
          setIsRegistered(true);
          setShowThankYou(false);
        }, 2000);
      } else {
        setRegError('Registration failed.');
      }
    } catch (err) {
      setRegError(err.message || 'Server setup is missing or offline.');
    } finally {
      setIsRegistering(false);
    }
  };

  const handleDismissOnboarding = () => {
    setShowOnboarding(false);
  };

  const handleChatNow = () => {
    setIsOpen(true);
    setShowOnboarding(false);
  };

  return {
    isOpen,
    setIsOpen,
    message,
    setMessage,
    chatHistory,
    isLoading,
    isRegistered,
    regData,
    setRegData,
    leadId,
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
  };
};
