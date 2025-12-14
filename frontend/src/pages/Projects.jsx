import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { allProjects } from '../mockData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'AI/ML', 'Multi-Robot', 'Control', 'Vision', 'Embedded'];

  const filteredProjects = activeFilter === 'ALL'
    ? allProjects
    : allProjects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="relative pt-32 pb-24">
      <div className="grid-background" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-4">ALL WORK</p>
          <h1 className="title-big mb-8">PROJECTS</h1>
          <p className="text-big max-w-3xl">
            A collection of robotics projects spanning AI/ML, multi-robot systems, computer vision, and control theory.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
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
        </motion.div>

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
    </div>
  );
};

export default Projects;
