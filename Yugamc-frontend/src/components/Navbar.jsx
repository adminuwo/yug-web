import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import yugLogo from '../assets/yug logo.webp';

const Navbar = ({ onBookVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Why YugAMC', path: '/why-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white/10 backdrop-blur-sm py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50 flex items-center">
            <img
              src={yugLogo}
              alt="YUG AMC"
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-text font-bold'}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onBookVisit}
              className="px-6 py-2.5 bg-accent text-white font-medium text-sm hover:bg-text transition-all transform hover:scale-105 duration-300 shadow-xl shadow-accent/20"
            >
              Book Site Visit
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-text z-50 p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={30} className="text-text" /> : <Menu size={30} className="text-text" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99998]"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] sm:w-[400px] bg-white z-[99999] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Overlay Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary/50">
                <Link to="/" onClick={toggleMobileMenu} className="flex items-center">
                  <img
                    src={yugLogo}
                    alt="YUG AMC"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="ml-3 font-serif font-bold text-text tracking-tighter text-lg">YugAMC</span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-text hover:text-accent transition-colors bg-secondary/20 rounded-full"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-10">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                      >
                        <Link
                          to={link.path}
                          className={`group relative flex items-center text-[20px] font-serif tracking-wide py-4 px-4 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'text-accent font-semibold bg-accent/5' 
                              : 'text-text font-bold hover:text-accent hover:translate-x-2'
                          }`}
                          onClick={toggleMobileMenu}
                        >
                          {isActive && (
                            <motion.div 
                              layoutId="activeIndicator"
                              className="absolute left-0 w-1 h-6 bg-accent rounded-full"
                            />
                          )}
                          {link.name}
                        </Link>
                        {i < navLinks.length - 1 && (
                          <div className="h-px w-full bg-secondary/30 mx-4" />
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-12 p-6 bg-[#f8f8f8] rounded-2xl border border-secondary/30 shadow-sm">
                  <span className="text-accent text-[11px] tracking-[0.3em] uppercase font-bold block mb-4 opacity-80">Inquiries</span>
                  <div className="space-y-3">
                    <a href="mailto:admin@uwo24.com" className="block text-text font-bold font-serif text-lg hover:text-accent transition-colors">
                      admin@uwo24.com
                    </a>
                    <a href="https://wa.me/918871190020" target="_blank" rel="noopener noreferrer" className="block text-text font-bold font-sans text-sm hover:text-accent transition-colors">
                      +91 88711 90020
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-secondary/50 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <button 
                  onClick={() => {
                    toggleMobileMenu();
                    onBookVisit();
                  }}
                  className="flex items-center justify-center w-full py-4 bg-accent text-white font-medium rounded-xl shadow-lg shadow-accent/20 hover:bg-text hover:shadow-xl transition-all duration-300 transform active:scale-[0.98]"
                >
                  Book a Site Visit
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
