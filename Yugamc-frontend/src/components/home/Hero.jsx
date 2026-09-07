import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import h1 from '../../assets/h1.avif';
import h3 from '../../assets/h3.avif';
import h5 from '../../assets/h5.jpg';
import h6 from '../../assets/h6.jpg';
import h8 from '../../assets/h8.webp';

const images = [h8, h6, h5, h1, h3];

const Hero = ({ onBookVisit }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isInitialMount, setIsInitialMount] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsAtTop(scrollY < 20);
      if (scrollY >= 20) {
        setIsInitialMount(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const mountTimer = setTimeout(() => {
      setIsInitialMount(false);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(mountTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col justify-center items-center py-20 md:py-24">
      {/* Cinematic Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 z-10" /> {/* Soft White Overlay */}
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 3, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" } // Ken Burns very slow zoom
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt="Luxury Building"
              className="w-full h-full object-cover brightness-110 contrast-105"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <span className="text-text font-bold font-sans tracking-[0.5em] uppercase text-[10px] border-b border-text/10 pb-2">
            Luxury Real Estate · Since 2014
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-text leading-[0.9] tracking-tighter"
          >
            Building <span className="italic font-light">Landmarks,</span> <br />
            <span className="text-accent">Creating</span> Value
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-text/80 font-normal font-sans max-w-2xl mb-8 md:mb-10 tracking-wide"
        >
          Redefining the skyline of Jabalpur with architectural excellence and uncompromising luxury.<br/>
          {/* We are now officially incubated with IIT Ropar – <span className="font-bold text-accent">Technology Business Incubator Foundation (TBIF)</span> */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center"
        >
          <Link to="/projects" className="group relative px-10 py-5 bg-accent text-white font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full overflow-hidden transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(196,106,74,0.5)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-text transition-colors duration-500">
              Explore Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </Link>

          <button
            onClick={onBookVisit}
            className="group relative px-10 py-5 border border-text/20 text-text font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full overflow-hidden transition-all duration-500 backdrop-blur-md hover:border-text active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
              Book Site Visit <Calendar size={14} className="group-hover:scale-110 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-text translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: isAtTop ? 1 : 0,
            y: isAtTop ? 0 : -10,
          }}
          transition={{
            duration: isInitialMount ? 1 : 0.4,
            delay: (isAtTop && isInitialMount) ? 2 : 0,
            ease: "easeInOut",
          }}
          className={`flex flex-col items-center gap-4 mt-8 sm:mt-10 md:mt-12 ${isAtTop ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <span className="text-[9px] text-text font-bold font-sans tracking-[0.4em] uppercase">Scroll to explore</span>
          <div className="w-px h-16 md:h-20 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white w-full h-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
