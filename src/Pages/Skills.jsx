import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaCodeBranch } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss,  SiTypescript, SiFigma, Si1001Tracklists, SiJavascript } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { SiOctanerender } from "react-icons/si";
// Define the skills data, grouped by category
const skillsData = [
  {
    category: "Frontend Development",
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-500" /> },
    ],
  },
  {
    category: "Backend & Database",
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "SQL (MySQL)", icon: <FaDatabase className="text-blue-900" /> },
      // Add other backend skills like Python/Java/C# if applicable
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <FaGitAlt className="text-orange-600" />,
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600" /> },
      { name: "Render", icon:<SiOctanerender  className="text-black" /> },
      { name: "VS Code", icon: <Si1001Tracklists className="text-blue-500" /> },
      { name: "REST APIs", icon: <FaCodeBranch className="text-teal-500" /> },
      { name: "Vercel", icon: <RiVercelLine  className="text-white bg-black overflow-hidden rounded-full p-1" /> },
      { name: "Netlify", icon: <SiNetlify  className="text-teal-500" /> },
    ],
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger groups
      delayChildren: 0.2,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};
const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 97 },
  { name: "JavaScript / React", level: 90 },
  { name: "Node.js / Express", level: 80 },
  { name: "MongoDB", level: 65 },
  { name: "MySQL", level: 75 },
];

const Skills = () => {
  return (
  <>
    <section
      id="skills"
      className="min-h-screen px-6 pt-28 md:pt-40 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100"
        >
          Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={groupVariants}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-4 border-indigo-500 transform hover:shadow-indigo-500/50 transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{group.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", color: "#fff" }} 
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 font-medium text-sm shadow-md cursor-pointer transition-all duration-200"
                  >
                    <span className="text-xl mr-2">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-gray-800"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10"
      >
        Skills Ratio
      </motion.h2>

      <div className="flex flex-col gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.7 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-gray-900 dark:text-gray-100 font-medium">{skill.name}</span>
              <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
  );
};

export default Skills;
