import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../mockData';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label mb-4">GET IN TOUCH</p>
          <h2 className="title-big">CONTACT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-regular mb-8">Let's Build Something Together</h3>
              <p className="text-body mb-8">
                I'm always open to discussing new projects, research collaborations, or opportunities in robotics and AI.
              </p>
            </div>

            <div className="card">
              <h4 className="label mb-6">CONTACT INFORMATION</h4>
              <div className="space-y-4">
                <div>
                  <p className="label-small mb-2">EMAIL</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-body hover:text-[#38FF62] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="label-small mb-2">LOCATION</p>
                  <p className="text-body">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="label-small mb-2">RESPONSE TIME</p>
                  <p className="text-body">Typically within 24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card text-center py-16 flex flex-col items-center justify-center"
          >
            <Mail size={48} className="text-[#38FF62] mb-6" />
            <h3 className="text-regular mb-6">Ready to Collaborate?</h3>
            <p className="text-body max-w-md mx-auto mb-8">
              Whether it's a new project, research opportunity, or just a conversation about robotics and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${personalInfo.email}`} className="btn-accent">
                SEND EMAIL
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                DOWNLOAD CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
