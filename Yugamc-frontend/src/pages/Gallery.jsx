import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

import ss1 from '../assets/Screenshot 2026-03-20 080534.png';
import ss2 from '../assets/Screenshot 2026-03-20 080543.png';
import ss3 from '../assets/Screenshot 2026-03-20 080604.png';
import ss4 from '../assets/Screenshot 2026-03-20 080612.png';
import ss5 from '../assets/Screenshot 2026-03-20 080627.png';

// New Project Assets
import comm1 from '../assets/commercial_elevation_1.jpeg';
import comm2 from '../assets/commercial_elevation_2.jpeg';
import comm3 from '../assets/commercial_elevation_3.jpeg';
import comm4 from '../assets/commercial_elevation_4.jpeg';
import comm5 from '../assets/commercial_elevation_5.jpeg';
import sbiPromo from '../assets/sbi_promotional.jpeg';
import yashEntrance from '../assets/yash_heights_entrance.jpeg';
import yashPromo from '../assets/yash_heights_promotional.jpeg';
import uwoComm from '../assets/uwo_commercial.jpeg';
import villa1 from '../assets/villa_elevation_1.jpeg';
import restInt1 from '../assets/restaurant_interior_1.jpeg';

// Generated Premium Assets
import galLiving from '../assets/gallery_living.png';
import galKitchen from '../assets/gallery_kitchen.png';
import galBedroom from '../assets/gallery_bedroom.png';
import galEntrance from '../assets/gallery_entrance.png';

// New High-Res Project Assets
import elevation_1_2 from '../assets/elevation_1_2.png';
import elevation_1_3 from '../assets/elevation 1.3.png';
import retail_plaza from '../assets/Retail Plaza Concept View.jpg.jpeg';
import retail_corridor from '../assets/First Floor Retail Corridor Concept View.jpg.jpeg';
import hotel_drop_off from '../assets/Hotel Drop Off Concept View.jpg.jpeg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Upcoming', 'Yash Heights', 'Completed Projects', 'Interiors', 'Exteriors', 'Commercial'];

  const images = [
    // New Images Addition
    { id: 101, cat: 'Commercial', url: comm1, title: 'SBI Commercial Hub', desc: 'Premium commercial space featuring high-profile tenants like SBI.' },
    { id: 102, cat: 'Commercial', url: sbiPromo, title: 'Commercial Excellence', desc: 'Luxury commercial development by YUG AMC for prime business work.' },
    { id: 103, cat: 'Yash Heights', url: yashEntrance, title: 'Yash Heights Grand Entrance', desc: 'The welcoming face of luxury at our flagship residential project.' },
    { id: 104, cat: 'Exteriors', url: villa1, title: 'Modern Luxury Villa', desc: 'Cutting-edge contemporary design for exclusive high-end living.' },
    { id: 105, cat: 'Commercial', url: comm2, title: 'Naivedyam & The New Yorker', desc: 'Iconic commercial elevation housing Jabalpur\'s top lifestyle brands.' },
    { id: 106, cat: 'Yash Heights', url: yashPromo, title: 'Secure Gated Living', desc: 'CCTV monitored, community-focused residential excellence at Yash Heights.' },
    { id: 107, cat: 'Commercial', url: uwoComm, title: 'UWO Business Center', desc: 'Futuristic business infrastructure designed for the next generation.' },
    { id: 108, cat: 'Commercial', url: comm3, title: 'Glass Facade Design', desc: 'Stunning architectural glass work for maximum natural light and style.' },
    { id: 109, cat: 'Interiors', url: restInt1, title: 'Premium Café Interior', desc: 'Modern aesthetic interiors designed for the luxury hospitality segment.' },
    { id: 110, cat: 'Commercial', url: comm4, title: 'Strategic Business Point', desc: 'Main road visibility and premium architecture for retail success.' },
    { id: 111, cat: 'Commercial', url: comm5, title: 'Night Architectural View', desc: 'Dynamic lighting and presence of our commercial landmarks at dusk.' },

    // Upcoming Additions
    { id: 10, cat: 'Upcoming', url: elevation_1_3, title: 'City Plaza Elevation', desc: 'A stunning architectural overview of our upcoming commercial beacon.' },
    { id: 11, cat: 'Upcoming', url: elevation_1_2, title: 'City Plaza Front View', desc: 'Commanding front profile showcasing the expansive glass facade.' },
    { id: 12, cat: 'Upcoming', url: retail_corridor, title: 'First Floor Retail Corridor', desc: 'A vibrant and modern retail corridor designed to attract maximum footfall.' },
    { id: 13, cat: 'Upcoming', url: hotel_drop_off, title: 'Hotel Drop-Off Zone', desc: 'Premium drop-off experience seamlessly blending corporate and hospitality.' },
    { id: 14, cat: 'Upcoming', url: retail_plaza, title: 'Retail Plaza Concept', desc: 'Expansive multi-level space precisely tailored for global brands.' },

    { id: 1, cat: 'Yash Heights', url: ss1, title: 'Grand Elevation', desc: 'The signature luxury facade of Yash Heights, Jabalpur.' },
    { id: 2, cat: 'Yash Heights', url: ss2, title: 'Architectural Detail', desc: 'Premium corner perspective showing the blend of stone and glass.' },
    { id: 3, cat: 'Exteriors', url: galEntrance, title: 'Landscape & Entrance', desc: 'Elegant entrance designs with fountains and manicured gardens.' },
    { id: 4, cat: 'Interiors', url: galLiving, title: 'Modular Living Space', desc: 'Sophisticated living area layouts for modern families.' },
    { id: 5, cat: 'Interiors', url: galKitchen, title: 'Designer Kitchen', desc: 'State-of-the-art modular kitchen with premium finishes.' },
    { id: 6, cat: 'Completed Projects', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', title: 'The Grand Terrace', desc: 'A completed luxury penthouse terrace with panoramic views.' },
    { id: 7, cat: 'Interiors', url: galBedroom, title: 'Master Sanctuary', desc: 'The ultimate master bedroom designed for peace and elegance.' },
    { id: 9, cat: 'Exteriors', url: ss3, title: 'Yash Heights Brochure', desc: 'Detailed brochure view of amenities and landscape features.' },
  ];

  const filtered = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab || (activeTab === 'Yash Heights' && img.cat.includes('Yash')));

  const openLightbox = (img, index) => {
    setSelectedImg(img);
    setCurrentIndex(index);
    // eslint-disable-next-line
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    // eslint-disable-next-line
    document.body.style.overflow = 'auto';
  };

  const nextImg = () => {
    const nextIdx = (currentIndex + 1) % filtered.length;
    setCurrentIndex(nextIdx);
    setSelectedImg(filtered[nextIdx]);
  };

  const prevImg = () => {
    const prevIdx = (currentIndex - 1 + filtered.length) % filtered.length;
    setCurrentIndex(prevIdx);
    setSelectedImg(filtered[prevIdx]);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImg, currentIndex, filtered]);

  return (
    <div className="pt-24 min-h-screen bg-primary pb-32 overflow-hidden">
      {/* Header */}
      <div className="text-center py-24 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-accent tracking-[0.6em] text-[10px] uppercase font-bold mb-6 block">YUG AMC Portfolio</span>
          <h1 className="text-6xl md:text-9xl font-serif text-text mb-8 leading-none tracking-tighter">
            Aesthetic <span className="italic font-light text-accent">Realities.</span>
          </h1>
          <p className="text-text font-bold font-sans tracking-[0.2em] uppercase text-[10px] max-w-lg mx-auto border-t border-text/10 pt-8 mt-8">Where architectural vision meets impeccable delivery.</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-2 md:px-6 max-w-[1600px]">

        {/* Mobile Custom Dropdown Filter */}
        <div className="md:hidden flex justify-center mb-16 relative w-full max-w-[280px] mx-auto z-40">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white/70 backdrop-blur-md border border-accent/20 text-text text-xs tracking-[0.2em] uppercase py-4 px-6 rounded-full flex items-center justify-between shadow-[0_5px_15px_-5px_rgba(196,106,74,0.15)] ring-1 ring-white/50 transition-all hover:bg-white/90"
          >
            <span className="font-medium">{activeTab}</span>
            <ChevronDown size={14} className={`text-accent transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl border border-text/10 rounded-2xl shadow-xl overflow-hidden py-2"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 pl-8 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 border-l-2 ${
                      activeTab === cat 
                        ? 'border-accent bg-accent/5 text-accent font-bold' 
                        : 'border-transparent text-text font-bold hover:bg-black/5 hover:text-text'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Magnetic Filter Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-1 mb-24 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative px-8 py-4 transition-all duration-500 group"
            >
              <span className={`relative z-10 font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${activeTab === cat ? 'text-white' : 'text-text font-bold group-hover:text-text'}`}>
                {cat}
              </span>
              {activeTab === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => {
              // Premium balanced grid:
              // Mobile: Big (full width) followed by Medium (half width) pattern
              const isLargeMobile = idx % 3 === 0;
              
              const mSpan = isLargeMobile ? 2 : 1;
              const mAspect = isLargeMobile ? 'aspect-[16/9]' : 'aspect-[4/5]';

              return (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "50px" }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: "easeOut" }}
                  className={`relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer active:scale-[0.98] active:shadow-md transition-all duration-500
                    col-span-${mSpan} md:col-span-1
                    ${mAspect} md:aspect-[4/5] min-h-[160px]`}
                  onClick={() => openLightbox(img, idx)}
                >
                  <img
                    src={img.url}
                    alt={img.cat}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[800ms] md:duration-[2000ms] ease-out group-hover:scale-105 active:scale-[1.03]"
                  />

                  {/* Visual Overlay Design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300 md:duration-700 flex flex-col justify-end p-3 md:p-10 backdrop-blur-[2px] md:backdrop-blur-[2px]">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="flex flex-col space-y-1 md:space-y-2"
                    >
                      <span className="text-accent font-sans text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold">{img.cat}</span>
                      <h3 className="text-white font-serif text-sm md:text-3xl leading-tight">{img.title}</h3>
                      <div className="w-8 h-[1px] bg-white/30 my-2 md:my-4 hidden md:block"></div>
                      <p className="text-white/60 font-sans text-xs font-light hidden md:block">{img.desc}</p>
                    </motion.div>

                    <div className="absolute top-4 right-4 md:top-10 md:right-10 hidden md:flex">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                        <Maximize2 size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-10 right-10 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImg}
              className="absolute left-10 p-6 text-white/40 hover:text-white transition-colors z-50 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-all">
                <ChevronLeft size={20} />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block">Prev</span>
            </button>

            <button
              onClick={nextImg}
              className="absolute right-10 p-6 text-white/40 hover:text-white transition-colors z-50 flex items-center gap-4 group"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block">Next</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-all">
                <ChevronRight size={20} />
              </div>
            </button>

            <div className="relative w-full h-full p-4 md:p-20 flex flex-col items-center justify-center">
              <motion.div
                key={selectedImg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative max-h-[75vh] w-full flex items-center justify-center p-2 bg-white/5 rounded-lg"
              >
                <img
                  src={selectedImg.url}
                  alt={selectedImg.title}
                  className="max-w-full max-h-[70vh] object-contain shadow-2xl"
                />

                <div className="absolute -bottom-24 left-0 text-left">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-accent font-sans text-[11px] tracking-[0.5em] uppercase font-bold"
                  >
                    {selectedImg.cat}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-white font-serif text-5xl mt-4"
                  >
                    {selectedImg.title}
                  </motion.h2>
                </div>

                <div className="absolute -bottom-24 right-0 text-right max-w-sm hidden md:block">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-white/40 font-sans text-sm font-light leading-relaxed"
                  >
                    {selectedImg.desc}
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Backtrack aesthetics */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
