"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool, FiGitBranch, FiUsers, FiCpu } from "react-icons/fi"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      icon: <FiLayout />,
      skills: ["React", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "SASS", "Redux"],
    },
    {
      title: "Backend",
      icon: <FiServer />,
      skills: ["Node.js", "Express", "Spring Boot", "Django", "Flask", "RESTful APIs", "GraphQL"],
    },
    {
      title: "Databases",
      icon: <FiDatabase />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "SQLite"],
    },
    {
      title: "DevOps & Tools",
      icon: <FiTool />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Vite", "npm/yarn"],
    },
    {
      title: "Version Control",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Pull Requests", "Code Reviews"],
    },
    {
      title: "Soft Skills",
      icon: <FiUsers />,
      skills: ["Team Collaboration", "Problem Solving", "Communication", "Time Management", "Adaptability"],
    },
    {
      title: "Other",
      icon: <FiCpu />,
      skills: ["Data Structures", "Algorithms", "OOP", "Design Patterns", "Testing", "UI/UX Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism rounded-2xl p-6 h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-purple-500">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 40 + 60}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
