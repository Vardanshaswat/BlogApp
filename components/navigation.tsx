"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ModernBlog
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="/">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Home
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  About
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Contact
                </motion.span>
              </Link>
            </div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 p-0 hover:bg-blue-100 dark:hover:bg-slate-800"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-yellow-500" />
                    ) : (
                      <Moon className="h-4 w-4 text-slate-700" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 p-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-yellow-500" />
                    ) : (
                      <Moon className="h-4 w-4 text-slate-700" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>

            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 p-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50"
            >
              <div className="py-4 space-y-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </motion.div>
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    About
                  </motion.div>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    Contact
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
