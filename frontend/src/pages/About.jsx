import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, about } from '../mockData';
import { mockSkills } from '../mockData';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <div className="grid-background" />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#38FF62]">
              Background
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">About Me</h1>
          </motion.div>

          {/* Profile & Bio */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Large Profile Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <motion.div 
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#38FF62] shadow-2xl shadow-[#38FF62]/30"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  I'm a robotics engineer focused on building intelligent autonomous systems that bridge the gap between AI research and real-world deployment. My work spans multi-robot coordination, vision-language models, and control systems for complex robotic platforms.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  Currently working with cutting-edge platforms including TurtleBot3, Unitree Go2 quadrupeds, and SO-101 robotic arms. My research has been presented at IROS and deployed in production environments at IITGN.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  I specialize in developing practical solutions for autonomous navigation, sensor fusion, and multi-agent systems. My recent work on CoMuRoS demonstrates how Large Language Models can revolutionize multi-robot coordination.
                </p>

                {/* Quick Facts Card */}
                <div className="bg-[#141414] border border-white/10 p-6 mt-8">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-mono text-white/50">Location</div>
                      <div className="text-base">{personalInfo.location}</div>
                    </div>
                    <div>
                      <div className="text-sm font-mono text-white/50">Institution</div>
                      <div className="text-base">IIT Gandhinagar</div>
                    </div>
                    <div>
                      <div className="text-sm font-mono text-white/50">Focus Areas</div>
                      <div className="text-base">AI/ML, Multi-Robot, Control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-[#141414] border border-white/10 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Master of Technology in Robotics</h3>
                  <span className="text-sm font-mono text-white/50">2022-2024</span>
                </div>
                <p className="text-white/70">Indian Institute of Technology Gandhinagar</p>
                <p className="text-sm text-white/50 mt-2">Thesis: Multi-Robot Coordination using Large Language Models</p>
              </div>
              <div className="bg-[#141414] border border-white/10 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Bachelor of Technology in Mechanical Engineering</h3>
                  <span className="text-sm font-mono text-white/50">2018-2022</span>
                </div>
                <p className="text-white/70">Technical University</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              <div className="bg-[#141414] border border-white/10 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Research Assistant</h3>
                    <p className="text-white/70">IIT Gandhinagar Robotics Lab</p>
                  </div>
                  <span className="text-sm font-mono text-white/50">2023-Present</span>
                </div>
                <ul className="text-sm text-white/70 mt-4 space-y-2 list-disc list-inside">
                  <li>Developed CoMuRoS multi-robot coordination system using LLMs</li>
                  <li>Implemented sensor fusion pipeline for autonomous navigation</li>
                  <li>Created GR00T finetuning pipeline for vision-language models</li>
                </ul>
              </div>
              <div className="bg-[#141414] border border-white/10 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Robotics Intern</h3>
                    <p className="text-white/70">Autonomous Systems Lab</p>
                  </div>
                  <span className="text-sm font-mono text-white/50">Summer 2022</span>
                </div>
                <ul className="text-sm text-white/70 mt-4 space-y-2 list-disc list-inside">
                  <li>Developed MPC controller for mobile robot navigation</li>
                  <li>Contributed to dataset collection pipeline for manipulation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Matrix */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(mockSkills).map(([category, skills]) => (
                <div key={category} className="bg-[#141414] border border-white/10 p-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white/5 text-sm text-white/70 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;