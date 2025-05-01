import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full font-medium text-gray-800 dark:text-gray-200 shadow-sm group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-600 transition-all duration-300">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;