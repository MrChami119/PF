"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiUser, FiMessageSquare } from "react-icons/fi"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out if you have any questions or if you'd like to work together.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="w-full max-w-md">
              <div className="glassmorphism rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                      <FiMail className="text-purple-600 dark:text-purple-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:mrchamika119@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        mrchamika119@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <FiLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/chamika-gunarathne-5906a1202/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        https://www.linkedin.com/in/chamika-gunarathne-5906a1202/
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4">
                      <FiGithub className="text-gray-700 dark:text-gray-300 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">GitHub</h4>
                      <a
                        href="https://github.com/MrChami119"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        https://github.com/MrChami119
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/chamika-gunarathne-5906a1202/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/MrChami119"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href="mailto:mrchamika119@gmail.com"
                      className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiMail size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact