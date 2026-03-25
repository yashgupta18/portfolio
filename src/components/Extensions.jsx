import { motion } from 'framer-motion';
import { FiCode, FiDownload, FiStar, FiUsers, FiGithub } from 'react-icons/fi';
import { SiGooglechrome } from 'react-icons/si';

const Extensions = ({ darkMode }) => {
  const browserExtensions = [
    {
      name: 'Shopping List Extension',
      description: 'A simple and intuitive browser extension to manage your shopping lists. Add, edit, and organize items right from your browser.',
      icon: SiGooglechrome,
      downloads: 'Open Source',
      rating: 4.5,
      users: 'GitHub',
      tags: ['Productivity', 'Shopping', 'Utility'],
      link: 'https://github.com/yashgupta18/shopping-list-browser-extension',
      github: 'https://github.com/yashgupta18/shopping-list-browser-extension',
      color: 'from-green-500 to-emerald-500',
      downloadOnly: true,
    },
  ];

  const vscodeExtensions = [
    {
      name: 'File Size Viewer',
      description: 'Display file sizes directly in VS Code explorer. See file and folder sizes at a glance to quickly identify large files and optimize your project.',
      icon: FiCode,
      downloads: '100+',
      rating: 5,
      users: '100+',
      tags: ['Productivity', 'File Management', 'Developer Tools'],
      link: 'https://marketplace.visualstudio.com/items?itemName=yash-c71e123f-dc39-4c65-82bf-a7e6c9278f10.file-size-viewer',
      github: 'https://github.com/yashgupta18/file-size-viewer',
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  const ExtensionCard = ({ extension, type }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
      style={{
        background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
        border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        backdropFilter: 'blur(20px)'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-4 bg-gradient-to-r ${extension.color} rounded-xl`}>
          <extension.icon className="text-white" size={32} />
        </div>
        <div className="flex items-center space-x-1 px-3 py-1 rounded-full" style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)'
        }}>
          <FiStar className="text-yellow-500" size={16} />
          <span className="text-sm font-semibold">{extension.rating}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
        {extension.name}
      </h3>
      <p className="mb-4 line-clamp-2" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
        {extension.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {extension.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{
              background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)',
              color: darkMode ? '#d1d5db' : '#374151'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4 text-sm" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
        <div className="flex items-center space-x-1">
          <FiDownload size={16} />
          <span>{extension.downloads}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiUsers size={16} />
          <span>{extension.users} users</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex gap-2">
        <a
          href={extension.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {extension.downloadOnly ? 'Download from GitHub' : type === 'browser' ? 'Add to Chrome' : 'Install Extension'}
        </a>
        {extension.github && (
          <a
            href={extension.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center"
            style={{
              background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              color: darkMode ? '#d1d5db' : '#374151'
            }}
            title="View on GitHub"
          >
            <FiGithub size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="extensions" className="section-padding py-20 px-4" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(249, 250, 251, 0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Browser & VSCode Extensions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
            Tools I've built to enhance productivity and workflow
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Browser Extensions */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <SiGooglechrome size={32} className="text-blue-500" />
            <h3 className="text-2xl font-bold" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
              Browser Extensions
            </h3>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {browserExtensions.map((extension, index) => (
              <ExtensionCard key={index} extension={extension} type="browser" />
            ))}
          </div>
        </div>

        {/* VSCode Extensions */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <FiCode size={32} className="text-blue-600" />
            <h3 className="text-2xl font-bold" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
              VSCode Extensions
            </h3>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {vscodeExtensions.map((extension, index) => (
              <ExtensionCard key={index} extension={extension} type="vscode" />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl p-8 max-w-3xl mx-auto" style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
              Want to Collaborate on an Extension?
            </h3>
            <p className="mb-6" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
              I'm always working on new browser and VSCode extensions to solve real problems. Got a suggestion or want to collaborate?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Let's Discuss
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extensions;
