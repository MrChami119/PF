"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const projects = [
    {
      title: "Automating Utility Processes with Precision (AUPP)",
      description: "An automated utility management system to streamline tasks like form submissions, site visits, media management, CEB approval, and installation tracking. The system improves efficiency, reduces delays, and enhances communication among stakeholders.",
      image: "/images/projects/aupp.jpg",
      technologies: ["Spring Boot", "React", "Laravel", "PostgreSQL","Docker","Amazon S3","RabbitMQ"],
    },
    {
      title: "IoT Patient Management System",
      description: "Created an IoT-enabled patient management system for hospital clinical environments with a Raspberry Pi local server and Twilio API for real-time alerts. The system streamlines patient data management and improves hospital communication.",
      image: "/images/projects/iot.jpg",
      technologies: ["Laravel", "HTML", "CSS", "JavaScript", "PHP", "Raspberry Pi"],
    },
    {
      title: "Web-based Product Store",
      description: "Built a product management platform using MERN Stack. Enables users to add, edit, and display products seamlessly with a responsive UI and efficient backend API.",
      image: "/images/projects/store.jpg",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },   
    {
      title: "Speatance - AI English Companion",
      description: "Developed an AI-powered Flutter app that helps users practice spoken English through interactive conversations. Allows users to speak with the app, receive feedback, and improve their fluency in real time.",
      image: "/images/projects/spaetance.jpg",
      technologies: ["Flutter", "Dart", "AI", "Speech Recognition"],
    },
    {
      title: "Weather Mate",
      description: "A dynamic weather forecasting app that provides real-time weather updates. Fetches current weather of user's location and allows searching different locations with 5-day forecasts for better planning.",
      image: "/images/projects/weather.jpg",
      technologies: ["Flutter", "Dart", "Weather API", "Geolocation"],
    },
    {
      title: "AI Chatbot",
      description: "Developed a chatbot using advanced AI models to deliver accurate, context-aware responses and enhance user engagement through intelligent conversations.",
      image: "/images/projects/bot.jpg",
      technologies: ["Python", "Claude AI", "Hugging Face", "LLAMA"],
    },
    {
      title: "EleFlex - Elephant Management",
      description: "Designed and developed a user-friendly website to support elephant welfare, featuring seamless navigation and a donation management system. A team project that refined web development and design skills.",
      image: "/images/projects/ele.jpg",
      technologies: ["Java", "PHP", "HTML", "CSS", "MySQL", "Figma"],
    },
    {
      title: "ORFOO - Food Ordering System",
      description: "A C# based food ordering system for restaurants that allows customers to order directly from their tables. It streamlines the ordering process by sending orders to the admin and kitchen, notifying customers when their order is ready.",
      image: "/images/projects/orfoo.jpg",
      technologies: ["C#", ".NET", "Windows Forms", "SQL Server"],
    },
    {
      title: "OrderCraft - E-commerce Design",
      description: "Created responsive and visually appealing e-commerce website designs using Figma. Optimized web layouts, usability, and performance to deliver an enhanced user experience at Vision Hunters (Pvt) Ltd.",
      image: "/images/projects/figma.jpg",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my projects that showcase my skills and experience across different technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-end space-x-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects