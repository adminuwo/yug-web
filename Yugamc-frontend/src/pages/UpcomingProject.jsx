import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Users, Navigation, TrendingUp, PieChart, ArrowUpRight, CheckCircle2 } from 'lucide-react';

import elevation_1_2 from '../assets/elevation_1_2.png';
import elevation_1_3 from '../assets/elevation 1.3.png';
import retail_plaza from '../assets/Retail Plaza Concept View.jpg.jpeg';
import retail_corridor from '../assets/First Floor Retail Corridor Concept View.jpg.jpeg';
import hotel_drop_off from '../assets/Hotel Drop Off Concept View.jpg.jpeg';

// Light elegant noise texture
const LightNoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] mix-blend-multiply" 
       style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 fill=%22%23000%22/%3E%3C/svg%3E")' }}>
  </div>
);

const UpcomingProject = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 1. Bi-directional Smooth Scroll Animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const textFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  // Premium cinematic zoom-out and upward reveal
  const cinematicImageReveal = {
    hidden: { opacity: 0, scale: 1.2, y: 60 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Full width cinematic image reveal
  const fullWidthImageReveal = {
    hidden: { opacity: 0, scale: 1, clipPath: "inset(10% 0 10% 0)" },
    visible: { 
      opacity: 1, 
      scale: 1.05,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Hero Split Curtain Reveal (Light Theme)
  const revealVariants = {
    splitLeft: {
      initial: { x: 0 },
      animate: { x: "-100%", transition: { delay: 1.5, duration: 1.5, ease: [0.76, 0, 0.24, 1] } }
    },
    splitRight: {
      initial: { x: 0 },
      animate: { x: "100%", transition: { delay: 1.5, duration: 1.5, ease: [0.76, 0, 0.24, 1] } }
    },
    introText: {
      initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      animate: { 
        opacity: [0, 1, 1, 0], scale: [0.9, 1, 1.02, 1.05],
        filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
        transition: { times: [0, 0.2, 0.8, 1], duration: 2, ease: "easeInOut" }
      }
    },
    background: {
      initial: { scale: 1.1 },
      animate: { scale: 1.05, transition: { delay: 1.5, duration: 4, ease: "easeOut" } }
    },
    textParent: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 2.5 } }
    }
  };

  return (
    <div className="bg-[#f8f6f2] text-text font-bold min-h-screen overflow-x-hidden selection:bg-[#c47a5a] selection:text-[#f8f6f2] font-sans">
      <LightNoiseOverlay />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#c47a5a] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION (Light Overlay + Cinematic Reveal) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0">
          <motion.div variants={revealVariants.background} initial="initial" animate="animate" className="w-full h-full relative">
            <video autoPlay loop muted playsInline poster={elevation_1_2} className="absolute inset-0 w-full h-full object-cover">
              <source src="https://videos.pexels.com/video-files/3201509/3201509-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            {/* The actual image if video is not available */}
            <img src={elevation_1_2} alt="City Plaza" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </motion.div>
          {/* Light Theme Gradient Fade to reveal the image beautifully but keep text legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f2]/60 via-[#f8f6f2]/20 to-[#f8f6f2]/80 z-10" />
        </motion.div>

        {/* Cinematic Reveal Overlay - Light Theme */}
        <motion.div variants={revealVariants.splitLeft} initial="initial" animate="animate" className="absolute inset-y-0 left-0 w-1/2 z-30 bg-[#f8f6f2] border-r border-[#c47a5a]/20 shadow-[20px_0_50px_rgba(0,0,0,0.05)]" />
        <motion.div variants={revealVariants.splitRight} initial="initial" animate="animate" className="absolute inset-y-0 right-0 w-1/2 z-30 bg-[#f8f6f2] border-l border-[#c47a5a]/20 shadow-[-20px_0_50px_rgba(0,0,0,0.05)]" />
        
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <motion.h1 variants={revealVariants.introText} initial="initial" animate="animate" className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest text-center text-text font-bold">
            Introducing <br className="md:hidden" />
            <span className="italic font-light text-[#c47a5a]">City Plaza</span>
          </motion.h1>
        </div>
        
        {/* Hero Content */}
        <motion.div variants={revealVariants.textParent} initial="initial" animate="animate" className="relative z-20 text-center px-6 max-w-6xl mt-20 flex flex-col items-center">
          <motion.span 
            variants={textFadeUp} 
            className="inline-block uppercase font-medium mb-8 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm"
            style={{ 
              color: '#1A1A1A', 
              letterSpacing: '3px', 
              fontSize: '13px'
            }}
          >
            The Crown Jewel of Jabalpur
          </motion.span>
          <motion.h1 className="mb-10 text-text font-bold">
            <motion.span variants={textFadeUp} className="block text-3xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-2 drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]">
              A New Landmark for
            </motion.span>
            <motion.span variants={textFadeUp} className="block text-4xl md:text-6xl lg:text-[7rem] font-serif italic leading-[1.1] md:leading-none py-4">
              <span className="text-text font-bold">Business</span>{' '}
              <span className="text-text font-bold">&</span>{' '}
              <span className="text-text font-bold drop-shadow-[0_4px_25px_rgba(255,255,255,0.9)]">Growth</span>
            </motion.span>
          </motion.h1>
          <motion.p variants={textFadeUp} className="text-text font-bold text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed bg-white/40 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
            City Plaza is a premium commercial hub designed for striking visibility, global brands, and absolute long-term investment growth.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. SECTION 1 – EXTERIOR VIEW (Image Left, Text Right - Broken Grid) */}
      <section className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[90rem]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center relative"
          >
            <motion.div className="w-full lg:w-[65%] relative group h-[350px] md:h-[450px] lg:h-[520px] lg:-ml-12 rounded-[30px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-10">
              <motion.img 
                variants={cinematicImageReveal} src={elevation_1_3} alt="Exterior View" 
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2s] ease-out will-change-transform"
              />
            </motion.div>
            
            <motion.div className="w-full lg:w-[45%] relative z-20 lg:-ml-32 mt-12 lg:mt-0">
              <div className="bg-white/70 backdrop-blur-3xl border border-white rounded-[30px] p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c47a5a]/10 rounded-full blur-[60px] -z-10" />
                <motion.p variants={textFadeUp} className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">
                  Exterior Architecture
                </motion.p>
                <motion.h2 variants={textFadeUp} className="text-4xl md:text-5xl font-serif font-light text-text font-bold mb-6 leading-tight">
                  An Iconic <br/><span className="italic font-normal text-[#c47a5a]">Commercial Landmark</span>
                </motion.h2>
                <motion.p variants={textFadeUp} className="text-text font-bold text-lg font-light leading-relaxed">
                  Engineered to be an unmistakable anchor for high-end retail, striking visibility, and state-of-the-art design setting a new visual standard for the city's skyline.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION 2 – RETAIL EXPERIENCE (Image Right, Text Left - Broken Grid) */}
      <section className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[90rem]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={staggerContainer}
            className="flex flex-col-reverse lg:flex-row items-center relative"
          >
            <motion.div className="w-full lg:w-[45%] relative z-20 lg:-mr-32 mt-12 lg:mt-0">
              <div className="bg-white/70 backdrop-blur-3xl border border-white rounded-[30px] p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c47a5a]/10 rounded-full blur-[60px] -z-10" />
                <motion.p variants={textFadeUp} className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">
                  Retail Zones
                </motion.p>
                <motion.h2 variants={textFadeUp} className="text-4xl md:text-5xl font-serif font-light text-text font-bold mb-6 leading-tight">
                  <span className="italic font-normal text-[#c47a5a]">Premium</span> Retail Experience
                </motion.h2>
                <motion.p variants={textFadeUp} className="text-text font-bold text-lg font-light leading-relaxed">
                  Designed to maximize footfall and consumer engagement, offering expansive multi-level retail spaces precisely tailored for global brands and flagship stores.
                </motion.p>
              </div>
            </motion.div>

            <motion.div className="w-full lg:w-[65%] relative group h-[350px] md:h-[450px] lg:h-[520px] lg:-mr-12 rounded-[30px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-10">
              <motion.img 
                variants={cinematicImageReveal} src={retail_plaza} alt="Retail Experience" 
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2s] ease-out will-change-transform"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION 3 – WALKWAY / LIFESTYLE (Full-width Cinematic) */}
      <section className="py-16 md:py-20 relative z-10 w-full upcoming-section">
          <motion.div 
          initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }} variants={staggerContainer}
          className="relative w-full flex flex-col lg:h-[550px] lg:block overflow-hidden"
        >
          <motion.div className="relative lg:absolute lg:inset-0 z-0 h-[250px] md:h-[400px] lg:h-full upcoming-image-container">
            <motion.img 
              variants={fullWidthImageReveal} src={retail_corridor} alt="Walkway Lifestyle" 
              className="w-full h-full object-cover will-change-transform upcoming-image"
            />
            {/* Elegant Light Gradient Fade - refined to just top/bottom edges */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#f8f6f2] via-transparent to-transparent h-48 z-10 hidden lg:block" />
            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#f8f6f2] via-transparent to-transparent h-48 z-10 hidden lg:block" />
          </motion.div>
          
          <div className="relative z-20 container mx-auto px-4 md:px-6 flex justify-center lg:justify-start -mt-10 lg:mt-60">
            <div className="max-w-2xl bg-white/70 backdrop-blur-2xl border border-white rounded-[24px] lg:rounded-[40px] p-8 md:p-14 shadow-2xl content-card">
              <motion.p variants={textFadeUp} className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">
                Walkway & Lifestyle
              </motion.p>
              <motion.h2 variants={textFadeUp} className="text-2xl md:text-5xl font-serif font-light text-text font-bold mb-6 leading-tight">
                Designed for <br/> <span className="italic font-normal text-[#c47a5a]">Modern Living</span>
              </motion.h2>
              <motion.p variants={textFadeUp} className="text-text font-bold text-sm md:text-lg font-light leading-relaxed">
                Seamless connectivity across brilliant corridors, creating an inviting atmosphere that blends shopping, leisure, and entertainment perfectly.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. SECTION 4 – HOTEL / LUXURY (Split Layout again - Image Left - Broken Grid) */}
      <section className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-[90rem]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center relative"
          >
            <motion.div className="w-full lg:w-[65%] relative group h-[350px] md:h-[450px] lg:h-[520px] lg:-ml-12 rounded-[30px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-10">
              <motion.img 
                variants={cinematicImageReveal} src={hotel_drop_off} alt="Hotel Luxury" 
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2s] ease-out will-change-transform"
              />
            </motion.div>
            
            <motion.div className="w-full lg:w-[45%] relative z-20 lg:-ml-32 mt-12 lg:mt-0">
              <div className="bg-white/70 backdrop-blur-3xl border border-white rounded-[30px] p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#c47a5a]/10 rounded-full blur-[60px] -z-10 -translate-y-1/2" />
                <motion.p variants={textFadeUp} className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">
                  Hospitality
                </motion.p>
                <motion.h2 variants={textFadeUp} className="text-4xl md:text-5xl font-serif font-light text-text font-bold mb-6 leading-tight">
                  Luxury <span className="italic font-normal text-[#c47a5a]">Integration</span>
                </motion.h2>
                <motion.p variants={textFadeUp} className="text-text font-bold text-lg font-light leading-relaxed">
                  A grand drop-off experience indicating a flawless fusion of premium corporate spaces right beside luxury hospitality standards.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. LOCATION ADVANTAGE (Visual & Map-Inspired Timeline) */}
      <section className="py-20 md:py-24 relative z-10 w-full bg-[#f8f6f2] rounded-t-[50px] md:rounded-t-[80px] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        {/* Subtle Map-inspired overlay background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #c47a5a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={staggerContainer} className="mt-12">
            <motion.div variants={textFadeUp} className="text-center mb-24">
              <p className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">Strategic Positioning</p>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-text font-bold">Location <span className="italic text-[#c47a5a]">Advantage</span></h2>
            </motion.div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start w-full max-w-5xl mx-auto gap-12 md:gap-0 mt-16">
              {/* Connecting Horizontal Line */}
              <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c47a5a]/30 to-transparent hidden md:block -z-10" />
              
              {[
                { icon: <Navigation size={28} />, title: "Prime Connectivity", desc: "Located at the heart of arterial roads ensuring easy inflow from all cardinal points of the city." },
                { icon: <Users size={28} />, title: "High Footfall", desc: "Surrounded by densely populated premium residential zones with immense purchasing power." },
                { icon: <MapPin size={28} />, title: "Easy Accessibility", desc: "Ample parking and multi-point entry/exit points designed for seamless visitor convenience." }
              ].map((item, i) => (
                <motion.div key={i} variants={textFadeUp} className="flex flex-col items-center text-center relative w-full md:w-1/3 px-4 group">
                  <div className="w-20 h-20 rounded-full bg-white border border-[#c47a5a]/20 flex items-center justify-center text-[#c47a5a] shadow-[0_10px_30px_rgba(196,122,90,0.1)] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c47a5a] group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-text font-bold mb-4">{item.title}</h3>
                  <p className="text-text font-bold font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. WHY INVEST (Bold Metric-Style Cards) */}
      <section className="py-20 md:py-24 relative z-10 w-full bg-gradient-to-b from-[#ffffff] to-[#f4eee6]">
        <div className="container mx-auto px-6 max-w-[85rem] relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={staggerContainer}>
             <motion.div variants={textFadeUp} className="text-center mb-24">
              <p className="text-[#c47a5a] tracking-[0.4em] text-xs uppercase font-bold mb-4">Financial Viability</p>
              <h2 className="text-5xl md:text-7xl font-serif font-light text-text font-bold">Why <span className="italic text-[#c47a5a] font-medium">Invest?</span></h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { metric: "Max", suffix: "ROI", title: "Rental Yields", desc: "Commercial spaces in such prime hubs yield substantially higher rental returns than residential." },
                { metric: "Peak", suffix: "Demand", title: "Growing Market", desc: "Jabalpur's shifting commercial landscape demands high-quality premium spaces for luxury brands." },
                { metric: "3X", suffix: "Value", title: "Appreciation", desc: "The combination of limited supply and strategic location ensures continuous multi-fold value growth." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 50 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }} 
                  className="bg-white rounded-[40px] p-10 lg:p-14 border-t-4 border-[#c47a5a] shadow-[0_20px_50px_-15px_rgba(196,122,90,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(196,122,90,0.25)] hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden text-center md:text-left"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#c47a5a]/5 to-transparent rounded-full blur-[20px] group-hover:bg-[#c47a5a]/15 transition-colors duration-500" />
                  
                  <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                    <span className="text-6xl lg:text-7xl font-serif font-medium text-text font-bold tracking-tight">{item.metric}</span>
                    <span className="text-2xl text-[#c47a5a] font-bold">{item.suffix}</span>
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c47a5a] mb-6">{item.title}</h3>
                  <p className="text-text font-bold text-lg font-light leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CTA (Cinematic Light Theme) */}
      <section className="py-40 relative z-10 flex items-center justify-center border-t border-black/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={elevation_1_3} alt="City Plaza" className="w-full h-full object-cover opacity-[0.15] filter blur-xl scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f6f2]/80 to-[#f8f6f2]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={staggerContainer}
            className="max-w-3xl mx-auto bg-white/60 backdrop-blur-2xl border border-white p-12 md:p-20 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
          >
            <motion.h2 variants={textFadeUp} className="text-5xl md:text-7xl font-serif font-light text-text font-bold mb-8 leading-tight">
              Invest in the <br/><span className="italic text-[#c47a5a]">Future</span>
            </motion.h2>
            <motion.p variants={textFadeUp} className="text-text font-bold text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Secure a premium space in the most anticipated commercial destination of the city. Register your interest today.
            </motion.p>
            <motion.div variants={textFadeUp}>
              <Link to="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-[#c47a5a] text-white text-sm tracking-[0.3em] uppercase font-bold hover:bg-[#a86548] hover:shadow-[0_10px_30px_rgba(196,122,90,0.3)] transition-all rounded-full group">
                Book Space <ChevronRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingProject;
