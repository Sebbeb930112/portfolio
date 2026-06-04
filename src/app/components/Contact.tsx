import { motion } from 'motion/react'
import { Mail } from 'lucide-react'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function AnimatedButton({
  children,
  href,
  variant,
  target,
}: {
  children: React.ReactNode
  href: string
  variant: 'dark' | 'outline'
  target?: string
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`relative overflow-hidden px-8 py-4 rounded-lg font-medium cursor-pointer flex items-center gap-2 text-base no-underline ${
        variant === 'dark' ? 'bg-gray-900 text-white' : 'text-gray-900'
      }`}
      style={{
        border: variant === 'outline' ? '1px solid #111827' : 'none',
        textDecoration: 'none',
      }}
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
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Kontakt →</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Letar du efter en UX Designer för ditt nästa projekt? Eller vill du bara diskutera
            design och användarupplevelser? Jag är alltid öppen för nya möjligheter och samarbeten.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#f5f1ea] rounded-2xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kontakta mig</h3>
            <p className="text-gray-500 mb-8">Jag svarar vanligtvis inom 24 timmar på vardagar.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <AnimatedButton href="mailto:Sebbeb93@gmail.com" variant="dark">
                <Mail size={18} />
                Skicka mail
              </AnimatedButton>
              <AnimatedButton
                href="https://www.linkedin.com/in/sebastian-blomqvist"
                variant="outline"
                target="_blank"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </AnimatedButton>
            </div>

            <motion.a
              href="mailto:Sebbeb93@gmail.com"
              className="text-gray-500 text-sm"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.05 }}
            >
              Sebbeb93@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
