import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';

// Import cinematic images
import v1 from '../assets/v1.jpg';
import v2 from '../assets/v2.webp';
import v3 from '../assets/v3.jpg';
import v4 from '../assets/v4.webp';
import v5 from '../assets/v5.avif';

const images = [v1, v2, v3, v4, v5];

const WhyChooseUs = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-primary">
      {/* Hero with Cinematic Background */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-secondary">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 bg-black">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ zIndex: i === index ? 1 : 0, pointerEvents: 'none' }}
            >
              <motion.img
                src={img}
                alt=""
                initial={false}
                animate={{ 
                  scale: i === index ? 1.15 : 1,
                  x: i === index ? (i % 2 === 0 ? -20 : 20) : 0,
                  y: i === index ? (i % 3 === 0 ? -10 : 10) : 0
                }}
                transition={{ duration: 6, ease: "linear" }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[6px]" />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent tracking-[0.3em] text-xs md:text-sm uppercase font-bold mb-6 block"
          >
            Our Advantages
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text leading-tight">
            {["The", "YugAMC", "Advantage"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3 + (i * 0.2),
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                className={`inline-block mr-4 md:mr-6 ${i === 2 ? 'italic font-light' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      {/* Main Content using the Home component for symmetry */}
      <WhyChooseUsSection />

      {/* Premium Brand Statement Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-white to-[#f4f4f4]">
        {/* Subtle Background Shape/Image */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <motion.img 
            src={v1} 
            alt="" 
            className="w-full h-full object-cover blur-3xl scale-125"
            initial={{ rotate: 0 }}
            animate={{ rotate: 10 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-text tracking-tight leading-[1.2]">
              <div className="flex flex-wrap justify-center mb-2">
                {"A Standard That".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1, 
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    className="inline-block mr-4 md:mr-6"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center">
                {"Never Drops".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 + (i * 0.03), 
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    className="inline-block text-accent italic font-light"
                  >

                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </h2>
            
            {/* Animated accent line */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 120, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="h-[1px] bg-accent mx-auto mt-8 md:mt-12"
            />

          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-text font-bold font-sans leading-relaxed max-w-[700px] text-center"

          >
            Our core philosophy revolves around ensuring that your hard-earned investment yields spaces that transcend time. With meticulous planning, top-tier build quality, and an unwavering commitment to transparency, every YugAMC project stands as a testament to perfection.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
