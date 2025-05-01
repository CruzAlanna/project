import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeaturedProject from '../ui/FeaturedProject';
import ProjectCard from '../ui/ProjectCard';
import { capstone, miniCapstone, projects } from '../../data/portfolioData';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h3>
          
          <FeaturedProject 
            title={capstone.title}
            description={capstone.description}
            techStack={capstone.techStack}
            image={capstone.image}
            imageAlt={capstone.imageAlt}
            liveUrl={capstone.liveUrl}
            repoUrl={capstone.repoUrl}
          />
          
          <FeaturedProject 
            title={miniCapstone.title}
            description={miniCapstone.description}
            techStack={miniCapstone.techStack}
            image={miniCapstone.image}
            imageAlt={miniCapstone.imageAlt}
            liveUrl={miniCapstone.liveUrl}
            repoUrl={miniCapstone.repoUrl}
            reverse={true}
          />
        </div>
        
        {projects.length > 0 && (
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Other Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;