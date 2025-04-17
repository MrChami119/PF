"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Loader } from "@react-three/drei"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Internship from "./components/Internship"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticleBackground from "./components/3d/ParticleBackground"
import CustomCursor from "./components/CustomCursor"
import ScrollProgress from "./components/ScrollProgress"

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
        <CustomCursor />
        <ScrollProgress />

        <AnimatePresence>
          {loading ? (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
              >
                CG
              </motion.div>
            </motion.div>
          ) : (
            <>
              <div className="fixed inset-0 -z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                  <Suspense fallback={null}>
                    <ParticleBackground />
                  </Suspense>
                </Canvas>
                <Loader />
              </div>

              <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

              <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Internship />
                <Contact />
              </main>

              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
