import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
import { SiMedium, SiHashnode, SiDevdotto } from 'react-icons/si';

const Blog = () => {
  const blogs = [
    {
      title: 'State Management with Context API & Custom MultiSelect Hook in React',
      excerpt: 'Learn how to create custom hooks, use Context API in React, and implement state management anywhere in your application.',
      date: 'July 27, 2022',
      readTime: '8 min read',
      platform: 'Medium',
      icon: SiMedium,
      link: 'https://javascript.plainenglish.io/state-management-with-context-api-and-custom-multiselect-hook-in-reactjs-ed3109cce175',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Stages in DevOps and Tools Used in Different Stages',
      excerpt: 'Understanding various stages in DevOps lifecycle and the essential tools used at each stage of application development.',
      date: 'July 23, 2022',
      readTime: '6 min read',
      platform: 'DevOps',
      icon: SiMedium,
      link: 'https://blog.devops.dev/stages-in-devops-and-tools-used-in-different-stages-of-an-application-da7a476ea02',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Importance of Logging in Kubernetes & Intro to Grafana Loki',
      excerpt: 'Deep dive into logging in Kubernetes, introduction to Grafana Loki, and deployment with helm-charts.',
      date: 'July 2, 2022',
      readTime: '10 min read',
      platform: 'DevOps',
      icon: SiMedium,
      link: 'https://blog.devops.dev/importance-of-logging-in-kubernetes-and-intro-to-grafana-loki-f8dc6f736e6',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Introduction to Kubernetes Monitoring & Exploring Prometheus',
      excerpt: 'Comprehensive guide to monitoring in Grafana and an introduction to Prometheus for Kubernetes.',
      date: 'June 30, 2022',
      readTime: '12 min read',
      platform: 'DevOps',
      icon: SiMedium,
      link: 'https://blog.devops.dev/introduction-to-kubernetes-monitoring-and-exploring-prometheus-9bd0358ce504',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Setup Prometheus, Kube State Metrics and Integrate Grafana',
      excerpt: 'Step-by-step guide to set up ClusterRole, ServiceAccount, and ConfigMap with Prometheus configurations.',
      date: 'June 17, 2022',
      readTime: '15 min read',
      platform: 'DevOps',
      icon: SiMedium,
      link: 'https://blog.devops.dev/part-1-setup-prometheus-kube-state-metrics-and-integrate-grafana-with-kubernetes-6c21f60d167f',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Build Your First ReactJS Router',
      excerpt: 'Complete guide to get started with routing in ReactJS using React Router.',
      date: 'Nov 8, 2020',
      readTime: '7 min read',
      platform: 'Hashnode',
      icon: SiHashnode,
      link: 'https://yash.hashnode.dev/build-your-first-reactjs-router',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  const platforms = [
    { name: 'Medium', icon: SiMedium, link: 'https://medium.com/@yashguptaa', color: 'text-green-600' },
    { name: 'Hashnode', icon: SiHashnode, link: 'https://yash.hashnode.dev/', color: 'text-blue-600' },
    { name: 'Dev.to', icon: SiDevdotto, link: 'https://dev.to/yashgupta18', color: 'text-gray-900 dark:text-white' },
  ];

  return (
    <section id="blog" className="section-padding py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge about web development, DevOps, and modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Platform Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all"
            >
              <platform.icon size={24} className={platform.color} />
              <span className="font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Featured Image */}
              <div className={`h-48 bg-gradient-to-br ${blog.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  <blog.icon />
                </div>
                <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-sm font-medium text-white">
                  {blog.platform}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FiCalendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Read Article</span>
                  <FiExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@yashguptaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
