import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiJest,
  SiCypress,
  SiGithubactions,
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      ],
    },
    {
      title: 'Testing',
      skills: [
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Cypress', icon: SiCypress, color: '#17202C' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding py-20 px-4" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(249, 250, 251, 0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
            A comprehensive toolkit of modern technologies I use to build exceptional applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="rounded-2xl p-8"
              style={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                backdropFilter: 'blur(20px)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: darkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
                    }}
                  >
                    <skill.icon
                      size={48}
                      style={{ color: skill.color }}
                      className="mb-3"
                    />
                    <span className="text-sm font-medium text-center" style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h4 className="text-xl font-semibold mb-6" style={{ color: darkMode ? '#ffffff' : '#111827' }}>
            Other Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'Sass', 'Webpack', 'Vite', 'REST APIs', 'Prometheus', 'ArgoCD', 'Storybook', 'Figma', 'VS Code', 'Postman'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-default"
                style={{
                  background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
                  border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  backdropFilter: 'blur(20px)',
                  color: darkMode ? '#d1d5db' : '#374151'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
