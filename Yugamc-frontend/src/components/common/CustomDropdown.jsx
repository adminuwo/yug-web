import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CustomDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option", 
  icon: Icon,
  label,
  name
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      {label && (
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 ml-1">
          {label}
        </label>
      )}
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-4 w-full bg-[#f8f8f8] rounded-xl px-4 py-3.5 md:py-4 cursor-pointer
          border ${isOpen ? 'border-[#c46a4a]/30 ring-4 ring-[#c46a4a]/5' : 'border-black/5'}
          transition-all duration-300 group
        `}
      >
        {/* Left Icon */}
        {Icon && <Icon size={16} className={`transition-colors duration-300 ${isOpen ? 'text-[#c46a4a]' : 'text-[#c46a4a]/60'}`} />}
        
        {/* Value Display */}
        <span className={`text-sm font-sans flex-1 ${!value ? 'text-text/30' : 'text-text'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Custom Arrow */}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-500 text-text/30 group-hover:text-text/60 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute z-[100] top-full left-0 w-full mt-2 bg-white border border-black/5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {options.map((option, index) => (
                <motion.div
                  key={option.value}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    px-5 py-3 text-sm font-sans cursor-pointer transition-all duration-200
                    hover:bg-[#c46a4a]/5 hover:pl-7
                    ${value === option.value ? 'bg-[#c46a4a]/10 text-[#c46a4a] font-semibold' : 'text-text/70'}
                  `}
                >
                  {option.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
