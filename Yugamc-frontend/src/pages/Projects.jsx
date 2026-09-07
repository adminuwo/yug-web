import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <div className="pt-24 min-h-screen bg-primary pb-24 text-text overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-text mb-6"
          >
            Our <span className="italic font-light text-accent">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-sans text-text font-bold max-w-2xl mx-auto"
          >
            A curated collection of developments built with quality, trust, and excellence.
          </motion.p>
        </div>

        {/* Vertical Storytelling Layout */}
        <div className="flex flex-col gap-32 pb-20">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
              >
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
                    {project.status === 'Completed' ? 'Delivered' : project.status} | {project.year !== '-' ? project.year : 'TBD'}
                  </span>
                  
                  <h2 className="text-4xl md:text-6xl font-serif text-text mb-4 flex items-baseline gap-3 flex-wrap">
                    {project.name}
                    {project.badge && (
                      <span className="text-sm font-sans font-normal text-text/30 tracking-widest lowercase">{project.badge}</span>
                    )}
                  </h2>
                  
                  <p className="font-sans italic text-text font-bold mb-8 border-l-2 border-accent pl-4">
                    {project.location}
                  </p>
                  
                  <p className="text-text font-bold font-sans leading-relaxed mb-8 text-base md:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.highlights.map((hlt, i) => (
                      <span key={i} className="px-4 py-2 bg-secondary/30 rounded-full text-[11px] font-bold uppercase tracking-wider text-text font-bold">
                        {hlt}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
                  >
                    <span>Explore Project</span>
                    <span className="w-8 h-[1px] bg-accent transition-all duration-500 group-hover:w-16"></span>
                  </Link>

                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <Link to={`/projects/${project.id}`} className="block relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                    <img 
                      src={project.images[0]} 
                      alt={project.name} 
                      className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 ${project.badge ? 'brightness-[0.3] blur-[2px]' : ''}`}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700"></div>
                    {project.badge && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                        <span className="text-[10px] tracking-[0.5em] uppercase text-white/50 font-bold mb-4">Coming Soon</span>
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-3">{project.name}</h3>
                        <div className="w-12 h-[1px] bg-accent mx-auto mb-3" />
                        <p className="text-white/50 text-xs font-sans tracking-widest uppercase">{project.location}</p>
                      </div>
                    )}
                  </Link>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Projects;
