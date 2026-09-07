import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, IndianRupee, User, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { bookVisit } from '../services/bookingApi';
import CustomDropdown from './common/CustomDropdown';

const BookVisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    budget: '',
    visitDate: '',
    timeSlot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    let val = e.target.value;
    if (e.target.name === 'phone') {
      val = val.replace(/[^0-9]/g, '');
    }
    setFormData({ ...formData, [e.target.name]: val });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      await bookVisit(formData);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          budget: '',
          visitDate: '',
          timeSlot: ''
        });
        onClose();
      }, 3000);
    } catch (err) {
      setError(err.message || 'Connection error. Please check your internet or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100% ';
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl h-[85vh] md:h-auto md:max-h-[90dvh] flex flex-col overflow-hidden"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Header */}
          <div className="relative h-24 md:h-32 bg-[#c46a4a] flex items-center justify-center text-center px-6 flex-shrink-0">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-serif text-white tracking-wide">Schedule Your Private Visit</h2>
              <p className="text-white/80 text-[10px] md:text-sm font-sans mt-1 md:mt-2 tracking-[0.2em] uppercase mb-0">Experience Luxury Firsthand</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content (Scrollable) */}
          <div
            className="flex-1 overflow-y-auto p-6 md:p-10"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
              overscrollBehavior: 'contain'
            }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-serif text-text mb-4">Visit Requested Successfully!</h3>
                <p className="text-text/70 max-w-xs mx-auto mb-2">Our luxury concierge will contact you shortly to confirm your preferred time slot.</p>
                <p className="text-accent font-sans text-sm font-semibold">Talk to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 ml-1">Full Name</label>
                    <div className="relative">
                      <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                      <input
                        required
                        type="text"
                        name="name"
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#f8f8f8] border-none rounded-xl py-3.5 md:py-4 pl-12 pr-4 text-sm font-sans focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                      <input
                        required
                        type="tel"
                        name="phone"
                        maxLength={15}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className="w-full bg-[#f8f8f8] border-none rounded-xl py-4 pl-12 pr-4 text-sm font-sans focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                      <input
                        required
                        type="email"
                        name="email"
                        maxLength={100}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#f8f8f8] border-none rounded-xl py-4 pl-12 pr-4 text-sm font-sans focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Location */}
                  <CustomDropdown
                    label="Preferred Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    icon={MapPin}
                    placeholder="Select Project/Location"
                    options={[
                      { value: "Yash Heights", label: "Yash Heights (South Civil Lines)" },
                      { value: "City Plaza", label: "City Plaza (Rampur Chowk)" },
                      { value: "SG Square", label: "SG Square (Vijay Nagar)" },
                      { value: "Other", label: "Other" }
                    ]}
                  />

                  {/* Budget */}
                  <CustomDropdown
                    label="Expected Budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    icon={IndianRupee}
                    placeholder="Select Budget Range"
                    options={[
                      { value: "40-60L", label: "40L - 60L" },
                      { value: "60-80L", label: "60L - 80L" },
                      { value: "80L-1.2Cr", label: "80L - 1.2Cr" },
                      { value: "1.2Cr+", label: "1.2Cr+" }
                    ]}
                  />

                  {/* Visit Date */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/50 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                      <input
                        required
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full bg-[#f8f8f8] border-none rounded-xl py-4 pl-12 pr-4 text-sm font-sans focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div className="md:col-span-2">
                    <CustomDropdown
                      label="Preferred Time Slot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      icon={Clock}
                      placeholder="Select a time slot"
                      options={[
                        { value: "Morning (10 AM - 1 PM)", label: "Morning (10 AM - 1 PM)" },
                        { value: "Afternoon (1 PM - 4 PM)", label: "Afternoon (1 PM - 4 PM)" },
                        { value: "Evening (4 PM - 7 PM)", label: "Evening (4 PM - 7 PM)" }
                      ]}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded-lg">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-accent text-white font-bold rounded-2xl shadow-xl shadow-accent/20 transition-all hover:bg-text hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Scheduling...' : 'Confirm site visit'}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-white/10 to-accent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                <p className="text-center text-[10px] text-text/40 font-medium tracking-tight">
                  By clicking confirm, you agree to our terms and to be contacted by our sales team.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookVisitModal;
