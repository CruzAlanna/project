import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      closeMenu();
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY - 80
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        delay: 0.2
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          AC
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <motion.button
            className="ml-4 p-2 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 py-2 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;