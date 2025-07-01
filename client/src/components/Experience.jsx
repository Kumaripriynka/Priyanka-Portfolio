import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaChevronRight, FaRocket } from 'react-icons/fa';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "SNMR GROUP",
    period: "August 2024 - Present",
    description: [
      "Designed and developed responsive websites for clients like Aeropost India, Uniglobe Logistics, Oneglobe          Logistics, IHKLC, AHTTC, RGMTTC, and DCS.",
      "Built and manage SNMR-KART using Shopify for scalable and efficient performance.",
      "Developed a custom Employee management software for SNMR Group with the MERN Stack."
    ],
    achievements: [
      "Increased client website performance by 40% through optimized code",
      "Reduced development time by 30% with reusable component libraries"
    ]
  },
  {
    role: "Project Lead",
    company: "SNMR GROUP",
    description: [
      "Led the team of 5 members working in development of Projects."
    ],
    achievements: [
      "Successfully delivered project 2 weeks ahead of schedule",
      "Mentored 5 junior developers throughout the project lifecycle"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
      
      <div className="max-w-7xl mx-auto px-0 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            Professional Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-5xl font-extrabold mt-6 mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"
          ></motion.div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-5 h-5 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 shadow-lg transform md:-translate-x-1/2 z-10"></div>
                
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-bl-full opacity-10"></div>
                    
                    <div className="p-6">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-white mr-3">
                            <FaBriefcase />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                            <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium">
                              {/* <FaCalendarAlt className="mr-2 text-sm" />
                              <span>{exp.period}</span> */}
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-13 md:ml-0">
                          <div className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center">
                            <FaRocket className="mr-2" />
                            {exp.company}
                          </div>
                          
                          <div className="space-y-3">
                            <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1">Key Responsibilities:</h4>
                            <ul className="space-y-2">
                              {exp.description.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start text-slate-600 dark:text-slate-300"
                                >
                                  <span className="mt-1.5 mr-2">
                                    <FaChevronRight className="text-cyan-500 text-xs" />
                                  </span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                            
                            <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1 mt-4">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (i + exp.description.length) * 0.1 }}
                                  className="flex items-start text-slate-600 dark:text-slate-300"
                                >
                                  <span className="mt-1.5 mr-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  </span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex flex-wrap gap-2">
                        {exp.role.includes("Full Stack") ? (
                          <>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              React.js
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              Node.js
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              MongoDB
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              Shopify
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              Project Management
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              Team Leadership
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                              Agile Methodology
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Want to see more details about my professional experience? Download my full resume for a comprehensive overview.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="../src/priyanka_singh_resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;