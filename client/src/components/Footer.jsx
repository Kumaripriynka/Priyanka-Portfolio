import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AnimatePresence } from "framer-motion";


const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [year] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`relative overflow-hidden py-16 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'} transition-colors duration-300`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute rounded-full opacity-5 blur-xl"
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#0891b2' : '#0d9488'}, ${i % 2 === 0 ? '#06b6d4' : '#14b8a6'})`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-lg">PK</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Priyanka Kumari
              </h3>
            </div>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mb-4`}>
              Full Stack Developer crafting responsive, accessible, and performant web applications.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://github.com/Kumaripriynka" 
                target="_blank"
                className={`p-3 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-300 hover:bg-cyan-900/50' : 'bg-slate-200 text-slate-700 hover:bg-cyan-100'} transition-all`}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/in/priyanka-singh-0580bb241/" 
                target="_blank"
                className={`p-3 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-300 hover:bg-cyan-900/50' : 'bg-slate-200 text-slate-700 hover:bg-cyan-100'} transition-all`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="mailto:kumaripriyankasbg30@gmail.com"
                className={`p-3 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-300 hover:bg-cyan-900/50' : 'bg-slate-200 text-slate-700 hover:bg-cyan-100'} transition-all`}
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`inline-block ${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5"
          >
            <h4 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className={`p-2 rounded-lg mr-3 ${theme === 'dark' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                  <FaEnvelope />
                </div>
                <div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Email</p>
                  <a 
                    href="mailto:kumaripriyankasbg30@gmail.com" 
                    className={`${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors break-all`}
                  >
                    kumaripriyankasbg30@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className={`p-2 rounded-lg mr-3 ${theme === 'dark' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                  <FaLinkedin />
                </div>
                <div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} font-medium`}>LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/priyanka-singh-0580bb241/" 
                    target="_blank"
                    className={`${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors`}
                  >
                   https://www.linkedin.com/in/priyanka-singh-0580bb241/
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className={`p-2 rounded-lg mr-3 ${theme === 'dark' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                  <FaGithub />
                </div>
                <div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} font-medium`}>GitHub</p>
                  <a 
                    href="https://github.com/Kumaripriynka" 
                    target="_blank"
                    className={`${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors`}
                  >
                    https://github.com/Kumaripriynka
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} mt-12 pt-8 flex flex-col md:flex-row justify-between items-center`}
        >
          <p className={`text-center md:text-left ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'} mb-4 md:mb-0`}>
            &copy; {year} Priyanka Kumari. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className={`mr-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>Made with</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-cyan-600"
            >
              <FaHeart />
            </motion.div>
            <p className={`ml-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>by Priyanka Singh</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg ${
              theme === 'dark' 
                ? 'bg-slate-800 text-cyan-400 hover:bg-cyan-900/50' 
                : 'bg-white text-cyan-600 hover:bg-cyan-100 border border-slate-200'
            }`}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;