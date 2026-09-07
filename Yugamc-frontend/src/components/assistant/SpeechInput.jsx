import React from 'react';
import { Mic, MicOff } from 'lucide-react';

const SpeechInput = ({ isListening, toggleListening, disabled }) => {
  return (
    <button
      type="button"
      onClick={toggleListening}
      disabled={disabled}
      className={`p-3 rounded-xl transition-all flex items-center justify-center ${isListening ? 'bg-red-50 text-red-500 animate-pulse' : 'hover:bg-secondary/50 text-text/60 hover:text-accent'}`}
    >
      {isListening ? <MicOff size={18} /> : <Mic size={18} />}
    </button>
  );
};

export default SpeechInput;
