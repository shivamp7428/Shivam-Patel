import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaShoppingCart, FaHeartbeat, FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        title: "OTT Platform",
        description: "A Jio Hotstar-style video streaming service with user authentication, category browsing, and a seamless video player experience.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        icon: <FaLaptopCode className="text-red-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760563024/Screenshot_2025-10-16_021859_r6ajhw.png",
        githubUrl: "https://github.com/shivamp7428/OTT-Plateform",
    },
    {
        id: 2,
        title: "Wanderlust",
        description: "A dynamic travel platform allowing users to view, search, and book unique accommodations worldwide, featuring map integration and reviews.",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaGlobe className="text-blue-500" />,
        imagePlaceholder: "https://media.licdn.com/dms/image/v2/D5622AQGyuhg6alcfuQ/feedshare-shrink_800/feedshare-shrink_800/0/1707737715552?e=2147483647&v=beta&t=WQQYJvw_oE14TgsZRZ0i3BZBrdCURKuzib1ahbI2z2g",
        githubUrl: "https://github.com/shivamp7428/Wanderlust",
    },
    {
        id: 3,
        title: "E-commerce",
        description: "A full-fledged e-commerce solution with cart management, secure checkout, product filtering, and admin panel capabilities.",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaShoppingCart className="text-green-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760563247/Screenshot_2025-05-27_160843_kd7vle.png",
        githubUrl: "https://github.com/shivamp7428/E-Commerce/tree/master",
    },
    {
        id: 4,
        title: "HealthTrack",
        description: "An application to monitor daily health metrics, track workout progress, and visualize data trends for personalized fitness goals.",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaHeartbeat className="text-pink-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760563311/Screenshot_2025-10-16_022313_hzvfjr.png",
        githubUrl: "https://github.com/shivamp7428/medical",
    },
    {
        id: 5,
        title: "Youtube Clone",
        description: "On this platform you can search anything and it provide a secure and full working Answers.",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaHeartbeat className="text-pink-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760563728/Screenshot_2025-10-16_022420_atyjzh.png",
        githubUrl: "https://github.com/shivamp7428/Youtube-",
    },
    {
        id: 6,
        title: "Spotify Clone",
        description: "This is spotify clone for listing music!",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaHeartbeat className="text-pink-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760563860/Screenshot_2025-10-16_023714_wmo1zs.png",
        githubUrl: "https://github.com/shivamp7428",
    },
     {
        id: 7,
        title: "Veda Diet",
        description: "On this website you may know what is the diet today and talk with AI chat for any question.!",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaHeartbeat className="text-pink-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760604047/Screenshot_2025-10-16_023336_cq4ux6.png",
        githubUrl: "https://github.com/shivamp7428/Prototype",
    },
      {
        id: 8,
        title: "Coaching Platform",
        description: "This project is fully working with backend and frontend. in this platform you can take addmission on coaching center and take online classes and many more.!",
        tags: ["React.js", "Node.js", "Tailwindcss", "MongoDB"],
        icon: <FaHeartbeat className="text-pink-500" />,
        imagePlaceholder: "https://res.cloudinary.com/drlcjjixb/image/upload/v1760604279/Screenshot_2025-10-16_023531_fa32u8.png",
        githubUrl: "https://github.com/shivamp7428/COMPUTER-COACHING",
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
                        <FaGithub className="mr-2 text-xl" /> View Code on GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
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
                    Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
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
    );
};

export default Projects;