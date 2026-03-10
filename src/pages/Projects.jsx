import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { allProjects } from '../mockData';

const categories = ['ALL', 'AI/ML', 'Multi-Robot', 'Control', 'Vision', 'Embedded'];

// Slideshow component for each project card
const MediaSlideshow = ({ project }) => {
  const [current, setCurrent] = useState(0);

  // Collect all media: project.media array + fallback to project.image
  const slides = project.media
    ? project.media.map(m => ({
        type: m.type,
        url: m.type === 'youtube'
          ? `https://img.youtube.com/vi/${getYouTubeId(m.url)}/maxresdefault.jpg`
          : m.url,
        isVideo: m.type === 'youtube'
      }))
    : [{ type: 'image', url: project.image, isVideo: false }];

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = (e) => {
    e.preventDefault();
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const next = (e) => {
    e.preventDefault();
    setCurrent(prev => (prev + 1) % slides.length);
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-[#1a1a1a] mb-6">
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide.url}
          alt={`Slide ${index + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      {/* Video indicator */}
      {slides[current]?.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Play className="text-[#38FF62]" size={40} fill="#38FF62" />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />

      {/* Prev/Next buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-black/60 hover:bg-[#38FF62]/80 flex items-center justify-center transition-all"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-black/60 hover:bg-[#38FF62]/80 flex items-center justify-center transition-all"
          >
            <ChevronRight size={16} className="text-white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? 'bg-[#38FF62] w-3' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Helper to extract YouTube video ID
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? allProjects.filter(project => project.featured)
    : allProjects.filter(project => project.category.includes(activeFilter));

  return (
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
                  ? 'border-[#38FF62] bg-[#38FF62]/10 text-[#38FF62]'
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
                    <div className="absolute top-4 right-4 z-10 p-1.5 bg-transparent border border-[#38FF62] flex items-center">
                      <Star size={14} fill="#38FF62" stroke="#38FF62" />
                    </div>
                  )}

                  {/* Slideshow */}
                  <MediaSlideshow project={project} />

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
                      {Array.isArray(project.links) && project.links.map((link, i) => {
                        if (link.type === 'github') return (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}>
                            <Github size={14} /> CODE
                          </a>
                        );
                        if (link.type === 'demo') return (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}>
                            <Play size={14} /> DEMO
                          </a>
                        );
                        if (link.type === 'paper') return (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="btn-ghost p-0 flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={14} /> PAPER
                          </a>
                        );
                        return null;
                      })}
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
  );
};

export default ProjectsSection;