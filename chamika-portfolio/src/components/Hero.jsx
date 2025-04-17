"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Typewriter from "react-typewriter-effect"
import { FiDownload, FiMail } from "react-icons/fi"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateMovement = (axis) => {
    const value =
      axis === "x"
        ? (mousePosition.x / window.innerWidth - 0.5) * 20
        : (mousePosition.y / window.innerHeight - 0.5) * 20
    return value
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translate(${calculateMovement("x")}px, ${calculateMovement("y")}px)`,
            }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2 gradient-text">Chamika Gunarathne</h1>

            {/* Subtitle with conditional color */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-medium"
            >
              <span className="text-black dark:text-white">Undergraduate</span>
              <span className="mx-2 text-black dark:text-white">|</span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Aspiring Software Engineer
              </span>
            </motion.p>

            <div className="h-12 md:h-16 flex justify-center mt-4">
              <Typewriter
                options={{
                  strings: ["Undergraduate", "Aspiring Software Engineer", "Problem Solver", "Tech Enthusiast"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                  className: "text-xl md:text-2xl text-gray-600 dark:text-gray-400",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-purple-600 text-white flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 dark:text-blue-400 flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
