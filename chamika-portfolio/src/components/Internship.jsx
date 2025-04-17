"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiDownload } from "react-icons/fi"

const Internship = () => {
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
    <section id="internship" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Software Engineering Intern</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glassmorphism rounded-2xl p-8 border-2 border-blue-500 dark:border-blue-600 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 opacity-10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 opacity-10 rounded-full"></div>

            <div className="mb-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Available:</span>
                  <span className="text-gray-600 dark:text-gray-400">Immediately</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">Remote / On-site</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                I am currently open to a Software Engineering Internship opportunity. With a strong foundation in computer science principles and practical programming skills, I am eager to contribute to a dynamic team while further developing my technical abilities.
              </p>
            </div>

            <div className="text-center">
              <motion.a
                href="/cv/Chamika-Gunarathne.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" /> Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Internship