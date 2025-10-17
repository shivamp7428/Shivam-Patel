import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row  items-center justify-center px-6 md:px-20 bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-800"
    >
      {/* Left Side: Text */}
      <div className="flex-1  flex flex-col items-start md:pt-20 pt-30 md:items-start space-y-4">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          Hi, I&apos;m
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <a href="https://shivam-patel-zy5a.vercel.app/"> 𝓢𝓱𝓲𝓿𝓪𝓶 𝓟𝓪𝓽𝓮𝓵</a>

          </span>
        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 dark:text-gray-300  md:text-xl max-w-md"
        >
          I am a Computer Engineering student & Full Stack Developer passionate about building beautiful and functional web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex md:space-x-4 space-x-2 mt-4"
        >
         <a
           href="/Shivam_Patel_Resume.pdf"
           download="Shivam_Patel_Resume.pdf"
            className="md:px-6 px-3 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
           >
           Download Resume
           </a>


          <a
            href="tel:+918871736638"
            className="md:px-6 px-3 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Side: Profile Image */}
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
    </section>
  );
};

export default Home;
