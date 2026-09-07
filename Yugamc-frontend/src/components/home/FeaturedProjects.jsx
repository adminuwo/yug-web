import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef(null);

  const orderedProjects = [
    projectsData.find(p => p.id === 'satguru-city-mall'),
    projectsData.find(p => p.id === 'yash-heights'),
    ...projectsData.filter(p => !['satguru-city-mall', 'yash-heights'].includes(p.id))
  ].filter(Boolean);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % orderedProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + orderedProjects.length) % orderedProjects.length);
  };

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 550, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -550, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#EDEDED]/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent tracking-[0.3em] text-[10px] uppercase font-bold mb-2 block">Premium Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-text leading-tight mb-6">Projects That Speak <br/><span className="italic font-light">for Our Legacy</span></h2>
            <p className="text-lg text-text font-bold font-sans max-w-2xl leading-relaxed opacity-70">
              From residential communities to commercial landmarks, our portfolio reflects thoughtful planning, trusted execution, and future-ready value.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0 flex items-center gap-6"
          >
            {/* Carousel Controls moved to sides */}
            <Link to="/projects" className="text-[10px] font-sans tracking-[0.3em] uppercase pb-2 border-b border-text/20 text-text font-bold hover:text-accent hover:border-accent transition-all duration-300">
              Explore All Projects
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Side Navigation Arrows (Always Visible on Mobile via media query or removing hidden) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-[-10px] md:-left-12 lg:-left-16 top-[150px] md:top-[200px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-lg border border-text/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all active:scale-95 carousel-arrow"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-[-10px] md:-right-12 lg:-right-16 top-[150px] md:top-[200px] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-lg border border-text/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all active:scale-95 carousel-arrow"
          >
            <ArrowRight size={20} />
          </button>

          <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto pb-12 scroll-smooth no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {orderedProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="flex-shrink-0 w-[82vw] md:w-[45vw] lg:w-[35vw] group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative h-[300px] md:h-[400px] w-full mb-8 overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700">
                    <img 
                      src={project.images[0]} 
                      alt={project.name} 
                      className={`w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-110 ${project.badge ? 'brightness-[0.25] blur-[2px]' : ''}`}
                    />
                    {/* Coming Soon Overlay */}
                    {project.badge ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <span className="text-[9px] tracking-[0.5em] uppercase text-white/40 font-bold mb-3">Coming Soon</span>
                        <h4 className="text-xl md:text-2xl font-serif text-white mb-3 leading-tight">{project.name}</h4>
                        <div className="w-10 h-[1px] bg-accent mx-auto mb-3" />
                        <p className="text-white/40 text-[10px] font-sans tracking-widest uppercase">{project.location}</p>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center backdrop-blur-[2px]">
                         <div className="w-12 h-[1px] bg-accent mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                         <span className="text-white font-sans tracking-[0.5em] uppercase text-[10px] font-bold">Explore Project</span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col space-y-3 px-2">
                   <div className="flex items-center gap-3">
                     <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">{project.type}</span>
                     <div className="w-4 h-[1px] bg-text/10" />
                     <span className="text-[9px] uppercase tracking-[0.1em] text-text/40 font-bold">{project.status}</span>
                   </div>
                   <div className="flex items-baseline gap-2 flex-wrap">
                     <h3 className="text-2xl md:text-3xl font-serif text-text group-hover:text-accent transition-colors duration-500">{project.name}</h3>
                     {project.badge && (
                       <span className="text-[10px] font-normal tracking-widest text-text/40 lowercase">{project.badge}</span>
                     )}
                   </div>
                   <p className="text-text font-bold font-sans text-xs max-w-sm line-clamp-2 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{project.description}</p>
                   
                   <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                     View Project Details
                     <ArrowRight size={12} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
