import { motion } from 'motion/react'
import { ArrowLeft, Check, ChevronRight } from 'lucide-react'

interface Props {
  onBack: () => void
}

export default function BalanzaCaseStudy({ onBack }: Props) {
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
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            UX/UI Design • Mobilapp • Studentprojekt
          </span>
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Comforter', cursive" }}>
            Balanza
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            En sparapp för studenter som använder gamification för att göra sparande roligt och
            engagerande. Projektet fokuserade på att hjälpa studenter få bättre kontroll över sin
            ekonomi genom spelifiering och visuell feedback.
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/balanza-hero.jpg" alt="Balanza" className="w-full h-auto" />
        </motion.div>

        {/* Project info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: 'Roll', value: 'UX/UI Designer, UX Researcher, Interaktionsdesigner' },
            { label: 'Team', value: 'Studentprojekt, 5 UX Designers, 2 Java-programmerare' },
            { label: 'Verktyg', value: 'Figma, Miro, Google Forms' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">{item.label}</p>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-20">
        {/* 01 Problem */}
        <Section number="01" title="Problemformulering" accentColor="#f97316">
          <p className="text-gray-600 leading-relaxed mb-6">
            Studenter idag har svårt att få ekonomin att gå runt. Det vill vi ändra på genom att
            hjälpa studenterna att se över sina utgifter och spara pengar genom gamification.
          </p>
          <div className="border-l-4 border-orange-400 bg-gray-50 pl-6 py-4 rounded-r-xl">
            <p className="text-gray-700 italic leading-relaxed">
              "Hur kan vi designa en engagerande mobilapp som hjälper studenter att få bättre
              kontroll över sin ekonomi och spara pengar på ett roligt och motiverande sätt?"
            </p>
          </div>
        </Section>

        {/* 02 Research */}
        <Section number="02" title="Research" accentColor="#f97316">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { color: 'from-blue-50 to-blue-100', border: 'border-blue-200', title: 'Användarintervjuer', detail: '10 djupintervjuer', insight: 'Saknade motivation att spara' },
              { color: 'from-purple-50 to-purple-100', border: 'border-purple-200', title: 'Enkäter', detail: 'Kvantitativ data', insight: 'Behov av enklare verktyg' },
              { color: 'from-green-50 to-green-100', border: 'border-green-200', title: 'A/B Testning', detail: 'Visuella belöningar vann', insight: 'Gamification ökar engagemang' },
              { color: 'from-orange-50 to-orange-100', border: 'border-orange-200', title: 'Konkurrentanalys', detail: 'För komplexa lösningar', insight: 'Vi ville göra det enklare' },
            ].map((r) => (
              <div key={r.title} className={`bg-gradient-to-br ${r.color} border ${r.border} rounded-xl p-6`}>
                <h4 className="font-bold text-gray-900 mb-1">{r.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{r.detail}</p>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Insikt: {r.insight}</p>
              </div>
            ))}
          </div>

        </Section>

        {/* 03 Ideation */}
        <Section number="03" title="Ideation" accentColor="#f97316">
          <div className="space-y-6 mb-8">
            {[
              { n: 1, title: 'Gamification först', text: 'Sparande ska kännas som ett spel – med belöningar, achievements och progression.' },
              { n: 2, title: 'Visuell enkelhet', text: 'Tydlig, färgglad och lättförståelig design som inte överväldigar.' },
              { n: 3, title: 'Positiv motivation', text: 'Fira framsteg och positiva vanor – straffa inte dåliga val.' },
            ].map((p) => (
              <div key={p.n} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {p.n}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4 flex-wrap justify-center gap-y-4">
              {['Sketching & Ideation', 'Lo-fi Wireframes', 'Hi-fi Prototyp & Testning'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="bg-white rounded-lg px-4 py-3 shadow-sm text-sm font-medium text-gray-800">{step}</div>
                  {i < 2 && <ChevronRight size={16} className="text-gray-400" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
            <p className="font-bold text-gray-900 mb-2">💡 Utmaning: Samarbete med Java-programmerare</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Under projektet samarbetade vi agilt med Java-programmerare. En viktig lärdom var att
              programmering tar längre tid än design – att lära sig bromsa designprocessen och synka
              med teamet var avgörande för projektets framgång.
            </p>
          </div>
        </Section>

        {/* 04 Lösning */}
        <Section number="04" title="Lösning – Multiplatform Design" accentColor="#f97316">
          <p className="text-gray-600 leading-relaxed mb-8">
            Vi designade Balanza för tre plattformar: Desktop Dashboard, Mobile App och Apple Watch –
            en sammanhängande upplevelse oavsett enhet.
          </p>

          {/* Desktop */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">Desktop Dashboard</p>
            <motion.img
              src="/balanza-desktop.jpg"
              alt="Balanza Desktop"
              className="w-full h-auto rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Mobile + Watch sida vid sida */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">Mobile App</p>
              <img src="/balanza-mobile.jpg" alt="Balanza Mobile" className="w-full h-auto rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">Apple Watch</p>
              <img src="/balanza-watch.jpg" alt="Balanza Apple Watch" className="w-full h-auto rounded-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Nyckelfunktioner</h4>
              {['Automatisk kategorisering av utgifter', 'Realtids budget-tracking', 'Personliga sparmål', 'Notiser och påminnelser'].map((f) => (
                <div key={f} className="flex items-center gap-2 mb-2">
                  <Check size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">🎮 Gamification-element</h4>
              {['XP-poäng för sparade mål', 'Achievement badges', 'Dagliga utmaningar', 'Leaderboard med vänner'].map((f) => (
                <div key={f} className="flex items-center gap-2 mb-2">
                  <Check size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color palette */}
          <div className="bg-white rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-4">Färgpalett</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                { name: 'Sky Blue', hex: '#F1FAFF', dark: false },
                { name: 'Night Blue', hex: '#12263A', dark: true },
                { name: 'Neutral', hex: '#FFFDF6', dark: false },
                { name: 'Success', hex: '#DAFAD9', dark: false },
                { name: 'Error', hex: '#FEB8B8', dark: false },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-1">
                  <div
                    className="w-14 h-14 rounded-lg border border-gray-200"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs text-gray-600">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 05 Resultat */}
        <Section number="05" title="Resultat" accentColor="#f97316">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-800 mb-4">Positiv feedback</h4>
              {['Visuellt tilltalande och lätt att förstå', 'Gamification-element motiverade användarna', 'Enkel och intuitiv navigation'].map((f) => (
                <div key={f} className="flex items-start gap-2 mb-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-sm text-green-800">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h4 className="font-bold text-orange-800 mb-4">Förbättringsområden</h4>
              {['Fler anpassningsmöjligheter', 'Möjlighet att dela framsteg med vänner', 'Fler tips och råd om privatekonomi'].map((f) => (
                <div key={f} className="flex items-start gap-2 mb-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <span className="text-sm text-orange-800">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
            <h4 className="font-bold text-white text-lg mb-6">Vad jag lärde mig</h4>
            <div className="space-y-3">
              {[
                'Research är grunden – utan insikter ingen bra design',
                'Iterativ design fungerar: testa tidigt, testa ofta',
                'UX/UI-kombination var en personlig game changer',
                'Enkelhet är faktiskt svårt att uppnå',
                'Gamification kräver balans – för mycket blir överväldigande',
              ].map((l) => (
                <div key={l} className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">→</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <motion.div
          className="rounded-2xl p-8 lg:p-12 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Vill du veta mer?</h3>
          <p className="mb-6 text-white/80">Kontakta mig för att diskutera projektet eller potentiella samarbeten.</p>
          <motion.button
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold cursor-pointer border-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
          >
            Kontakta mig
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

function Section({ number, title, children, accentColor }: {
  number: string
  title: string
  children: React.ReactNode
  accentColor: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: accentColor }}>
          {number}
        </span>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}
