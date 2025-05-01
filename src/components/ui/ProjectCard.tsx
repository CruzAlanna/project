import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string | string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  imageAlt,
  liveUrl,
  repoUrl,
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {Array.isArray(repoUrl) ? (
            repoUrl.map((url, index) => (
              <motion.a 
                key={index}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Repo {index + 1}</span>
              </motion.a>
            ))
          ) : (
            <motion.a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;