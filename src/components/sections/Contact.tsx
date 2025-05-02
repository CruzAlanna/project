import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, FileText } from 'lucide-react';
import { resumeURL } from '../../data/portfolioData';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1, rotate: [-1, 1, -1, 1, 0] } : { opacity: 0 }}
          transition={{ 
            opacity: { duration: 0.6 },
            rotate: { duration: 0.5, delay: 0.3 }
          }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.a 
                href="mailto:lannikcru@gmail.com" 
                className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>lannikcru@gmail.com</span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/alanna-cruz-28678934a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <motion.a 
              href={resumeURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;