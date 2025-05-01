import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface FeaturedProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string | string[];
  reverse?: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  techStack,
  image,
  imageAlt,
  liveUrl,
  repoUrl,
  reverse = false,
}) => {
  return (
    <motion.div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 mb-20`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full md:w-1/2">
        <motion.div 
          className="rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {Array.isArray(repoUrl) ? (
            repoUrl.map((url, index) => (
              <motion.a 
                key={index}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>Repo {index + 1}</span>
              </motion.a>
            ))
          ) : (
            <motion.a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;