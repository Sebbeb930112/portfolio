import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'

interface Props {
  onBack: () => void
}

const GREEN = '#2D6A4F'
const GREEN_LIGHT = '#edf7f2'
const DARK = '#1a2e25'

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: GREEN }}>{number}</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}

export default function CirclaCaseStudy({ onBack }: Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f1ea', fontFamily: "'Montserrat', sans-serif" }}>

      {/* Back button */}
      <motion.button
        className="fixed top-24 left-6 z-40 bg-white rounded-lg shadow-sm px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer border-none hover:shadow-md transition-shadow"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <ArrowLeft size={16} />
        Tillbaka till projekt
      </motion.button>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ backgroundColor: GREEN_LIGHT, color: GREEN }}
          >
            UI/UX Design • Landningssida • Konvertering • LIA
          </span>
          <h1
            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Comforter', cursive" }}
          >
            Circla
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
            En dödsbo-landningssida som inte konverterade. Kunden kom till oss på Solution Group
            för hjälp — och min design är idag live på circla.se.
          </p>

          {/* Live-badge */}
          <motion.a
            href="https://www.circla.se/dodsbo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: GREEN, textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            Live på circla.se
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        {/* Full-page design screenshot */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-gray-300 text-xs text-center">
              circla.se/dodsbo
            </div>
          </div>
          <div className="max-h-[700px] overflow-y-auto">
            <img
              src="/circla-design-hq.png"
              alt="Circla landningssida – design"
              className="w-full"
            />
          </div>
          <div className="bg-gray-800 px-4 py-2 text-center">
            <span className="text-gray-400 text-xs">Scrolla för att se hela sidan</span>
          </div>
        </motion.div>

        {/* Info cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: 'Roll', value: 'UI/UX Designer' },
            { label: 'Kund', value: 'Circla — del av Sortera.se' },
            { label: 'Verktyg', value: 'Figma' },
            { label: 'Resultat', value: 'Live på circla.se' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">{item.label}</p>
              <p className="text-gray-800 font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-20">

        {/* 01 Problemet */}
        <Section number="01" title="Problemet">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📉', title: 'Dålig konvertering', text: 'Landningssidan drev trafik men lyckades inte omvandla besökare till kunder.' },
              { icon: '📝', title: 'SEO-tung text', text: 'Sidan var fylld med svårläst, optimerad text för sökmotorer — inte för människor.' },
              { icon: '🎨', title: 'Varumärkesdissonans', text: 'Designen speglade inte Circlas professionella identitet eller skapade förtroende.' },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-white rounded-2xl p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h4 className="font-bold text-gray-900 mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: DARK }}>
            <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#6ee7b7' }}>Uppdraget</p>
            <p className="text-white text-lg leading-relaxed">
              Designa om Circlas dödsbo-landningssida från grunden — med fokus på tydlig
              kommunikation, fler konverteringspunkter och ett varumärkesuttryck som bygger
              förtroende hos en känslig målgrupp.
            </p>
          </div>
        </Section>

        {/* 02 Designbeslut */}
        <Section number="02" title="Designbeslut">
          <div className="space-y-3 mb-8">
            {[
              { before: 'SEO-tung, svårläst brödtext dominerade hela sidan', after: 'Tydlig rubrikhierarki och kortfattade budskap — enkelt att skanna' },
              { before: 'Få och otydliga CTA-knappar', after: 'CTAs på strategiska punkter längs hela scrollflödet' },
              { before: 'Design som inte matchade Circlas varumärke', after: 'Grön färgpalett, professionella bilder och konsekvent ton' },
              { before: 'Ingen tydlig förtroendebyggnad', after: 'Trust-element: recensioner, certifieringar, 15+ år erfarenhet' },
              { before: 'Oklart vad Circla faktiskt erbjuder', after: 'Tydliga sektioner: Värdering, Tömning, Städning — med bilder' },
            ].map((row, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-white p-5 flex items-start gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0">✕</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{row.before}</p>
                </div>
                <div className="p-5 flex items-start gap-3" style={{ backgroundColor: GREEN_LIGHT }}>
                  <span className="font-bold flex-shrink-0" style={{ color: GREEN }}>✓</span>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{row.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 03 Resultatet */}
        <Section number="03" title="Resultatet – Live">
          <p className="text-gray-600 leading-relaxed mb-8">
            Designen godkändes av Circla och är idag live på circla.se/dodsbo. Sidan är byggd med
            stark konverteringsfokus, tydliga trust-element och ett visuellt språk som speglar
            Circlas professionella varumärke.
          </p>

          {/* Scrollbar browser mockup */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <a
                href="https://www.circla.se/dodsbo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white rounded-md px-3 py-1.5 text-gray-500 text-xs flex items-center justify-between border border-gray-200"
                style={{ textDecoration: 'none' }}
              >
                <span>circla.se/dodsbo</span>
                <ExternalLink size={11} className="text-gray-400" />
              </a>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <img
                src="/circla-design.png"
                alt="Circla live design"
                className="w-full"
              />
            </div>
          </div>

          {/* Key features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'Dual CTA i hero', text: 'Begär prisförslag + Hur fungerar det — två vägar in direkt från start.' },
              { icon: '⭐', title: 'Social proof', text: 'Kundrecensioner tidigt i flödet för att bygga förtroende.' },
              { icon: '🗺️', title: 'Geografisk relevans', text: 'Karta som visar täckningsområdet — Stockholm & Mälardalen.' },
              { icon: '📋', title: 'Steg-för-steg', text: 'Tydligt "Så här går det till" reducerar osäkerhet i en känslig situation.' },
              { icon: '🏆', title: 'Trust-sektion', text: 'ISO 14001, kvalitetscertifierad, 100% försäkrad, 15+ år erfarenhet.' },
              { icon: '❓', title: 'FAQ-sektion', text: 'Vanliga frågor besvarade direkt på sidan — minskar supportbehov.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-white rounded-xl p-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h5 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h5>
                <p className="text-gray-500 text-xs leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Avslutning */}
        <motion.div
          className="rounded-2xl p-10 text-white text-center"
          style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${GREEN} 100%)` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Resultatet</p>
          <h3 className="text-2xl font-bold mb-4">Min design är live — på riktigt</h3>
          <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-8">
            Det är en sak att designa i Figma. En annan att se sin design live på en stor kunds
            webbplats. Det här projektet lärde mig att konvertering handlar om förtroende —
            och förtroende byggs i varje detalj.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.circla.se/dodsbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
              style={{ backgroundColor: 'white', color: GREEN, textDecoration: 'none' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Se live-sidan
              <ArrowUpRight size={14} />
            </motion.a>
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white cursor-pointer border-none"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              Se fler projekt
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
