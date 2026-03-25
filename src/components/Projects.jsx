import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPackage } from 'react-icons/fi';
import { SiNpm } from 'react-icons/si';
import { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Cachinator',
      description: 'A lightweight, flexible caching library for Node.js with support for multiple storage backends and TTL management',
      image: '/api/placeholder/400/300',
      tags: ['NPM Package', 'Node.js', 'Caching'],
      category: 'package',
      github: 'https://github.com/yashgupta18/cachinator',
      demo: 'https://www.npmjs.com/package/cachinator',
      icon: SiNpm,
    },
    {
      title: 'i18n-translate-ln',
      description: 'CLI tool for managing translations and internationalization in your projects with automatic translation support',
      image: '/api/placeholder/400/300',
      tags: ['NPM Package', 'CLI', 'i18n'],
      category: 'package',
      github: 'https://github.com/yashgupta18/i18n-cli',
      demo: 'https://www.npmjs.com/package/i18n-translate-ln',
      icon: SiNpm,
    },
    {
      title: 'AI Prompts',
      description: 'A Next.js application for discovering and sharing AI prompts with MongoDB backend',
      image: '/api/placeholder/400/300',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/yashgupta18/nextjs_prompt',
      demo: 'https://nextjs-prompt.vercel.app/',
    },
    {
      title: 'MEME Generator',
      description: 'React-based meme generator with real-time editing and MongoDB storage',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/yashgupta18/memeFrontend',
      demo: 'https://meme-webapp.netlify.app',
    },
    {
      title: 'Facebook Clone',
      description: 'Full-featured social media clone with real-time updates using Firebase',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Material UI', 'Firebase'],
      category: 'frontend',
      github: 'https://github.com/yashgupta18/facebook',
      demo: 'https://facebook-clone--71829.web.app/',
    },
    {
      title: 'Real-time Chat App',
      description: 'Socket.IO powered chat application with real-time messaging',
      image: '/api/placeholder/400/300',
      tags: ['Socket.IO', 'Node.js', 'Express'],
      category: 'fullstack',
      github: 'https://github.com/yashgupta18/chat-app',
      demo: 'https://letsconnect-chat-app.herokuapp.com/',
    },
    {
      title: 'Weather App',
      description: 'Modern weather application with location-based forecasts',
      image: '/api/placeholder/400/300',
      tags: ['Node.js', 'API', 'Express'],
      category: 'backend',
      github: 'https://github.com/yashgupta18/node3-weather-website',
      demo: 'https://yash-weather-website.herokuapp.com/',
    },
    {
      title: 'Pixel Art Creator',
      description: 'Interactive pixel art drawing tool with save and export features',
      image: '/api/placeholder/400/300',
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/yashgupta18/groot_speaks',
      demo: 'https://modern-pixel-art.netlify.app/',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'package', label: 'NPM Packages' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
            A collection of projects showcasing my skills in modern web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : ''
              }`}
              style={filter !== cat.id ? {
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)',
                color: darkMode ? '#d1d5db' : '#374151'
              } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden group"
              style={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-48 ${project.icon ? 'bg-gradient-to-br from-red-500 to-orange-500' : 'bg-gradient-to-br from-indigo-500 to-purple-600'} overflow-hidden`}>
                {project.icon ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="text-white" size={80} />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    {project.icon ? <FiPackage size={24} /> : <FiExternalLink size={24} />}
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: darkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)',
                        color: darkMode ? '#a78bfa' : '#6366f1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yashgupta18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200"
          >
            <FiGithub size={20} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
