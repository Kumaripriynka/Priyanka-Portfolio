import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const projects = [{
  title: "YouTube Clone",
  description: "Developed a YouTube clone using React and Redux Toolkit, leveraging Redux Toolkit for efficient state management. Designed a responsive UI with Tailwind CSS and Material UI.",
  technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Material UI", "Node.js"],
  link: "https://myyoutubeclonerepo.netlify.app/",
  github: "https://github.com/Kumaripriynka/youtube-clone",
  image: "/projects-images/yt-clone.png"
},
{
  title: "Weather App",
  description: "Developed a weather application using Shadcn ui, Tanstack query, integrating the OpenWeather API to fetch real-time weather data.",
  technologies: ["React.js", "Tailwind CSS", "OpenWeather API"],
  link: "https://fabulous-douhua-f97420.netlify.app/",
  github: "https://github.com/Kumaripriynka/Klimate-app",
  image: "./projects-images/weather-app.png"
},
{
  title: "Hotel Booking Website",
  description: "Built a responsive hotel booking platform with seamless authentication using Clerk’s prebuilt UI components. Developed a Node.js and Express backend to manage room listings and booking logic. Styled the frontend with Tailwind CSS for a modern and intuitive user experience.",
  technologies: ["Clerk", "Node.js", "Express.js", "Tailwind CSS", "React"],
  link: "#",
  github: "#",
  image: "/projects-images/hotel-booking.png"
}
,{
  title: "HHE E-commerce",
  description: "Built and manage hhe.co.in using Shopify for scalable and efficient performance.",
  technologies: ["Shopify", "HTML", "CSS", "JavaScript"],
  link: "https://hhe.co.in/",
  github: "#",
  image: "./projects-images/ecommerce.png"
}
,{
  title: "Client Websites",
  description: "Designed and developed responsive websites for clients like Aeropost India, Uniglobe Logistics, Oneglobe Logistics, IHKLC, AHTTC, RGMTTC, and DCS.",
  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "SQL"],
  link: "https://development.ahttcbokaro.org/",
  github: "https://github.com/SNMR-Group/AHTTC",
  image: "./projects-images/client-websites.png"
},
{
  title: "Y2Z Travel Itinerary Planner",
  description:
    "A responsive React app to plan daily travel activities with a smooth drag-and-drop interface, color-coded cards, and real-time visual feedback.",
  technologies: [
    "React 19",
    "Tailwind CSS",
    "@dnd-kit",
    "Lucide React",
    "Vite"
  ],
  link: "https://y2ztravelitineraryplanner.netlify.app/",
  github: "https://github.com/Kumaripriynka/Y2ZTravel-Itinerary-Planner", 
  image: "./projects-images/y2z-travel.png" 
}];
const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180, 360] }} transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 2 }} className="absolute rounded-full opacity-5 blur-xl" style={{ background: `linear-gradient(45deg, ${i % 2 === 0 ? '#0891b2' : '#0d9488'}, ${i % 2 === 0 ? '#06b6d4' : '#14b8a6'})`, width: `${100 + i * 50}px`, height: `${100 + i * 50}px`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}/>
        ))}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`, backgroundSize: '40px 40px' }}/>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center">
            <span className="relative flex h-2 w-2 mr-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span></span>My Portfolio
          </motion.span>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">Check out some of my Work out here</span>
          </motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} transition={{ duration: 0.8 }} className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"/>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"/>
              <div className="relative h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <motion.div className="absolute inset-0 bg-slate-100 dark:bg-slate-700/50" initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" loading="lazy"/>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-600/10 z-10"/>
                  </motion.div>
                </div>
              
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white transition-colors" title="View on GitHub"><FaGithub/></motion.a>
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white transition-colors" title="View Live Demo"><FaExternalLinkAlt className="text-sm"/></motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">Interested in seeing more of my work? Check out my GitHub profile for additional projects and code samples.</p>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/Kumaripriynka" target="_blank" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"><FaGithub className="mr-2"/>View My GitHub</motion.a>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;