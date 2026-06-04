import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BalanzaCaseStudy from './components/BalanzaCaseStudy'
import SoundscapeCaseStudy from './components/SoundscapeCaseStudy'
import SpelinsiktCaseStudy from './components/SpelinsiktCaseStudy'
import LordOfTheRingsShowcase from './components/LordOfTheRingsShowcase'
import ReflexaCaseStudy from './components/ReflexaCaseStudy'
import CirclaCaseStudy from './components/CirclaCaseStudy'

type CurrentView = 'home' | 'case-study'
type ActiveCaseStudy = 'balanza' | 'soundscape' | 'spelinsikt' | 'lotr' | 'reflexa' | 'circla' | null

export default function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('home')
  const [activeCaseStudy, setActiveCaseStudy] = useState<ActiveCaseStudy>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const sections = ['home', 'about', 'projects', 'contact']
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const openCaseStudy = useCallback((id: ActiveCaseStudy) => {
    setActiveCaseStudy(id)
    setCurrentView('case-study')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeCaseStudy = useCallback(() => {
    setCurrentView('home')
    setActiveCaseStudy(null)
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Hem' },
    { id: 'projects', label: 'Projekt' },
    { id: 'about', label: 'Om mig' },
    { id: 'contact', label: 'Kontakt' },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* NAVIGATION */}
      {currentView === 'home' && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center"
          style={{
            backgroundColor: isScrolled ? 'rgba(245,241,234,0.92)' : 'rgba(245,241,234,0.80)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
            transition: 'box-shadow 0.3s ease',
          }}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('home')}
              className="text-2xl text-gray-900 cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "'Comforter', cursive" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sebastian Blomqvist
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer border-none transition-colors ${
                    activeSection === link.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden p-2 rounded-lg border-none bg-transparent cursor-pointer text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="absolute top-20 left-0 right-0 border-b border-gray-100 md:hidden"
                style={{ backgroundColor: 'rgba(245,241,234,0.97)', backdropFilter: 'blur(12px)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-6 py-4 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium text-left cursor-pointer border-none transition-colors ${
                        activeSection === link.id
                          ? 'bg-gray-900 text-white'
                          : 'bg-transparent text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onScrollToProjects={() => scrollTo('projects')} onScrollToContact={() => scrollTo('contact')} />
            <Projects onOpenCaseStudy={openCaseStudy} />
            <About />
            <Contact />
            {/* FOOTER */}
            <footer className="bg-gray-50 border-t border-gray-100 py-12">
              <p className="text-center text-gray-500 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                © 2025 Sebastian Blomqvist. Alla rättigheter förbehållna.
              </p>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeCaseStudy === 'balanza' && <BalanzaCaseStudy onBack={closeCaseStudy} />}
            {activeCaseStudy === 'soundscape' && <SoundscapeCaseStudy onBack={closeCaseStudy} />}
            {activeCaseStudy === 'spelinsikt' && <SpelinsiktCaseStudy onBack={closeCaseStudy} />}
            {activeCaseStudy === 'lotr' && <LordOfTheRingsShowcase onBack={closeCaseStudy} onContact={() => { closeCaseStudy(); setTimeout(() => scrollTo('contact'), 400) }} />}
            {activeCaseStudy === 'reflexa' && <ReflexaCaseStudy onBack={closeCaseStudy} />}
            {activeCaseStudy === 'circla' && <CirclaCaseStudy onBack={closeCaseStudy} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
