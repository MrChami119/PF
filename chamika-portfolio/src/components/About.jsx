"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiUser, FiCode, FiTarget } from "react-icons/fi"

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              I'm an undergraduate student at the University of Ruhuna, passionate about software engineering and
              technology. My academic journey has equipped me with a strong foundation in computer science principles,
              while my personal projects have allowed me to apply these concepts to real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
            I’m deeply passionate about software engineering and love building intelligent, user-centered digital solutions. 
            I thrive on designing systems that combine smart technology with intuitive design to improve everyday experiences. 
            My mission is to use innovation and creativity to make a meaningful difference in people’s lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              className="glassmorphism rounded-2xl p-6 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mb-4">
                <FiUser className="text-purple-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science undergraduate with a focus on software development and web technologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glassmorphism rounded-2xl p-6 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
                <FiCode className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Driven by the challenge of solving complex problems through elegant code and innovative design.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glassmorphism rounded-2xl p-6 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mb-4">
                <FiTarget className="text-pink-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goals</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Aspiring to become a skilled software engineer who creates impactful, user-centered applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
