"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi"

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism rounded-2xl p-8 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-2xl"></div>

            <div className="ml-6">
              <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
              <h4 className="text-xl text-purple-500 dark:text-purple-400 mb-4">University of Ruhuna</h4>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>2020 - 2024 (Expected)</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiMapPin className="mr-2" />
                  <span>Matara, Sri Lanka</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold mb-2 flex items-center">
                    <FiAward className="mr-2 text-purple-500" /> Achievements
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-6">
                    <li>Dean's List for Academic Excellence (2021, 2022)</li>
                    <li>First Place, University Hackathon 2022</li>
                    <li>Research Publication on Machine Learning Applications</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Database Systems",
                      "Web Development",
                      "Software Engineering",
                      "Artificial Intelligence",
                      "Computer Networks",
                      "Operating Systems",
                      "Mobile Application Development",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 glassmorphism rounded-2xl p-8 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-2xl"></div>

            <div className="ml-6">
              <h3 className="text-2xl font-bold mb-2">High School Diploma</h3>
              <h4 className="text-xl text-blue-500 dark:text-blue-400 mb-4">National School</h4>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>2016 - 2019</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiMapPin className="mr-2" />
                  <span>Sri Lanka</span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-2 flex items-center">
                  <FiAward className="mr-2 text-blue-500" /> Achievements
                </h5>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-6">
                  <li>Graduated with Distinction in Mathematics and Science</li>
                  <li>School Science Fair Winner</li>
                  <li>National Mathematics Competition Finalist</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
