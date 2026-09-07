import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const reviews = [
    {
      text: "YugAMC delivered exactly what they promised — quality, design, and timely possession. A premium experience from start to finish.",
      author: "Happy Homebuyer",
      role: "Yash Heights Resident"
    },
    {
      text: "Investing with YugAMC was one of the best decisions for our business. The transparency and strategic focus are unmatched.",
      author: "Commercial Investor",
      role: "Investor, City Plaza"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-6">
              Spaces That Reflect<br/>
              <span className="italic font-light">Your Lifestyle</span>
            </h2>
            <p className="text-text font-bold text-lg font-sans max-w-md leading-relaxed">
              Whether it's a home filled with comfort or a commercial space built for growth, YugAMC creates environments that match your aspirations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-primary p-8 md:p-10 border-l-4 border-accent relative"
              >
                <div className="text-accent absolute top-6 right-8 opacity-20 transform scale-150">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                   </svg>
                </div>
                <p className="text-xl font-serif text-text font-bold italic mb-6 relative z-10 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-sans font-semibold text-text">{review.author}</h4>
                  <span className="text-sm font-sans text-text font-bold">{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
