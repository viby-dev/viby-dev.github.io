import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, BookOpen, Mail, ExternalLink, GraduationCap, Briefcase, Award, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, about, allProjects, skills, publications, talks } from '../mockData';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, href: personalInfo.scholar, label: 'Google Scholar' }
  ];

  const categories = ['ALL', 'AI/ML', 'Multi-Robot', 'Control', 'Vision', 'Embedded'];

  const filteredProjects = activeFilter === 'ALL'
    ? allProjects
    : allProjects.filter(project => project.category.includes(activeFilter));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative">
      {/* Grid Background */}
      <div className="grid-background" />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#38FF62]/30 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: ['0%', '100%'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24">
        <motion.div
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.p className="label mb-8" variants={itemVariants}>
              ROBOTICS RESEARCHER
            </motion.p>
            <motion.h1 className="hero-title mb-12" variants={itemVariants}>
              {personalInfo.name.toUpperCase()}
            </motion.h1>
            <motion.p className="text-big max-w-3xl mx-auto mb-12" variants={itemVariants}>
              {personalInfo.tagline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <a href="#projects" className="btn-accent">
                VIEW PROJECTS
              </a>
              <a href="#contact" className="btn-primary">
                GET IN TOUCH
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section with Filters */}
      <section id="projects" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="label mb-4">ALL WORK</p>
            <h2 className="title-big">PROJECTS</h2>
            <p className="text-big max-w-3xl mt-8">
              A collection of robotics projects spanning AI/ML, multi-robot systems, computer vision, and control theory.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`label px-4 py-3 border transition-all ${
                  activeFilter === category
                    ? 'border-[#38FF62] bg-[#38FF62] text-[#0a0a0a]'
                    : 'border-[#2a2a2a] hover:border-[#38FF62]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/project/${project.slug}`} className="block">
                  <motion.div
                    className="card group cursor-pointer h-full flex flex-col relative overflow-hidden"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Featured Ribbon */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10 label-small px-3 py-2 bg-[#38FF62] text-[#0a0a0a] flex items-center gap-2">
                        <Star size={12} fill="#0a0a0a" />
                        FEATURED
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-[#1a1a1a] mb-6">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.category.map((cat) => (
                          <span key={cat} className="label-small px-3 py-1 border border-[#2a2a2a]">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-regular mb-4 group-hover:text-[#38FF62] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-body mb-6 flex-grow">{project.shortDesc}</p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-[#2a2a2a]">
                          <div>
                            <p className="label-small mb-1 text-[#38FF62]">PERFORMANCE</p>
                            <p className="text-body">{project.metrics.performance}</p>
                          </div>
                          <div>
                            <p className="label-small mb-1 text-[#38FF62]">ACCURACY</p>
                            <p className="text-body">{project.metrics.accuracy}</p>
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex gap-4 pt-4 border-t border-[#2a2a2a]">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} /> CODE
                          </a>
                        )}
                        {project.links?.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Play size={14} /> DEMO
                          </a>
                        )}
                        {project.links?.paper && (
                          <a
                            href={project.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} /> PAPER
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
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

      {/* About Section */}
      <section id="about" className="relative py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label mb-4">GET TO KNOW ME</p>
            <h2 className="title-big mb-8">ABOUT</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Profile & Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {/* Profile Image - Larger Size */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#38FF62] shadow-lg shadow-[#38FF62]/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-regular mb-6">Background</h3>
                    <div className="space-y-4">
                      {about.bio.split('\\n\\n').map((paragraph, index) => (
                        <p key={index} className="text-body">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-regular mb-6 flex items-center gap-3">
                  <GraduationCap size={24} className="text-[#38FF62]" />
                  Education
                </h3>
                <div className="space-y-6">
                  {about.education.map((edu, index) => (
                    <div key={index} className="card">
                      <h4 className="label mb-2">{edu.degree}</h4>
                      <p className="text-body mb-1">{edu.institution}</p>
                      <p className="label-small text-[#38FF62]">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-regular mb-6 flex items-center gap-3">
                  <Briefcase size={24} className="text-[#38FF62]" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {about.experience.map((exp, index) => (
                    <div key={index} className="card">
                      <h4 className="label mb-2">{exp.role}</h4>
                      <p className="text-body mb-1">{exp.organization}</p>
                      <p className="label-small text-[#38FF62]">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Contact */}
            <div className="space-y-8">
              <motion.div
                className="card sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="label mb-6">CONNECT</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-body hover:text-[#38FF62] transition-colors break-all"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    {personalInfo.email}
                  </a>
                  <div className="flex gap-3 pt-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
                          aria-label={social.label}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Publications & Talks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-regular mb-8 flex items-center gap-3">
                <BookOpen size={24} className="text-[#38FF62]" />
                Publications
              </h3>
              <div className="space-y-6">
                {publications.map((pub) => (
                  <div key={pub.id} className="card">
                    <h4 className="text-body font-semibold mb-3">{pub.title}</h4>
                    <p className="label-small mb-2">{pub.authors}</p>
                    <p className="text-body mb-4">
                      {pub.venue}, {pub.year}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost p-0 flex items-center gap-2"
                      >
                        <ExternalLink size={14} /> READ PAPER
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Talks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-regular mb-8 flex items-center gap-3">
                <Award size={24} className="text-[#38FF62]" />
                Talks & Demos
              </h3>
              <div className="space-y-6">
                {talks.map((talk) => (
                  <div key={talk.id} className="card">
                    <h4 className="text-body font-semibold mb-3">{talk.title}</h4>
                    <p className="text-body mb-2">{talk.event}</p>
                    <p className="label-small text-[#38FF62]">{talk.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
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
                  DOWNLOAD RESUME
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
