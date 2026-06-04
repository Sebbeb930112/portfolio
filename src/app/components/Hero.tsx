import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

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
    'relative overflow-hidden px-8 py-4 rounded-lg font-medium cursor-pointer flex items-center gap-2 text-base border-none'

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
      <div className="max-w-7xl mx-auto w-full px-6 py-16">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 items-center">
          {/* LEFT – Text */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
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
              className="text-2xl lg:text-3xl text-gray-600 font-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              User Experience Designer
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
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

          {/* RIGHT – Portrait */}
          <div className="order-1 lg:order-2">
            <motion.div
              className="relative rounded-l-2xl overflow-hidden"
              style={{ aspectRatio: '4/5' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <img
                src="/sebastian.jpg"
                alt="Sebastian Blomqvist"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay fading to background */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent 50%, transparent 70%, #f5f1ea 100%)',
                }}
              />
            </motion.div>
          </div>
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
