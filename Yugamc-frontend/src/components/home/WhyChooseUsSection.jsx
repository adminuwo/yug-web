import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const points = [
    { title: 'Strategic Locations', desc: 'We develop where connectivity, growth, and future appreciation matter.' },
    { title: 'Proven Experience', desc: 'With 13+ years in real estate, our work is backed by execution, not just promises.' },
    { title: 'Residential + Commercial Expertise', desc: 'From premium homes to business spaces, we understand both lifestyle and investment.' },
    { title: 'Quality That Builds Trust', desc: 'Every project is designed with attention to structure, planning, and long-term usability.' },
    { title: 'Timely Delivery Mindset', desc: 'We respect your time, your money, and your future plans.' },
    { title: 'Value-Driven Development', desc: "We don't just create spaces. We create assets." },
  ];

  return (
    <section className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-accent tracking-[0.2em] text-sm uppercase font-semibold mb-2 block"
          >
            Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-text"
          >
            Why Buyers and <span className="italic font-light text-accent">Investors</span> Choose <span className="italic font-light">YUGAMC</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-secondary"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full mb-6 text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-text mb-3">{point.title}</h3>
              <p className="text-text font-bold font-sans text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
