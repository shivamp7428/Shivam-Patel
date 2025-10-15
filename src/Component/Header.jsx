import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Skills', href: '/skill' },
  { name: 'Project', href: '/project' },
];

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glassClass = isScrolled
    ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-700'
    : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm';

  const buttonClass =
    'px-5 py-2 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-200 font-bold hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition duration-300';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-5 md:p-8 flex justify-between items-center transition-all duration-300 ease-in-out ${glassClass}`}
    >
      {/* Logo */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-black text-gray-900 dark:text-gray-200 ml-4 md:ml-12"
      >
        Shivam 
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6 md:space-x-8 mr-4 md:mr-12">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ y: -3, scale: 1.05 }}
            className="font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition duration-300"
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            {item.name}
          </motion.a>
        ))}

        <ThemeToggle />
        <a href="tel:+918871736638" className={buttonClass}>CONTACT ME</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="ml-4 text-gray-900 dark:text-gray-200">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center py-6 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 dark:text-gray-200 font-medium hover:text-indigo-600 transition duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className={buttonClass}>CONTACT ME</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default GlassNavbar;
