import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <motion.div 
            className="fixed top-0 left-0 right-0 h-2 bg-indigo-600 z-50" 
            style={{ scaleX, transformOrigin: '0%' }}
          />
          
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;