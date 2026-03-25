import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SiMedium, SiHashnode, SiDevdotto } from 'react-icons/si';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yashgupta18', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/yg18/', label: 'LinkedIn' },
    { icon: SiMedium, href: 'https://medium.com/@yashguptaa', label: 'Medium' },
    { icon: SiHashnode, href: 'https://yash.hashnode.dev/', label: 'Hashnode' },
    { icon: SiDevdotto, href: 'https://dev.to/yashgupta18', label: 'Dev.to' },
  ];

  return (
    <footer className="border-t" style={{
      background: darkMode ? '#111827' : '#ffffff',
      borderColor: darkMode ? '#1f2937' : '#e5e7eb'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              Yash Gupta
            </motion.h3>
            <p className="mb-4" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
              Frontend Developer passionate about creating exceptional digital experiences with modern web technologies.
            </p>
            <a
              href="mailto:18guptayash@gmail.com"
              className="flex items-center space-x-2 hover:underline"
              style={{ color: darkMode ? '#a78bfa' : '#6366f1' }}
            >
              <FiMail size={16} />
              <span>18guptayash@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
              Stay Connected
            </h4>
            <p className="mb-4" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
              Follow me on social media for updates on new projects and blog posts.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full transition-colors"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                    border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    backdropFilter: 'blur(20px)',
                    color: darkMode ? '#d1d5db' : '#374151'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: darkMode ? '#1f2937' : '#e5e7eb' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm flex items-center space-x-1" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
              <span>© {currentYear} Yash Gupta. Made with</span>
              <FiHeart className="text-red-500 animate-pulse" size={16} />
              <span>using React & Tailwind CSS</span>
            </p>
            <div className="flex items-center space-x-6 text-sm" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
              <a href="#home" className="transition-colors" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
