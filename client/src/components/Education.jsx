import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaMedal, FaBook } from 'react-icons/fa';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Jharkhand University of Technology",
    period: "2020 - 2024",
    grade: "CGPA: 8.1/10",
    icon: <FaGraduationCap className="text-cyan-500" />
  }
];

const certifications = [
  {
    title: "Summer Internship Program",
    issuer: "July 2024",
    description: "Demonstrated exceptional full stack development skills while collaborating with team members.",
    icon: <FaCertificate className="text-cyan-500" />,
    link: "https://verify.netcredential.com/q6a4fytfzi" 
  },
  {
    title: "LOR Certificate",
    issuer: "July 2024",
    description: "Worked as a FullStack Developer Intern, demonstrating responsibility, sincerity, and consistently delivered high-quality work.",
    icon: <FaMedal className="text-cyan-500" />,
    link: "https://example.com/certificate2" // Replace with your actual link
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "July 2023",
    description: "Certification course helped to understand and replicate all the concepts of JavaScript as well as of EcmaScript in project building.",
    icon: <FaBook className="text-cyan-500" />,
    link: "https://www.freecodecamp.org/certification/fccbcdc9833-922a-43a4-bc7d-5d4f1f0186d6/javascript-algorithms-and-data-structures" // Replace with your actual link
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
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
            Academic Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mt-6 mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"
          ></motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-600"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Education
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-20"></div>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="absolute top-6 -left-1 w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="absolute top-6 -left-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl text-white">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 mb-2">
                        {edu.period}
                      </p>
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  
                  {/* Coursework */}
                  <div className="mt-6">
                    <h5 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-200 dark:border-slate-700 pb-1">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "Database Systems", 
                        "Web Development", "Software Engineering", 
                        "Operating Systems", "Computer Networks"].map((course, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Certifications
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20"></div>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="absolute top-6 -left-1 w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="absolute top-6 -left-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl text-white">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                          {cert.title}
                        </h4>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors flex items-center gap-1"
                          >
                            View Cert
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        {cert.description}
                      </p>
                      
                      {/* Skills gained */}
                      <div className="mt-4">
                        <h5 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Skills Developed:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.title.includes("JavaScript") ? (
                            <>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                JavaScript
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Algorithms
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Data Structures
                              </span>
                            </>
                          ) : cert.title.includes("Internship") ? (
                            <>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Full Stack Development
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Team Collaboration
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Problem Solving
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Professionalism
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Responsibility
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm">
                                Quality Delivery
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/30"
            >
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                Additional Learning
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Continuously expanding my knowledge through online platforms and self-study.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full shadow-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full shadow-sm">
                 Jira
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full shadow-sm">
              Figma Design
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;