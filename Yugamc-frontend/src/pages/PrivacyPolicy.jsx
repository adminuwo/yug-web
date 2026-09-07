import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-text mb-8">Privacy Policy</h1>
          <div className="w-20 h-1 bg-accent mb-12" />

          <div className="prose prose-lg max-w-none text-text font-bold font-sans leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-black mb-4">1. Introduction</h2>
              <p>
                Welcome to YUG AMC Pvt Ltd ("YUG AMC", "we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and Contact Data (Email address, phone number)</li>
                <li>Inquiry Details related to our real estate projects</li>
                <li>Device and Usage data (IP address, browser type, operating system)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To send you administrative information and updates about our projects.</li>
                <li>To respond to your inquiries and offer support.</li>
                <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
                <li>To improve our website and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">5. Security of Your Information</h2>
              <p>
                We use appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">6. Updates to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-black mb-4">7. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at <a href="mailto:admin@uwo24.com" className="text-accent underline">admin@uwo24.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
