import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setStatus('Message sent successfully! (Mock)');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88]">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Contact</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Interested in collaboration, job opportunities, or just want to discuss robotics? Reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-mono uppercase tracking-wide text-white/70 mb-2">
                      Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#141414] border border-white/20 px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono uppercase tracking-wide text-white/70 mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#141414] border border-white/20 px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-mono uppercase tracking-wide text-white/70 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#141414] border border-white/20 px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-colors"
                    placeholder="Job Opportunity / Collaboration / Question"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono uppercase tracking-wide text-white/70 mb-2">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-[#141414] border border-white/20 px-4 py-3 focus:border-[#00FF88] focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#00FF88] text-black font-mono text-sm uppercase tracking-wide hover:bg-[#00DD77] transition-colors"
                >
                  Send Message
                </button>
                {status && (
                  <p className="text-[#00FF88] text-sm font-mono mt-4">{status}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#141414] border border-white/10 p-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:engineer@robotics.edu"
                    className="flex items-start text-white/70 hover:text-[#00FF88] transition-colors"
                  >
                    <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span className="break-all">engineer@robotics.edu</span>
                  </a>
                  <div className="flex items-start text-white/70">
                    <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>IIT Gandhinagar<br/>Gandhinagar, Gujarat<br/>India</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] border border-white/10 p-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-[#00FF88] transition-colors"
                  >
                    <Github size={20} className="mr-3" />
                    <span>github.com/username</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-[#00FF88] transition-colors"
                  >
                    <Linkedin size={20} className="mr-3" />
                    <span>linkedin.com/in/username</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#141414] border border-white/10 p-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                  Response Time
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries, please mention it in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;