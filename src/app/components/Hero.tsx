import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'

interface HeroProps {
  onScrollToProjects: () => void
  onScrollToContact: () => void
}

function AnimatedButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode
  onClick?: () => void
  variant: 'dark' | 'outline'
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [_hovered, setHovered] = useState(false)

  // Magnetic pull
  const magX = useMotionValue(0)
  const magY = useMotionValue(0)
  const springX = useSpring(magX, { stiffness: 200, damping: 18 })
  const springY = useSpring(magY, { stiffness: 200, damping: 18 })

  // Spotlight position
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const spotOpacity = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(circle 90px at ${spotX}% ${spotY}%, ${
    variant === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(17,24,39,0.09)'
  } 0%, transparent 100%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    magX.set((e.clientX - cx) * 0.25)
    magY.set((e.clientY - cy) * 0.25)
    spotX.set(((e.clientX - rect.left) / rect.width) * 100)
    spotY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    magX.set(0)
    magY.set(0)
    spotOpacity.set(0)
    setHovered(false)
  }

  return (
    <motion.button
      ref={ref}
      className="relative overflow-hidden px-8 py-4 rounded-lg font-medium cursor-pointer flex items-center justify-center gap-2 text-base border-none w-full lg:w-auto"
      style={{
        x: springX,
        y: springY,
        backgroundColor: variant === 'dark' ? '#111827' : 'transparent',
        color: variant === 'dark' ? 'white' : '#111827',
        border: variant === 'outline' ? '1px solid #111827' : 'none',
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => { setHovered(true); spotOpacity.set(1) }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: variant === 'dark' ? 0.7 : 0.82 }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Spotlight följer muspekaren reaktivt */}
      <motion.span
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: spotlight, opacity: spotOpacity }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}

export default function Hero({ onScrollToProjects, onScrollToContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      {/* Portrait – desktop */}
      <motion.img
        src="/sebastian.png"
        alt="Sebastian Blomqvist"
        className="hidden lg:block absolute bottom-0 right-0 lg:right-[5%] xl:right-[10%] pointer-events-none select-none"
        style={{ height: '92%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom' }}
        initial={{ opacity: 0, scale: 0.94, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {/* Fade nertill – desktop */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 lg:right-[5%] xl:right-[10%] pointer-events-none"
        style={{ height: '16%', width: '50%', background: 'linear-gradient(to top, #f5f1ea 0%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="flex flex-col gap-5 justify-start lg:justify-center min-h-[calc(100vh-80px)] max-w-xl text-center lg:text-left">

          {/* Portrait – mobil */}
          <div className="lg:hidden relative">
            <motion.img
              src="/sebastian.png"
              alt="Sebastian Blomqvist"
              className="w-full object-contain mx-auto"
              style={{ maxHeight: '110vw', objectPosition: '50% 0%' }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: '30%', background: 'linear-gradient(to top, #f5f1ea 0%, transparent 100%)' }}
            />
          </div>

          {/* Namn */}
          <div className="relative z-10 lg:mt-0 -mt-32">
            <motion.h1
              className="text-8xl lg:text-9xl text-gray-900 leading-none m-0"
              style={{ fontFamily: "'Comforter', cursive" }}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Sebastian
            </motion.h1>
            <motion.h1
              className="text-8xl lg:text-9xl text-gray-900 leading-none m-0"
              style={{ fontFamily: "'Comforter', cursive" }}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            >
              Blomqvist
            </motion.h1>

            {/* Titel – blur to sharp */}
            <motion.p
              className="text-2xl lg:text-3xl text-gray-700 font-semibold mt-4"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
            >
              User Experience Designer
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mt-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <MapPin size={16} className="text-gray-400" />
              </motion.div>
              <span className="text-sm font-medium">Stockholm, Sverige</span>
            </motion.div>

            {/* Knappar */}
            <div className="flex flex-col lg:flex-row gap-3 mt-5">
              <AnimatedButton variant="dark" onClick={onScrollToProjects}>
                Se mitt arbete
                <ArrowUpRight size={18} />
              </AnimatedButton>
              <AnimatedButton variant="outline" onClick={onScrollToContact}>
                Kontakta mig
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-pil – bara desktop */}
      <motion.button
        className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 border border-gray-300 rounded-full p-3 bg-transparent cursor-pointer hover:border-gray-900 transition-colors z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-gray-600" />
        </motion.div>
      </motion.button>
    </section>
  )
}
