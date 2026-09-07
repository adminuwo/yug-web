import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import yugLogo from '../assets/yug logo.webp';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      url: "https://www.instagram.com/yug_amc/", 
      label: "Instagram",
      brandColor: "#E4405F"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      ), 
      url: "https://www.facebook.com/profile.php?id=61575266951524", 
      label: "Facebook",
      brandColor: "#1877F2"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.396 2.966 7.396 6.93 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 12.017 0z"/>
        </svg>
      ), 
      url: "https://in.pinterest.com/Yugamcpvtltd/", 
      label: "Pinterest",
      brandColor: "#E60023"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19 9.457 12.504h-7.406l-5.799-7.581-6.639 7.581H.47l8.59-9.816L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.291 19.497h2.039L6.486 3.24H4.298l13.312 17.41z"/>
        </svg>
      ), 
      url: "https://x.com/yugamc22", 
      label: "X",
      brandColor: "#000000"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      url: "https://www.youtube.com/@Yugamc", 
      label: "YouTube",
      brandColor: "#FF0000"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ), 
      url: "https://www.linkedin.com/in/yug-amc-pvt-ltd-943ab3371/", 
      label: "LinkedIn",
      brandColor: "#0077B5"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.933 0 1.691.751 1.691 1.673 0 .584-.306 1.096-.773 1.393.023.16.035.322.035.487 0 2.302-2.864 4.171-6.394 4.171-3.53 0-6.394-1.87-6.394-4.171 0-.16.012-.317.035-.473A1.693 1.693 0 0 1 4.498 12.1c0-.923.757-1.674 1.692-1.674.475 0 .897.182 1.205.489 1.196-.853 2.846-1.411 4.665-1.481l.813-3.824a.249.249 0 0 1 .184-.194l2.763.582a1.248 1.248 0 0 1 1.189-.854zM8.57 12.1c-.689 0-1.25.548-1.25 1.222 0 .674.56 1.222 1.25 1.222.688 0 1.25-.548 1.25-1.222 0-.674-.562-1.222-1.25-1.222zm6.86 0c-.687 0-1.25.548-1.25 1.222 0 .674.562 1.222 1.25 1.222.688 0 1.25-.548 1.25-1.222 0-.674-.562-1.222-1.25-1.222zm-3.41 3.535c-.477 0-.81.041-.986.101-.06.021-.115.042-.164.062a.256.256 0 0 0-.154.218c-.007.144.119.256.26.24.048-.005.101-.019.155-.038a3.179 3.179 0 0 1 .889-.101c.31 0 .61.034.889.101.054.019.107.033.155.038a.256.256 0 0 0 .26-.24.256.256 0 0 0-.154-.218c-.049-.02-.104-.041-.164-.062-.176-.06-.509-.101-.986-.101z"/>
        </svg>
      ), 
      url: "https://www.reddit.com/user/Accomplished-One3424/", 
      label: "Reddit",
      brandColor: "#FF4500"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M22.25 15.71a9.12 9.12 0 0 1-1.39 2.51 11.23 11.23 0 0 1-1.4 1 1.7 1.7 0 0 0-.25.26c-.19.2-.29.41-.29.56 0 .58.55 1.57 1.63 3 .12.11.13.2.06.27l-1.35 1.15c-.1.08-.2.1-.31.05-1.16-.76-2-1.34-2.58-1.74a4.08 4.08 0 0 0-.67-.34h-.23l-.11-.08A9.15 9.15 0 0 1 12 23.32a9.42 9.42 0 0 1-7.14-3.09A10.88 10.88 0 0 1 2 12a10.83 10.83 0 0 1 2.86-8.23A9.43 9.43 0 0 1 12.01.68q3.53 0 6.07 1.84a9.48 9.48 0 0 1 4.17 9.48 10.15 10.15 0 0 1 0 3.71zm-9.35-6.32a3.73 3.73 0 0 0-3.32 2.6c-.18.66-.27 1.25-.27 1.76a4 4 0 0 0 .15 1.14 3.73 3.73 0 0 0 3.44 2.65c1.45 0 2.5-.59 3.12-1.76a4.57 4.57 0 0 0 .42-2 4.41 4.41 0 0 0-.54-2.13c-.63-1.12-1.63-1.69-3-1.69z"/>
        </svg>
      ), 
      url: "https://www.quora.com/profile/YUG-AMC", 
      label: "Quora",
      brandColor: "#B92B27"
    },
    { 
      icon: ({ size = 20 }) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <rect width="24" height="24" rx="2" />
          <path d="M16.031 7.031c.21 0 .38.167.38.375v9.188c0 .208-.17.375-.38.375H14.16a.37.37 0 01-.375-.375V9.453l-1.42 5.656a.37.37 0 01-.354.281h-1.542a.37.37 0 01-.354-.281l-1.42-5.656v7.547c0 .208-.17.375-.375.375H7.135a.37.37 0 01-.375-.375V7.406c0-.208.17-.375.375-.375h2.188c.185 0 .343.136.37.313l1.458 5.864 1.458-5.864a.376.376 0 01.37-.313h1.083z" fill="white" />
        </svg>
      ), 
      url: "https://medium.com/@yugamcteam", 
      label: "Medium",
      brandColor: "#000000"
    },
  ];

  return (
    <footer className="bg-[#f1ede7] text-black font-bold pt-24 pb-12 overflow-hidden border-t border-black/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-20">
          {/* Column 1: Brand info */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col items-start gap-4 group">
              <img 
                src={yugLogo} 
                alt="YUG AMC Logo" 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-3xl font-serif font-bold text-black">
                Yug<span className="text-accent">AMC</span>
              </span>
            </Link>
            <p className="text-black font-bold font-sans leading-relaxed max-w-sm">
              At YugAMC, we don't just develop properties — we create spaces where life grows, businesses thrive, and investments multiply. Driven by trust, precision, and modern lifestyles.
            </p>
            
            {/* Social Icons - Premium Style */}
            <div className="flex gap-3 md:gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: social.brandColor, 
                    borderColor: social.brandColor,
                    y: -4
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                  style={{ color: social.brandColor }}
                >
                  <social.icon size={20} className="group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick links */}
          <div className="lg:pl-12">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-black">Quick Links</h4>
            <ul className="space-y-5 font-sans">
              <li><Link to="/about" className="hover:text-accent transition-colors duration-300">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors duration-300">Projects</Link></li>
              <li><Link to="/upcoming" className="hover:text-accent transition-colors duration-300">Upcoming Projects</Link></li>
              <li><Link to="/why-us" className="hover:text-accent transition-colors duration-300">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-black">Contact info</h4>
              <address className="not-italic space-y-5 font-sans leading-relaxed">
                <a 
                  href="https://www.google.com/maps?ll=23.140702,79.925953&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=9922169436067378815" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <MapPin className="mt-1 text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                   <span>4th Floor, SG Square Building, <br/> near Punjab National Bank, Rampur Chowk,<br/> Jabalpur</span>
                </a>

                <a 
                  href="https://wa.me/918871190020" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <Phone className="text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                  <span>+91 8871190020</span>
                </a>

                <a 
                  href="mailto:admin@uwo24.com" 
                  className="flex items-center gap-3 group hover:text-accent transition-colors duration-300"
                >
                  <Mail className="text-accent transition-transform duration-300 group-hover:scale-110" size={18} />
                  <span>admin@uwo24.com</span>
                </a>
              </address>
          </div>
        </div>
        
        {/* Bottom Section with separator */}
        <div className="border-t border-black/[0.08] pt-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-black font-bold font-sans tracking-wide">
          <p>&copy; {new Date().getFullYear()} YUG Asset Management Company. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-10">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
