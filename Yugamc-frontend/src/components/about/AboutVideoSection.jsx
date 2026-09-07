import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import aboutVideo from '../../assets/Happy_Family_s_Luxury_Home_Video.mp4';

const AboutVideoSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Pause when scrolled out of view
  useEffect(() => {
    if (!isInView && isPlaying) {
      videoRef.current?.pause();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPlaying(false);
    }
  }, [isInView, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <section ref={containerRef} className="pt-12 pb-24 md:pt-12 md:pb-32 bg-gradient-to-b from-[#f8f6f3] to-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-5/12 lg:w-4/12 order-1 pr-0 lg:pr-8"
          >
            <span className="text-accent tracking-[0.3em] text-[10px] uppercase font-bold mb-4 block">
              The YugAMC Standard
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6 leading-[1.2]">
              Building Trust. <br/>
              <span className="italic font-light text-accent">Creating Value.</span>
            </h2>
            <p className="text-lg text-text/70 font-sans leading-relaxed mb-8">
              Transforming Jabalpur's skyline through thoughtful residential and commercial development.
            </p>
            
            {/* Design Element: Stats Divider */}
            <div className="flex items-center gap-8 pt-8 border-t border-text/10">
              <div>
                <span className="text-3xl font-serif text-text block mb-1">13<span className="text-accent">+</span></span>
                <span className="text-[10px] tracking-widest uppercase text-text/50 font-bold">Years of Experience</span>
              </div>
              <div className="h-10 w-px bg-text/10" />
              <div>
                <span className="text-3xl font-serif text-text block mb-1">120<span className="text-accent">+</span></span>
                <span className="text-[10px] tracking-widest uppercase text-text/50 font-bold">Homes Delivered</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Video Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-7/12 lg:w-8/12 order-2 relative"
          >
            <div 
              className="relative w-full aspect-video lg:aspect-[21/9] rounded-[28px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer group"
              onClick={togglePlay}
            >
              {/* Video Element */}
              <motion.video
                ref={videoRef}
                src={aboutVideo}
                className="w-full h-full object-cover origin-center"
                playsInline
                muted={isMuted}
                loop
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false }}
                animate={{ scale: isPlaying ? 1.1 : 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Cinematic Dark Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} 
              />

              {/* Play/Pause Button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  <Play size={32} className="fill-white ml-2" />
                </motion.div>
              </div>

              {/* Volume Toggle */}
              <div className={`absolute bottom-6 right-6 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
