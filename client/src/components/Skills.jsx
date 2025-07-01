import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaNodeJs, FaPhp, FaServer, FaDatabase, FaPalette, FaCode, FaRobot, FaToolbox, FaBrain ,FaFigma} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiXampp } from "react-icons/si";



const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
        { name: "Redux Toolkit", icon: <span className="text-purple-500 font-bold">RTK</span> },
        { name: "Tailwind CSS", icon: <span className="text-teal-500 font-bold">TW</span> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-violet-700" /> },
        { name: "Material UI", icon: <FaPalette className="text-blue-600" /> },
          { name: "DSA (C++)", icon: <span className="text-blue-700 font-bold">C++</span> }
      ]
    },
    {
      title: "Back-End",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <span className="text-gray-800 dark:text-gray-200 font-bold">EX</span> },
        { name: "RESTful API", icon: <FaServer className="text-indigo-500" /> },
        { name: "PHP", icon: <FaPhp className="text-purple-700" /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-500" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "XAMPP SQL", icon: <SiXampp className="text-orange-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
      ]
    },
    {
      title: "AI Tools",
      icon: <FaBrain className="text-purple-500" />,
      skills: [
        { name: "GPT3.5", icon: <FaRobot className="text-green-600" /> },
        { name: "Bard AI", icon: <span className="text-blue-500 font-bold">Bard</span> },
      
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaToolbox className="text-red-500" />,
     skills: [
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
  { name: "Postman", icon: <span className="text-orange-500 font-bold">Post</span> },
  { name: "Canva", icon: <span className="text-blue-400 font-bold">Canva</span> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> }
]

    }
  ];

  return (
   <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
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
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center"
          >
            Technical Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mt-6 mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              My Skills & Technologies
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(6, 182, 212, 0.3)" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-4">
                <div className="flex items-center">
                  <div className="text-xl mr-3 text-white">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
