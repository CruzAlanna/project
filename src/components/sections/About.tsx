import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { funFacts } from '../../data/portfolioData';

const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -20 }
          }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8 } },
            hidden: { opacity: 0 }
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Hafa Adai! I am from the beautiful island of Guam. With a deep love for nature and the arts, I've also discovered a passion for coding through the Code School of Guam, which has opened doors to incredible opportunities, including an internship with them. Beyond tech, I enjoy spending quality time with my family.
          </p>
          
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
              hidden: { opacity: 0 }
            }}
          >
            Fun Facts About Me
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {funFacts.map((fact, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <p className="text-gray-700 dark:text-gray-300">{fact}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;