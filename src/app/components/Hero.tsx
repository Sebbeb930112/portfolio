import { motion } from 'motion/react'
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
  const base =
    'relative overflow-hidden px-8 py-4 rounded-lg font-medium cursor-pointer flex items-center justify-center gap-2 text-base border-none w-full lg:w-auto'

  const content = (
    <motion.button
      className={`${base} ${
        variant === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-transparent text-gray-900 border border-gray-900'
      }`}
      style={{ border: variant === 'outline' ? '1px solid #111827' : undefined }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {variant === 'dark' ? (
        <motion.span
          className="absolute inset-0 bg-gray-700 z-0"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      ) : (
        <motion.span
          className="absolute inset-0 bg-gray-200 z-0"
          initial={{ y: '100%' }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )

  return content
}

export default function Hero({ onScrollToProjects, onScrollToContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      {/* Portrait – desktop: absolut positionerad, full höjd */}
      <motion.img
        src="/sebastian.png"
        alt="Sebastian Blomqvist"
        className="hidden lg:block absolute bottom-0 right-0 lg:right-[5%] xl:right-[10%] pointer-events-none select-none"
        style={{ height: '92%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom' }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="flex flex-col gap-5 justify-center min-h-[calc(100vh-80px)] max-w-xl text-center lg:text-left">

          {/* Portrait – mobil: i flödet, ovanför texten */}
          <motion.img
            src="/sebastian.png"
            alt="Sebastian Blomqvist"
            className="lg:hidden w-full object-contain mx-auto"
            style={{ maxHeight: '110vw', objectPosition: '50% 0%' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <div>
            <motion.h1
              className="text-8xl lg:text-9xl text-gray-900 leading-none m-0"
              style={{ fontFamily: "'Comforter', cursive" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              Sebastian
            </motion.h1>
            <motion.h1
              className="text-8xl lg:text-9xl text-gray-900 leading-none m-0"
              style={{ fontFamily: "'Comforter', cursive" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              Blomqvist
            </motion.h1>
          </div>

          <motion.p
            className="text-2xl lg:text-3xl text-gray-700 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            User Experience Designer
          </motion.p>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 text-gray-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <MapPin size={16} className="text-gray-400" />
            <span className="text-sm font-medium">Stockholm, Sverige</span>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatedButton variant="dark" onClick={onScrollToProjects}>
              Se mitt arbete
              <ArrowUpRight size={18} />
            </AnimatedButton>
            <AnimatedButton variant="outline" onClick={onScrollToContact}>
              Kontakta mig
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        className="absolute bottom-12 left-1/2 -translate-x-1/2 border border-gray-300 rounded-full p-3 bg-transparent cursor-pointer hover:border-gray-900 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        onClick={onScrollToProjects}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={20} className="text-gray-600" />
      </motion.button>
    </section>
  )
}
