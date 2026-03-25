import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi';

const About = ({ darkMode }) => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Blog Posts', value: '10+' },
  ];

  const expertise = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      desc: 'Expert in React.js, Next.js, TypeScript, and modern CSS frameworks',
    },
    {
      icon: FiServer,
      title: 'Backend & APIs',
      desc: 'Proficient in Node.js, Express, and RESTful API development',
    },
    {
      icon: FiGitBranch,
      title: 'DevOps & CI/CD',
      desc: 'Experience with Kubernetes, Docker, ArgoCD, and GitHub Actions',
    },
    {
      icon: FiDatabase,
      title: 'Testing & Quality',
      desc: 'Skilled in Jest, React Testing Library, Cypress, and Storybook',
    },
  ];

  return (
    <section id="about" className="section-padding py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
            Building exceptional digital experiences with <span className="font-semibold" style={{ color: darkMode ? '#a78bfa' : '#6366f1' }}>React.js, Next.js, TypeScript, Node.js, and MongoDB</span>.
            Passionate about DevOps, testing, and creating user-centric applications that solve real problems.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
            Always experimenting with new ideas, building browser and VSCode extensions, and sharing what I learn
            through technical writing on Medium and Hashnode.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl p-6 text-center"
              style={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="inline-block p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mb-4">
                <item.icon className="text-white" size={28} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                {item.title}
              </h4>
              <p className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block rounded-2xl p-8" style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            backdropFilter: 'blur(20px)'
          }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Email', value: '18guptayash@gmail.com' },
                { label: 'Phone', value: '+91-9971977796' },
                { label: 'Location', value: 'Gurgaon, India' },
                { label: 'Availability', value: 'Open to opportunities' },
              ].map((info, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm mb-1" style={{ color: darkMode ? '#6b7280' : '#6b7280' }}>{info.label}</span>
                  <span className="font-medium" style={{ color: darkMode ? '#ffffff' : '#111827' }}>{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
