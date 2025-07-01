import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCode, FaServer, FaDatabase, FaCloud, FaReact, FaNodeJs } from 'react-icons/fa';

// Component for letter animation
const AnimatedLetters = ({ text, delay = 0 }) => {
  const letters = text.split('');
  
  return (
    <motion.span 
      className="inline-block"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } }
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              rotate: -10
            },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: delay + i * 0.05
              }
            }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  const positions = ["Software Developer", "Full Stack Developer", "Freelancer"];
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentText = positions[currentPositionIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
          setSpeed(150);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPositionIndex, positions, speed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 mt-5 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
                </span>
                Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              <span className="block text-gray-100 mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                <AnimatedLetters text="Priyanka Singh" delay={0.4} />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 min-h-[60px]">
                {displayedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1 inline-block text-cyan-500"
                >
                  |
                </motion.span>
              </div>
            
            </motion.div>

        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="text-lg text-gray-300 mb-8 max-w-2xl"
>
  I'm a software developer who loves building clean and user-friendly web apps.  
  <br />
  Open to full-time and freelance opportunities!
</motion.p>



            {/* Tech Stack Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-cyan-400 text-sm font-medium">
                <FaReact className="text-cyan-400" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-cyan-400 text-sm font-medium">
                <FaNodeJs className="text-cyan-400" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-cyan-400 text-sm font-medium">
                <FaDatabase className="text-cyan-400" />
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-cyan-400 text-sm font-medium">
                <FaCode className="text-cyan-400" />
                <span>JavaScript</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-lg shadow-lg overflow-hidden group"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="../src/priyanka_singh_resume.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
              >
                <FaFileDownload />
                Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 mt-6"
            >
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://github.com/Kumaripriynka" 
                target="_blank"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/in/priyanka-singh-0580bb241/" 
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="mailto:kumaripriyankasbg30@gmail.com"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Clean PNG Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Clean PNG Image */}
              <img 
                src="../src/priyanka_pic.png" 
                alt="Priyanka Singh - Full Stack Developer" 
                className="w-80 h-96 md:w-96 md:h-[28rem] object-cover object-center rounded-2xl shadow-2xl"
              />
              
              {/* Subtle shadow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl blur-xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated gradient circles */}
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
            className="absolute rounded-full opacity-10 blur-xl"
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#0891b2' : '#0d9488'}, ${i % 2 === 0 ? '#06b6d4' : '#14b8a6'})`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Simplified grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;