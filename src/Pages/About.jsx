import { FaGraduationCap, FaHeart, FaStar, FaGamepad, FaLaptopCode } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { SiInfosys } from "react-icons/si";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaShoppingCart, FaHeartbeat, FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { SiCrunchyroll } from "react-icons/si";

// --- Original Data (Enhanced with icons for timeline) ---
const timeline = [
  { year: "2023 June", event: "Started Computer Science Engineering at IES University.", icon: <FaGraduationCap /> },
  { year: "2024 March", event: "Built first full-stack project.", icon: <FaLaptopCode /> },
  { year: "2024", event: "Participated in Hackathons.", icon: <TbHeartHandshake /> },
  { year: "2025 May - Sep", event: "Internship at Cognifyz Technologies.", icon: <FaStar /> },
  { year: "2025 Oct", event: "I cleared all the online rounds and then attended an interview at Infosys.", icon: <SiInfosys /> },
];

const aboutData = [
  // ... (Keeping this section's content as is, but giving it a new card design)
  {
    title: "Education",
    icon: <FaGraduationCap className="text-4xl text-indigo-500 mb-3" />,
    content: (
      <>
        <p className="mt-2">🏫 IES College of Technology</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech – CGPA 8.3</p>
      </>
    ),
  },
  {
    title: "Passion",
    icon: <FaHeart className="text-4xl text-pink-500 mb-3" />,
    content: (
      <p>
        I’m passionate about <span className="font-semibold">Full Stack Development</span> and
        creating meaningful digital experiences that blend creativity with logic.
      </p>
    ),
  },
  {
    title: "Interests",
    icon: <FaStar className="text-4xl text-yellow-500 mb-3" />,
    content: (
      <p>
        Exploring AI tools, UI/UX design, learning new frameworks, and contributing to open-source
        projects that make an impact.
      </p>
    ),
  },
  {
    title: "Hobbies",
    icon: <FaGamepad className="text-4xl text-green-500 mb-3" />,
    content: (
      <p>
        Coding challenges, gaming, listening to music, and reading about emerging technologies &
        startups.
      </p>
    ),
  },
];

// Animation for staggered items
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const projectsData = [
    {
        id: 1,
        title: "Cognifyz Technologies",
        description: "I have done my intership Journey at Cognifyz from May to Sep and  this journey with Cognifyz was amazing.",
        tags: ["Full Stack Web Development"],
        icon: <FaLaptopCode className="text-red-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760720443/Screenshot_2025-10-17_222733_qscfxp.png",
        githubUrl: " https://cognifyz.com/",
    },
    {
        id: 2,
        title: "Oasis Infobyte",
        description: "This company offered me a one-month internship, I was looking for a full-time job after completing my internship at Cognifyz.",
        tags: ["Full Stack Web Development"],
        icon: <FaGlobe className="text-blue-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760720419/Screenshot_2025-10-17_222707_wlciin.png",
        githubUrl: "https://oasisinfobyte.com/",
    },
        {
        id: 3,
        title: " Internship Certificate ",
        description: "I’m glad to share that I’ve successfully completed my internship at Cognifyz Technologies and received my Internship Completion Certificate.",
        tags: ["Full Stack Web Development"],
        icon: <FaGlobe className="text-blue-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760720431/Screenshot_2025-10-17_222722_xpuhcw.png",
        githubUrl: "https://cognifyz.com/",
    },
  
];

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    exit: { y: "100vh", opacity: 0 },
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
            >
                <motion.div
                    className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
                    variants={modalVariants}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-4 z-10 p-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <FaTimes className="text-xl" />
                    </button>

                    <div className="w-full h-auto max-h-[70vh] overflow-y-auto">
                        <img
                            src={project.imagePlaceholder}
                            alt={`Full screenshot of ${project.title}`}
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="p-4 sm:p-6 text-center border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {project.title}
                        </h3>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-2 text-white bg-gray-900 dark:bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            <FaGithub className="mr-2 text-lg" /> View Code
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ProjectCard = ({ project, onImageClick }) => {
    return (
        <motion.div
            className="p-4 sm:p-6 min-w-full sm:min-w-[50%] lg:min-w-[33.33%] 2xl:min-w-[25%] h-full"
            style={{ pointerEvents: 'none' }}
        >
            <div
                className="group overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-800 transition-transform duration-500 hover:shadow-indigo-500/50 h-full flex flex-col"
                style={{ pointerEvents: 'auto' }}
            >
                <motion.div
                    className="h-56 overflow-hidden relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => onImageClick(project)}
                >
                    <img
                        src={project.imagePlaceholder}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-full object-cover border-b-4 border-indigo-600/50"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="text-white text-lg font-semibold border-b-2 border-white">CLICK TO ZOOM</span>
                    </div>
                </motion.div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 border-b-2 border-indigo-400/50 pb-1">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 text-white bg-gray-900 dark:bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-700 transition-colors duration-300 mt-auto"
                    >
                       
                  <SiCrunchyroll className="mr-2 text-xl" /> Visit Company
                    </a>
                </div>
            </div>
        </motion.div>
    );
};


const About = () => {
  const carouselRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);
      const [selectedProject, setSelectedProject] = useState(null);
  
      const navigate = (direction) => {
          if (!carouselRef.current) return;
  
          const itemWidth = carouselRef.current.children[0].offsetWidth;
          const newIndex = currentIndex + direction;
  
          if (newIndex >= 0 && newIndex < projectsData.length) {
              setCurrentIndex(newIndex);
  
              const newX = newIndex * itemWidth;
  
              carouselRef.current.scrollTo({
                  left: newX,
                  behavior: 'smooth',
              });
          } else if (newIndex < 0) {
              setCurrentIndex(0);
              carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else if (newIndex >= projectsData.length) {
              setCurrentIndex(projectsData.length - 1);
              const constraints = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
              carouselRef.current.scrollTo({ left: constraints, behavior: 'smooth' });
          }
      };
  
      const handleImageClick = (project) => {
          setSelectedProject(project);
          document.body.style.overflow = 'hidden';
      };
  
      const handleCloseModal = () => {
          setSelectedProject(null);
          document.body.style.overflow = 'unset';
      };
  
  return (
    <>
    <div id="about" className="pt-28 md:pt-40 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Main Header --- */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100"
        >
          About Me
        </motion.h2>

        {/* --- Bio and Timeline Section --- */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          
          {/* Left: Bio/Description */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-indigo-200 dark:border-indigo-700/50"
          >
            <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src="https://res.cloudinary.com/drlcjjixb/image/upload/v1760554031/postImages/unwd3bfvgpjdbav2d5zs.jpg"
          alt="Profile"
          className="w-64 mb-5 md:mb-0 md:w-80 md:h-130  rounded-md mt-5 object-cover  "
        />
      </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
              I am a passionate Computer Engineering student and a dedicated Full Stack Developer. My focus is on creating responsive, intuitive, and visually appealing web applications. I love diving into new technologies and turning complex ideas into clean, functional code.
            </p>
          </motion.div>

          {/* Right: Unique Timeline Design (Centered Stepper) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3 relative"
          >
            {/* Central Vertical Line (Gradient) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full hidden md:block"></div>

            <ul className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.li
                  key={idx}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                >
                  {/* Timeline Card */}
                  <div className={`w-full md:w-[45%] p-5 rounded-xl shadow-2xl transition-all duration-500 group border-t-4 ${idx % 2 === 0 ? 'border-indigo-500 md:mr-12' : 'border-purple-500 md:ml-12'} bg-white dark:bg-gray-800 hover:shadow-indigo-500/30 dark:hover:shadow-purple-500/30`}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.year}</span>
                        <span className="text-3xl text-indigo-500 dark:text-purple-400">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{item.event}</p>
                  </div>
                  
                  {/* Timeline Dot (Centered) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-500 group-hover:border-purple-500 transition-all duration-300 z-10"></div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
 <section
                id="projects"
                className="min-h-screen px-0 sm:px-6 pt-28 md:pt-40 py-20 bg-gray-50 dark:bg-gray-900 relative"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-0">
                    <motion.h2
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100 px-4 sm:px-0"
                    >
                        Work & <span className="text-indigo-600 dark:text-pink-400">Experience</span>
                    </motion.h2>
    
                    <div className="hidden md:flex justify-end gap-4 mb-6 pr-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                            disabled={currentIndex === 0}
                            aria-label="Previous project"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                            disabled={currentIndex >= projectsData.length - 1}
                            aria-label="Next project"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
    
                    <motion.div
                        ref={carouselRef}
                        className="flex cursor-grab overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                    >
                        {projectsData.map((project) => (
                            <div key={project.id} className="snap-center min-w-full sm:min-w-[50%] lg:min-w-[33.33%] 2xl:min-w-[25%]">
                                <ProjectCard project={project} onImageClick={handleImageClick} />
                            </div>
                        ))}
                    </motion.div>
    
                    <div className="md:hidden mt-8 text-center text-gray-600 dark:text-gray-400">
                        ← Swipe to view more →
                    </div>
                </div>
    
                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
                    )}
                </AnimatePresence>
            </section>
        {/* --- Stats/Data Cards Section --- */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Core Details
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(99, 102, 241, 0.4)" }} // Subtle lift and shadow color
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 border-b border-dashed dark:border-gray-700 pb-1">
                    {item.title}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">{item.content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default About;