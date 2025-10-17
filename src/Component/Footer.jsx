import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="relative pt-10 pb-10 bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-800">
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Logo & Text */}
        <div className="text-center flex justify-center items-center gap-1  md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ml-4 md:ml-12 text-2xl md:text-3xl font-extrabold cursor-pointer select-none"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
             <a href="https://shivam-patel-zy5a.vercel.app/">𝓢𝓟</a>
            </span>
          </motion.div>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/shivamp7428"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-patel-64320032a/"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
          >
            <FaLinkedin />
          </a>
         <a
            href="mailto:shivampatelpatel2025@gmail.com?subject=Let's Connect&body=Hi Shivam,%0D%0A%0D%0AI saw your portfolio and would love to connect!"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
         >
        <FaEnvelope />
        </a>
        <a
            href="tel:+918871736638"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
         >
        <FaWhatsapp />
        </a>
        </div>

        {/* Right - Tagline */}
        <p className="text-gray-700 dark:text-gray-400 text-sm italic text-center md:text-right">
          “Built with ❤️ and React + Tailwind + Backend”
        </p>
      </motion.div>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4f46e5"/> 
      <stop offset="50%" stop-color="#a855f7"/> 
      <stop offset="100%" stop-color="#ec4899"/> 
    </linearGradient>
  </defs>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" font-family="cursive" fill="url(#grad)">
    𝓢𝓟
  </text>
</svg> 
    </footer>
  );
};

export default Footer;
