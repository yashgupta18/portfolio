import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SiMedium, SiHashnode, SiDevdotto } from 'react-icons/si';

const Footer = () => {
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
    { icon: FiTwitter, href: 'https://twitter.com/Yash_gupta18', label: 'Twitter' },
    { icon: SiMedium, href: 'https://medium.com/@yashguptaa', label: 'Medium' },
    { icon: SiHashnode, href: 'https://yash.hashnode.dev/', label: 'Hashnode' },
    { icon: SiDevdotto, href: 'https://dev.to/yashgupta18', label: 'Dev.to' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
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
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer passionate about creating exceptional digital experiences with modern web technologies.
            </p>
            <a
              href="mailto:18guptayash@gmail.com"
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <FiMail size={16} />
              <span>18guptayash@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                  className="p-3 glass-effect rounded-full hover:bg-indigo-500/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-1">
              <span>© {currentYear} Yash Gupta. Made with</span>
              <FiHeart className="text-red-500 animate-pulse" size={16} />
              <span>using React & Tailwind CSS</span>
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
