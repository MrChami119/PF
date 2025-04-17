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
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    },
    {
      title: "Frontend Development",
      icon: <FiLayout />,
      skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Material UI", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      skills: ["Node.js", "Express", "ASP.NET Core", "Django", "REST APIs", "GraphQL"],
    },
    {
      title: "Mobile Development",
      icon: <FiCpu />,
      skills: ["React Native", "Flutter", "Android (Java)"],
    },
    {
      title: "Database & Cloud",
      icon: <FiDatabase />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Microsoft SQL", "Azure", "AWS"],
    },
    {
      title: "DevOps & Tools",
      icon: <FiTool />,
      skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "Git", "JIRA", "Postman"],
    },
    {
      title: "Software Practices",
      icon: <FiGitBranch />,
      skills: ["Agile Methodology", "Test-Driven Development", "Clean Architecture", "Microservices"],
    },
    {
      title: "Soft Skills",
      icon: <FiUsers />,
      skills: ["Team Leadership", "Problem Solving", "Technical Mentoring", "Client Communication"],
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + skillIndex * 0.05 }}
                      className="inline-block px-3 py-1.5 text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full border border-purple-500/20 dark:border-purple-500/30 text-purple-600 dark:text-purple-300"
                    >
                      {skill}
                    </motion.span>
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