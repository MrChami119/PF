"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiCalendar, FiMapPin } from "react-icons/fi"

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
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* University Card */}
            <motion.div 
              variants={itemVariants} 
              className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 mr-4">
                  <img 
                    src="/images/university-of-ruhuna-logo.png" 
                    alt="University of Ruhuna Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Bachelor of Computer Science</h3>
                  <h4 className="text-lg text-purple-500 dark:text-purple-400">University of Ruhuna</h4>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="w-6 h-6 mr-2">
                  <img 
                    src="/images/ruhuna-flag.png" 
                    alt="Sri Lanka Flag"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-600 dark:text-gray-400">University of Ruhuna</span>
              </div>

              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <FiCalendar className="mr-2 flex-shrink-0" />
                  <span>August 2022 - Present</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-2 flex-shrink-0" />
                  <span>Matara, Sri Lanka</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 opacity-10 w-32 h-32">
                <img 
                  src="/images/university-of-ruhuna-logo.png" 
                  alt="University of Ruhuna Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* School Card */}
            <motion.div 
              variants={itemVariants} 
              className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 mr-4">
                  <img 
                    src="/images/bandaranayake-college-logo.png" 
                    alt="Bandaranayake College Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">GCE Advanced Level</h3>
                  <h4 className="text-lg text-blue-500 dark:text-blue-400">Bandaranayake College</h4>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="w-6 h-6 mr-2">
                  <img 
                    src="/images/school-flag.jpg" 
                    alt="Sri Lanka Flag"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-600 dark:text-gray-400">Bandaranayake College, Gampaha</span>
              </div>

              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <FiCalendar className="mr-2 flex-shrink-0" />
                  <span>2016 - 2019</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-2 flex-shrink-0" />
                  <span>Gampaha, Sri Lanka</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 opacity-10 w-32 h-32">
                <img 
                  src="/images/bandaranayake-college-logo.png" 
                  alt="Bandaranayake College Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
