import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Phone, Mail, MapPin, Send, Laptop, Landmark, Home, Briefcase } from 'lucide-react';
import CustomDropdown from '../components/common/CustomDropdown';
import c1 from '../assets/c1.jpg';
import d2 from '../assets/d2.jpg';
import { submitContact } from '../services/contactApi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Residential',
    project: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }
    setStatus('Sending...');
    try {
      await submitContact(formData);
      setStatus('Message Sent! We will call you back soon.');
      setFormData({ name: '', phone: '', email: '', requirement: 'Residential', project: '', message: '' });
    } catch(err) {
      setStatus(err.message || 'Error connecting to Server.');
    }
  };

  const faqs = [
    { q: "How can I book a property?", a: "You can schedule a site visit through this page, and our executives will assist you with the booking process." },
    { q: "Are your projects RERA approved?", a: "Yes, 100% of our ongoing projects are fully RERA approved." },
    { q: "Do you offer site visits?", a: "Absolutely. We provide complimentary pickup and drop for guided site visits." },
    { q: "Is City Plaza good for investment?", a: "City Plaza offers excellent ROI potential due to its prime location and commercial demand." },
    { q: "Do you provide assistance in buying?", a: "Yes, we handle the entire process from selection to loan processing and registry." }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={c1} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Luxury Architecture"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px] z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-accent tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold mb-4 block">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text mb-6 leading-tight">
              Let's <span className="italic font-light">Connect</span>
            </h1>
            <p className="text-lg md:text-xl font-sans text-text font-bold max-w-2xl mx-auto leading-relaxed">
              We’re here to guide your next investment journey with expertise and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f6f6f6]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Info, Image & FAQ */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              {/* Trust Image with Shadow and Zoom */}
              <div className="relative group overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={d2} 
                  alt="Professional Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex flex-col gap-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-5 text-accent shrink-0 border border-accent/10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1 text-text">Office Address</h4>
                      <p className="font-sans text-text font-bold text-sm leading-relaxed">4th Floor, SG Square Building, <br/> near Punjab National Bank, Rampur Chowk, Jabalpur</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-5 text-accent shrink-0 border border-accent/10">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1 text-text">Phone</h4>
                      <p className="font-sans text-text font-bold text-sm leading-relaxed">8871190020</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-5 text-accent shrink-0 border border-accent/10">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1 text-text">Email</h4>
                      <p className="font-sans text-text font-bold text-sm leading-relaxed">admin@uwo24.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="mt-7"
              >
                <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent mb-6">Find Us Here</h4>
                <div className="rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-secondary/50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.8054397751166!2d79.92337772503137!3d23.140785811906948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b2001fae8339%3A0x89b2a0883e08b67f!2sJP%20Techno%20Park%20-%20IT%20Services%20in%20Jabalpur.!5e0!3m2!1sen!2sin!4v1774061182954!5m2!1sen!2sin"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </motion.div>

              {/* FAQ Accordion */}
              <div>
                <h2 className="text-3xl font-serif text-text mb-8 text-left">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className={`border border-secondary rounded-xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-white shadow-sm border-accent/20' : 'bg-transparent'}`}>
                      <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex justify-between items-center px-6 py-5 focus:outline-none"
                      >
                        <span className={`font-serif text-lg transition-colors duration-300 ${openFaq === idx ? 'text-accent' : 'text-text'}`}>{faq.q}</span>
                        <motion.div
                          animate={{ rotate: openFaq === idx ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-accent ${openFaq === idx ? 'text-accent' : 'text-text/40'}`}
                        >
                          <Plus size={20} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-text font-bold font-sans text-base border-t border-secondary/30 pt-4 leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Glassmorphism Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 bg-white/70 backdrop-blur-[10px] p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/20 rounded-[20px] relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
              
              <h3 className="text-4xl font-serif text-text mb-4">Get a Call Back</h3>

              
              <form onSubmit={submitForm} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <label className="block text-[10px] tracking-[0.2em] font-bold uppercase text-accent mb-2">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      maxLength={100}
                      className="w-full bg-secondary/50 border-b-2 border-transparent px-0 py-3 outline-none focus:border-accent transition-all duration-300 font-sans text-text placeholder:text-text/30" 
                      placeholder="Your Name"
                      value={formData.name} 
                      onChange={e=>setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  <div className="group relative">
                    <label className="block text-[10px] tracking-[0.2em] font-bold uppercase text-accent mb-2">Phone</label>
                    <input 
                      required 
                      type="text" 
                      maxLength={15}
                      className="w-full bg-secondary/50 border-b-2 border-transparent px-0 py-3 outline-none focus:border-accent transition-all duration-300 font-sans text-text" 
                      placeholder="10-digit number"
                      value={formData.phone} 
                      onChange={e=>setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <label className="block text-[10px] tracking-[0.2em] font-bold uppercase text-accent mb-2">Email</label>
                    <input 
                      required 
                      type="email" 
                      maxLength={100}
                      className="w-full bg-secondary/50 border-b-2 border-transparent px-0 py-3 outline-none focus:border-accent transition-all duration-300 font-sans text-text" 
                      placeholder="hello@example.com"
                      value={formData.email} 
                      onChange={e=>setFormData({...formData, email: e.target.value})} 
                    />
                  </div>
                  <CustomDropdown
                    label="Requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                    icon={Briefcase}
                    placeholder="Select Requirement"
                    options={[
                      { value: "Residential", label: "Residential" },
                      { value: "Commercial", label: "Commercial" },
                      { value: "Investment", label: "Investment" }
                    ]}
                  />
                </div>

                <CustomDropdown
                  label="Preferred Project (Optional)"
                  name="project"
                  value={formData.project}
                  onChange={e => setFormData({ ...formData, project: e.target.value })}
                  icon={Home}
                  placeholder="None / Not Sure"
                  options={[
                    { value: "", label: "None / Not Sure" },
                    { value: "City Plaza", label: "City Plaza" },
                    { value: "Yash Heights", label: "Yash Heights" },
                    { value: "SG Square", label: "SG Square" },
                    { value: "Yug Villas", label: "Yug Villas" }
                  ]}
                />
                
                <div className="group relative">
                  <label className="block text-[10px] tracking-[0.2em] font-bold uppercase text-accent mb-2">Message</label>
                  <textarea 
                    rows="3" 
                    maxLength={1000}
                    className="w-full bg-secondary/50 border-b-2 border-transparent px-0 py-3 outline-none focus:border-accent transition-all duration-300 font-sans text-text resize-none" 
                    placeholder="Tell us what you're looking for..."
                    value={formData.message} 
                    onChange={e=>setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'Sending...'}
                  className="w-full group relative overflow-hidden py-5 rounded-full bg-gradient-to-r from-[#C46A4A] to-[#a8573b] text-white font-sans tracking-[0.3em] uppercase text-xs font-bold transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(196,106,74,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(196,106,74,0.6)] hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'Sending...' ? 'Sending...' : 'Enquire Now'} <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </span>
                </button>
                
                {status && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center text-sm font-sans font-medium ${status.includes('Sent') ? 'text-green-600' : 'text-accent'}`}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
