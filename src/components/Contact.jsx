import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:18guptayash@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: '18guptayash@gmail.com',
      link: 'mailto:18guptayash@gmail.com',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91-9971977796',
      link: 'tel:+919971977796',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Gurgaon, India',
      link: '#',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yashgupta18', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/yg18/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FiTwitter, href: 'https://twitter.com/Yash_gupta18', label: 'Twitter', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="section-padding py-20 px-4" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(249, 250, 251, 0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                Let's talk about everything!
              </h3>
              <p className="mb-8" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                Don't like forms? Send me an email or connect with me on social media.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 rounded-xl p-5 transition-all"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                    border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-lg`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                      {item.title}
                    </h4>
                    <p style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full transition-colors"
                    style={{
                      background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                      border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      backdropFilter: 'blur(20px)',
                      color: darkMode ? '#d1d5db' : '#374151'
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{
              background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
              border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                    color: darkMode ? '#ffffff' : '#111827'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                    color: darkMode ? '#ffffff' : '#111827'
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                    color: darkMode ? '#ffffff' : '#111827'
                  }}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  style={{
                    background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                    color: darkMode ? '#ffffff' : '#111827'
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <span>Send Message</span>
                <FiSend size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
