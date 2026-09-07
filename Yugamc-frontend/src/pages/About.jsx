import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Target, Compass, Lightbulb, Grid, Building2, MessageSquare, BarChart3, Star, Sparkles } from 'lucide-react';
import h8 from '../assets/h8.webp';
import w1 from '../assets/w1.jpg';
import founderImg from '../assets/WhatsApp Image 2026-03-27 at 12.55.23 PM.jpeg';
import AboutVideoSection from '../components/about/AboutVideoSection';

const HoverCard = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.8 }}
    className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-secondary/20 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    <div className="text-accent mb-6 bg-accent/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
      {item.icon}
    </div>
    <h3 className="text-2xl font-serif text-text mb-4">{item.title}</h3>
    <p className="text-text/70 font-sans leading-relaxed">
      {item.desc}
    </p>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (

    <div className="pt-24 min-h-screen bg-primary">


      <AboutVideoSection />

      {/* Who We Are */}
      <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden bg-gradient-to-r from-white to-[#f7f7f7]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
            {/* Text content (Right on Desktop, Top on Mobile) */}
            <div className="w-full md:w-1/2 text-left">
              <motion.div
                initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth > 768 ? 50 : 0, y: typeof window !== 'undefined' && window.innerWidth <= 768 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[1px] bg-accent"
                  />
                  <Star className="text-accent fill-accent" size={12} />
                </div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-7xl font-serif text-text mb-8"
                >
                  Who We Are
                </motion.h2>

                <div className="space-y-6 max-w-[600px]">
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text font-bold font-sans leading-[1.8]"
                  >
                    YUG AMC is a forward-thinking real estate brand transforming Jabalpur's skyline with 
                    <span className="text-accent font-semibold px-1 italic">trust</span>, 
                    <span className="text-accent font-semibold px-1 italic">vision</span>, and 
                    <span className="text-accent font-semibold px-1 italic">innovation</span>. 
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text font-bold font-sans leading-[1.8]"
                  >
                    We bring international standards of architecture and premium lifestyle amenities to the heart of the city, ensuring every development stands as a benchmark of 
                    <span className="text-accent font-semibold px-1 italic">excellence</span>.
                  </motion.p>
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: false }}
                   transition={{ delay: 1, duration: 1 }}
                   className="mt-12 flex items-center gap-6"
                >
                  <div className="h-12 w-px bg-secondary" />
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent">
                    Est. 2014 · Jabalpur
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* High-quality building image (Left on Desktop, Bottom on Mobile) */}
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth > 768 ? -50 : 0, y: typeof window !== 'undefined' && window.innerWidth <= 768 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative background depth card */}
                <div className="absolute -inset-4 border border-secondary rounded-2xl -z-10 translate-x-4 translate-y-4" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <motion.img 
                    style={{ y }}
                    src={w1} 
                    alt="Premium Building" 
                    className="w-full aspect-square md:aspect-[5/4] object-cover scale-110 transition-transform duration-1000 group-hover:scale-125"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {/* Subtle blur overlay on hover */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-700 pointer-events-none" />
                </div>

                {/* Micro design element: Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-8 shadow-2xl rounded-xl border border-secondary hidden sm:block"
                >
                  <div className="text-center">
                    <span className="block text-4xl font-serif text-accent mb-1 italic">10+</span>
                    <span className="block text-[10px] tracking-widest uppercase text-text font-bold whitespace-nowrap">Years of Legacy</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Founder Portfolio Area */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
            
            {/* Right: Founder Image with Depth Decorations */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2 relative"
            >
              {/* Decorative accent geometry */}
              <div className="absolute -inset-4 border border-accent/10 rounded-3xl -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border border-secondary rounded-3xl -z-20 -translate-x-2 -translate-y-2" />
              
              <div className="relative overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-secondary/20 aspect-[4/5]">
                <motion.img 
                  src={founderImg} 
                  alt="Mr. Gurumukh P Ahuja" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              
              {/* Signature floating badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 md:-left-8 bg-white py-6 px-10 shadow-2xl rounded-2xl border-l-4 border-accent"
              >
                 <span className="text-2xl font-serif italic text-accent select-none block leading-none">Founder</span>
                 <span className="text-[10px] tracking-[0.2em] uppercase text-text/40 font-bold mt-2 block">Since 2014</span>
              </motion.div>
            </motion.div>

            {/* Left: Visionary Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-accent" />
                <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-accent font-bold">Leadership</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-text mb-8 leading-tight">
                Driven by <span className="italic">Vision</span>.<br />
                Built on <span className="text-accent underline decoration-accent/20 underline-offset-8">Trust</span>.
              </h2>

              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-serif text-text mb-2">Mr. Gurumukh P. Ahuja</h3>
                <div className="flex items-center gap-3 text-text/40">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-bold">Founder, YUGAMC</span>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </div>
              </div>

               <div className="space-y-6 mb-12">
                <p className="text-lg md:text-xl text-text font-bold font-sans leading-relaxed border-l-2 border-secondary/30 pl-6">
                  Mr. Gurumukh P. Ahuja is the founder of YUGAMC, with over 13+ years of experience in the real estate industry. He has successfully delivered a range of residential and commercial projects, built on a strong foundation of trust, quality, and long-term value.
                </p>
                <p className="text-lg text-text font-bold font-sans leading-relaxed opacity-70 pl-6">
                  His vision is centered around creating future-ready spaces that not only meet present-day needs but also serve as smart investments for the years ahead. Under his leadership, YUGAMC continues to grow as a trusted name in real estate, driven by innovation, planning, and customer-focused development.
                </p>
              </div>

              {/* Founder's Motto Quote */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative p-8 md:p-12 bg-[#F9F9F9] rounded-[40px] border border-[#eeeeee] w-full"
              >
                 <Sparkles className="absolute top-6 left-6 text-accent/20" size={32} />
                 <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-text relative z-10 leading-relaxed">
                   “We don’t just build properties, we build trust and future lifestyles for generations to come.”
                 </p>
                 <div className="mt-8 pt-8 border-t border-secondary/20 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-text/40 font-bold">The Collective Philosophy</span>
                    <div className="flex gap-1.5">
                       {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-accent/20 rounded-full" />)}
                    </div>
                 </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Vision, Mission, Philosophy */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {[
              { 
                title: "Our Vision", 
                desc: "To create modern spaces that enhance lifestyles and deliver lasting value for generations.",
                icon: <Target size={28} />,
                accentWords: ["modern spaces", "lasting value"]
              },
              { 
                title: "Our Mission", 
                desc: "To build high-quality developments with transparency, innovation, and customer-first thinking.",
                icon: <Compass size={28} />,
                accentWords: ["high-quality", "transparency", "innovation"]
              },
              { 
                title: "Our Philosophy", 
                desc: "We don't just build projects. We build confidence, comfort, and future-ready spaces.",
                icon: <Lightbulb size={28} />,
                accentWords: ["confidence", "comfort", "future-ready"]
              }
            ].map((item, index) => <HoverCard key={index} item={item} index={index} />)}
          </motion.div>
        </div>
      </section>

      {/* Why We're Different - Clean Timeline Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Why We're Different</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line with Scroll Growth */}
            <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#eeeeee] -translate-x-1/2 z-0">
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: false }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 className="w-full bg-accent origin-top"
               />
            </div>

            <div className="space-y-24 md:space-y-32 relative z-10">
              {[
                { 
                  num: "01",
                  title: "Thoughtful Planning",
                  desc: "Every square foot is optimized for maximum utility and spatial elegance, ensuring zero wasted space."
                },
                { 
                  num: "02",
                  title: "Strong Construction Standards",
                  desc: "We use only top-tier materials and rigorous testing to ensure structural integrity and longevity."
                },
                { 
                  num: "03",
                  title: "Clear Communication",
                  desc: "Enjoy 100% transparency from booking to possession with our dedicated relationship managers."
                },
                { 
                  num: "04",
                  title: "Long-Term Value Creation",
                  desc: "Our strategic choice of locations guarantees high appreciation and meaningful lifestyle upgrades."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Number Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="w-full md:w-1/2 flex justify-start md:justify-center mb-4 md:mb-0 relative pl-12 md:pl-0"
                  >
                    <span className="text-4xl md:text-7xl font-serif font-bold text-text/20 group-hover:text-accent transition-colors duration-500 select-none">
                      {item.num}
                    </span>
                    {/* Interaction point on the line */}
                    <div className="absolute left-[-16px] md:left-auto md:right-[-4.5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-accent" />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-full md:w-1/2 pl-12 md:px-12 group cursor-default"
                  >
                    <h3 className="text-2xl font-serif text-text mb-4 relative inline-block transition-transform duration-500 group-hover:translate-x-2">
                       {item.title}
                       <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                    </h3>
                    <p className="text-text font-bold font-sans leading-relaxed text-sm md:text-base max-w-md">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
