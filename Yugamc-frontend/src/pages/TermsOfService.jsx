import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-text mb-8">Terms of Service</h1>
          <div className="w-20 h-1 bg-accent mb-12" />

          <div className="prose prose-lg max-w-none text-text font-bold font-sans leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-black mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website of YUG AMC PVT LTD ("YUG AMC"), you agree to the following Terms of Service. If you do not agree, please do not use this website. We reserve the right to modify these terms at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">3. Property Information and Disclaimers</h2>
              <p>
                The information provided on our website regarding our real estate projects, including layouts, floor plans, dimensions, and amenities, is for general information purposes only. While we strive for accuracy, the final availability, pricing, and project specifics are subject to change and final agreements. Figures and visuals represent artistic impressions and may not be exactly mirrored in final constructs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed by and defined following the laws of India. YUG AMC and yourself irrevocably consent that the courts of Jabalpur, India, shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">7. Contact Us</h2>
              <p>
                To resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at <a href="mailto:admin@uwo24.com" className="text-accent underline">admin@uwo24.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
