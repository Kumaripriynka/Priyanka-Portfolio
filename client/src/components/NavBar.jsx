import { motion, AnimatePresence } from 'framer-motion';
import { useState, useContext, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Skills' },
    { name: 'Projects' },
    { name: 'Contact' }
  ];

  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md border-b border-slate-200 dark:border-slate-800 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Add the Google Font link */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:wght@700&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center mr-3 shadow-lg">
              <span className="text-white font-bold text-lg">PS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.5px' }}>
              Priyanka Singh
            </span>
          </motion.div>
          
          {/* Rest of the navbar code remains the same */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a 
                key={item.name}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300 ${
                  activeLink === item.name 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => handleNavClick(item.name)}
              >
                {item.name}
                {activeLink === item.name && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            
            <div className="flex items-center ml-4 border-l border-slate-200 dark:border-slate-800 pl-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <FaMoon className="text-slate-700" />
                ) : (
                  <FaSun className="text-yellow-400" />
                )}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <FaMoon className="text-slate-700" />
              ) : (
                <FaSun className="text-yellow-400" />
              )}
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-slate-700 dark:text-slate-300" />
              ) : (
                <FaBars className="text-slate-700 dark:text-slate-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block px-4 py-3 text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 rounded-lg mx-2 ${
                    activeLink === item.name 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => handleNavClick(item.name)}
                >
                  {item.name}
                  {activeLink === item.name && (
                    <motion.span 
                      className="ml-2 inline-block w-2 h-2 bg-cyan-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="#contact"
                className="block mt-4 mx-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium rounded-lg text-center shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;