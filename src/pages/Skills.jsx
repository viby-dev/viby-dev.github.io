import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../mockData';

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="label mb-4">TECHNICAL EXPERTISE</p>
          <h2 className="title-big">SKILLS & TOOLS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="label mb-6">{category}</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="text-body py-2 border-b border-[#2a2a2a] hover:text-[#38FF62] hover:border-[#38FF62] transition-colors cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
