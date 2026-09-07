import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-text mb-4">Project Not Found</h1>
          <button onClick={() => navigate('/projects')} className="text-accent hover:underline font-bold uppercase tracking-widest text-sm">Return to Projects</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pb-24 text-text">
      {/* Navigation Bar Spacing Hack */}
      <div className="h-20 bg-white"></div>

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.images[0]} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container mx-auto max-w-7xl"
            >
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm uppercase tracking-widest font-bold">
                    <ArrowLeft size={16} /> Back
                </button>
                <h1 className="text-5xl md:text-8xl font-serif text-white mb-4">
                    {project.name}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80 font-sans">
                    <div className="flex flex-wrap items-center gap-2">
                        <MapPin size={18} className="text-accent" />
                        <span>{project.location}</span>
                    </div>
                    {project.year !== '-' && (
                      <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-accent" />
                          <span>{project.year}</span>
                      </div>
                    )}
                </div>
            </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 max-w-7xl mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-serif mb-6 text-text">Overview</h2>
                    <p className="text-lg font-sans text-text font-bold leading-relaxed">
                        {project.description} This {project.type.toLowerCase()} development emphasizes extraordinary quality and is built to deliver lasting value and premium experiences tailored specifically to those who seek the best.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-serif mb-6 text-text">Project Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.highlights.map((hlt, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-5 bg-white shadow-sm border border-secondary rounded-xl">
                                <CheckCircle size={20} className="text-accent shrink-0" />
                                <span className="font-sans font-medium text-text text-sm md:text-base">{hlt}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                

            </div>

            {/* Right Sticky Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 p-8 border border-secondary bg-white rounded-3xl shadow-xl shadow-accent/5">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                            {project.status === 'Completed' ? 'Ready to Move' : project.status}
                        </span>
                        <h3 className="text-2xl font-serif text-text mb-3">Interested in {project.name}?</h3>
                        <p className="text-sm font-sans text-text font-bold leading-relaxed">Schedule a personalized site visit or connect with our sales executive to explore investment benefits.</p>
                    </div>

                    <div className="space-y-4">
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-book-modal'))}
                            className="w-full py-4 bg-accent text-white font-bold text-sm tracking-[0.1em] uppercase rounded-xl hover:bg-text transition-colors shadow-lg shadow-accent/20"
                        >
                            Book Site Visit
                        </button>
                        <button 
                            onClick={() => navigate('/contact')}
                            className="w-full py-4 bg-white border border-secondary text-text font-bold text-sm tracking-[0.1em] uppercase rounded-xl hover:border-accent hover:text-accent transition-colors shadow-sm"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default ProjectDetail;
