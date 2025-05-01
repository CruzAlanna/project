import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Alanna Cruz. All rights reserved.
          </motion.p>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/CruzAlanna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/alanna-cruz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="mailto:alannacruz@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;