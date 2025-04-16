"use client"

import { motion } from "framer-motion"
import { FiArrowUp, FiHeart } from "react-icons/fi"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mb-8"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiArrowUp size={20} />
          </motion.button>

          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Designed & Built with <FiHeart className="inline text-pink-500" /> by Chamika Gunarathne
              </p>
              <p className="text-gray-500 dark:text-gray-500">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
