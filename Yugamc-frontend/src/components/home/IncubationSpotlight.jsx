import React from 'react';
import { motion } from 'framer-motion';
import tbifLogo from '../../assets/tbif_logo.png';
import iitRoparLogo from '../../assets/iit_ropar_logo.jpg';
import uwoCommercial from '../../assets/uwo_commercial.jpeg';

const IncubationSpotlight = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-white to-[#f8f6f4] z-20">
      
      {/* 1. Cinematic Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-soft-light" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 fill=%22%23000%22/%3E%3C/svg%3E")' }}
      />

      {/* 2. Premium Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(196,106,74,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,106,74,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-80" 
      />

      {/* 3. Subtle Building Structure Watermark (Luxury Real Estate Theme) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.07] mix-blend-luminosity"
        style={{ backgroundImage: `url(${uwoCommercial})`, filter: 'contrast(1.1) brightness(1.05)' }}
      />

      {/* 4. Dynamic Slowly Pulsing Ambient Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.22, 0.15],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/35 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.1, 0.18, 0.1],
          x: [0, -25, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 blur-[150px] rounded-full pointer-events-none" 
      />

      {/* 5. Slow-Rising Floating Idea Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-accent/20 rounded-full blur-[1px] pointer-events-none"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            left: `${10 + i * 15 + Math.random() * 5}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-[10px] sm:text-xs font-bold font-sans tracking-[0.4em] uppercase text-accent">
              Empowering Next-Gen Tech With IIT Ropar
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-text tracking-tight mb-8 leading-tight"
          >
            Incubation <span className="italic font-light text-accent">Spotlight</span>
          </motion.h2>

          {/* Luxury thin line divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-accent/30 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-lg text-text/75 font-sans leading-relaxed tracking-wide"
          >
            <span className="font-bold text-text">UWO™</span> is officially incubated with{' '}
            <span className="font-bold text-accent">IIT Ropar – Technology Business Incubator Foundation (TBIF)</span>,
            empowering our vision to build intelligent digital platforms, AI-driven enterprise systems, and next-generation technology solutions.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          
          {/* IIT Ropar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-white border border-black/5 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-default"
          >
            <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center p-0">
              <img
                src={iitRoparLogo}
                alt="IIT Ropar Logo"
                className="max-w-full max-h-full object-contain mix-blend-multiply filter group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Divider line for desktop/tablet */}
            <div className="hidden sm:block w-px h-12 bg-black/10 self-center" />

            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-lg font-bold font-sans text-text group-hover:text-accent transition-colors duration-500">
                IIT Institute
              </h3>
              <p className="text-xs font-medium font-sans text-text/50 tracking-wider uppercase">
                Indian Institute of Technology
              </p>
            </div>
          </motion.div>

          {/* TBIF Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-white border border-black/5 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-default"
          >
            <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center p-0">
              <img
                src={tbifLogo}
                alt="IIT Ropar TBIF Logo"
                className="max-w-full max-h-full object-contain mix-blend-multiply filter group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Divider line for desktop/tablet */}
            <div className="hidden sm:block w-px h-12 bg-black/10 self-center" />

            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-lg font-bold font-sans text-text group-hover:text-accent transition-colors duration-500">
                IIT Ropar – TBIF
              </h3>
              <p className="text-xs font-medium font-sans text-text/50 tracking-wider uppercase">
                Technology Business Incubator
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IncubationSpotlight;
