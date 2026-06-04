import { motion } from 'motion/react'
import { ArrowLeft, ShoppingCart, Users, MapPin, ChevronsDown } from 'lucide-react'

interface Props {
  onBack: () => void
  onContact: () => void
}

export default function LordOfTheRingsShowcase({ onBack, onContact }: Props) {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(180deg, #1a1410 0%, #2a1f1a 50%, #1a1410 100%)',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Back button */}
      <motion.button
        className="fixed top-24 left-6 z-40 flex items-center gap-2 text-sm font-medium text-white cursor-pointer border-none px-4 py-2 rounded-lg"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ArrowLeft size={16} />
        Tillbaka
      </motion.button>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}
          >
            UI Design • Fanpage • Skolprojekt
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Lord of the Rings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            En visuell hyllning till Tolkiens mästerverk – designad som en interaktiv fanpage där
            användare kan köpa böckerna, utforska karaktärer och navigera genom Midgård med en
            interaktiv karta.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: '24h', label: 'Tidsåtgång' },
            { value: '1', label: 'Scrollbar sida' },
            { value: 'Figma', label: 'Verktyg' },
            { value: 'Solo', label: 'Individuellt' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-5 text-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-16">
        {/* Konceptet */}
        <motion.section
          className="rounded-2xl p-8 lg:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Konceptet</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, title: 'Köp böcker', desc: 'En ren e-handel-upplevelse med Tolkiens verk, designad med dark mode och guldaccenter.' },
              { icon: Users, title: 'Karaktärer', desc: 'Utforska de viktigaste karaktärerna från trilogin med detaljerade presentationer.' },
              { icon: MapPin, title: 'Interaktiv karta', desc: 'Följ resan genom Midgård med en detaljerad, klickbar karta över världen.' },
            ].map((f) => (
              <div key={f.title} className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(245,158,11,0.2)' }}
                >
                  <f.icon size={22} style={{ color: '#f59e0b' }} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Landing Page showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#f59e0b' }}>
            Design Showcase
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">Landing Page</h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Hero-sektion med episk känsla och direkt tillgång till bokköp. Dark mode med
            guldaccenter skapar en filmisk, dramatisk atmosfär som fångar Tolkiens värld.
          </p>

          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <div
              className="max-h-[800px] overflow-y-auto"
              style={{ scrollbarColor: '#f59e0b #1a1410' }}
            >
              <div
                className="flex items-center justify-center min-h-[600px]"
                style={{ background: 'linear-gradient(135deg, #0a0805 0%, #1a1208 50%, #0a0805 100%)' }}
              >
                <div className="text-center px-8">
                  <p className="text-6xl mb-6">💍</p>
                  <p className="text-white/30 font-light tracking-widest text-sm uppercase">
                    LOTR Landing Page – bildplatshållare
                  </p>
                  <p className="text-white/20 text-xs mt-2">
                    (Ladda upp Figma-design för att visa här)
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <p className="text-xs" style={{ color: '#f59e0b' }}>Scrolla för att se mer</p>
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ChevronsDown size={16} style={{ color: '#f59e0b' }} />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Design decisions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Designbeslut</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Dark Mode med guldaccenter', desc: 'Skapar en episk, filmisk känsla som speglar Tolkiens värld.' },
              { title: 'Stor typografi', desc: 'Tydlig hierarki och dramatisk effekt som leder blicken.' },
              { title: 'Visuell storytelling', desc: 'Bilder i centrum med minimal text – låter konsten tala.' },
              { title: 'Clean layout', desc: 'Luftig och organiserad design trots mörkt tema.' },
            ].map((d, i) => (
              <motion.div
                key={d.title}
                className="rounded-xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(234,88,12,0.1) 100%)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h4 className="font-bold text-white mb-2">{d.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.section
          className="rounded-2xl p-8 lg:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Vill du se mer?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Detta var en snabb övning i visuell design och UI – gjord på 24 timmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 rounded-xl font-semibold cursor-pointer border-none text-white"
              style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContact}
            >
              Kontakta mig
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-xl font-semibold cursor-pointer text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              Se fler projekt
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
