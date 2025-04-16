"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiDownload, FiBriefcase, FiCalendar, FiClock } from "react-icons/fi"

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Internship Opportunity</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glassmorphism rounded-2xl p-8 border-2 border-blue-500 dark:border-blue-600 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 opacity-10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 opacity-10 rounded-full"></div>

            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <FiBriefcase className="text-blue-600 dark:text-blue-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Software Engineering Internship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently seeking opportunities to apply my skills in a professional environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FiCalendar className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Availability</h4>
                  <p className="text-gray-600 dark:text-gray-400">Available for internships starting June 2024</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FiClock className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Duration</h4>
                  <p className="text-gray-600 dark:text-gray-400">3-6 months, full-time or part-time</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Full-Stack Development",
                  "UI/UX Design",
                  "Cloud Computing",
                  "Machine Learning",
                  "DevOps",
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" /> Download CV
              </motion.a>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Please feel free to reach out through the contact form below if you have any opportunities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Internship
