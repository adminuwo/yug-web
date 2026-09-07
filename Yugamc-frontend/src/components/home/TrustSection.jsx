import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion';

// Cinematic noise texture overlay
const NoiseOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.04] mix-blend-soft-light" 
       style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 fill=%22%23000%22/%3E%3C/svg%3E")' }}>
  </div>
);

const AnimatedCounter = ({ end, duration = 3, label, desc, suffix = '', index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const endValue = end;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutExpo = 1 - Math.pow(2, -12 * progress);
        const currentValue = Math.floor(easeOutExpo * endValue);
        
        setCount(currentValue);
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(endValue);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col items-center text-center p-8 bg-white border border-black/5 rounded-[24px] shadow-[0_10px_25px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-default h-full"
    >
      {/* Luxury Number */}
      <div className="relative mb-4">
        <motion.div 
          className="text-4xl lg:text-5xl font-serif text-[#c46a4a] tracking-tight font-bold"
        >
          {count}{suffix}
        </motion.div>
      </div>

      {/* Spacing Divider */}
      <div className="h-[1px] w-8 bg-[#c46a4a]/20 mb-6 group-hover:w-16 transition-all duration-700 ease-out" />

      {/* Title & Description */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-sans tracking-[0.3em] uppercase text-text/60 font-bold group-hover:text-text transition-colors duration-500">
          {label}
        </h4>
        <p className="text-[9px] font-sans text-text/30 font-bold tracking-[0.1em] uppercase">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const TrustSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative -mt-32 pt-48 pb-40 overflow-hidden z-10"
    >
      {/* Soft Contrast Background Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#f8f6f4]" />
        {/* Subtle Ambient Glows - Option 3 */}
        <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#c46a4a]/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c46a4a]/5 blur-[150px] rounded-full" />
      </div>

      {/* Top Transition Fade */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      <motion.div 
        style={{ scale: sectionScale, opacity: sectionOpacity }}
        className="container mx-auto px-6 max-w-[1500px] relative z-20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 items-center">
          <AnimatedCounter index={0} end={13} suffix="+" label="Years of Experience" desc="A Legacy of Excellence" />
          <AnimatedCounter index={1} end={120} suffix="+" label="Homes Delivered" desc="Premium Living Spaces" />
          <AnimatedCounter index={2} end={3} suffix="+" label="Commercial Landmarks" desc="Strategic Business Hubs" />
          <AnimatedCounter index={3} end={10} suffix="+" label="Locations Transformed" desc="Urban Revitalization" />
        </div>
      </motion.div>

      {/* Floor Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
};

export default TrustSection;
