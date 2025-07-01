import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaCode, 
  FaLightbulb, 
  FaRocket,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLayerGroup
} from "react-icons/fa";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Jharkhand University of Technology",
      year: "2020 - 2024",
      grade: "CGPA: 8.1/10",
      icon: <FaGraduationCap className="text-xl" />
    }
  ];

  const certifications = [
    {
      title: "Summer Internship Program",
      issuer: "July 2024",
      description: "Demonstrated exceptional full stack development skills",
      icon: <FaBriefcase className="text-xl" />
    },
    {
      title: "LOR Certificate",
      issuer: "July 2024",
      description: "Recognized for high-quality work as a FullStack Developer Intern",
      icon: <FaAward className="text-xl" />
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "July 2023",
      description: "Mastered JavaScript and EcmaScript concepts",
      icon: <FaCode className="text-xl" />
    }
  ];

  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Fast Delivery",
      description: "Meeting deadlines without compromising quality"
    }
  ];

  const skills = [
    { name: "React.js", icon: <FaCode className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaServer className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaCode className="text-cyan-400" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-cyan-400" /> },
    { name: "Redux Toolkit", icon: <FaLayerGroup className="text-cyan-400" /> },
    { name: "Express.js", icon: <FaServer className="text-cyan-400" /> },
    { name: "MySQL", icon: <FaDatabase className="text-cyan-400" /> },
    { name: "PHP", icon: <FaCode className="text-cyan-400" /> }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
            className="absolute rounded-full opacity-5 blur-xl"
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#0891b2' : '#0d9488'}, ${i % 2 === 0 ? '#06b6d4' : '#14b8a6'})`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            Get to know me
          </motion.span>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} transition={{ duration: 0.8 }} className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                Hi, I'm Priyanka — a software developer who enjoys building websites and web apps that not only look good but work well too. I mostly work with tools like React.js, Node.js, MySQL, and PHP. I care about writing clean, understandable code and delivering real solutions to real problems.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I've worked on various types of projects — both as a team member and independently. I’m always up for learning something new and pushing myself to grow. Currently, I’m open to full-time roles and freelance gigs. Let’s connect if you think we could build something great together!
              </p>
            </motion.div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">What I Bring</h3>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-bl-full opacity-10"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
