import { motion } from 'motion/react'
import { ArrowLeft, Target, Users, Lightbulb, Sparkles } from 'lucide-react'

interface Props {
  onBack: () => void
}

export default function SoundscapeCaseStudy({ onBack }: Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f1ea', fontFamily: "'Montserrat', sans-serif" }}>
      {/* Back button */}
      <motion.button
        className="fixed top-24 left-6 z-40 bg-white rounded-full shadow-sm px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer border-none"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.97 }}
      >
        <ArrowLeft size={16} />
        Tillbaka
      </motion.button>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}
          >
            UX Research & Tjänstedesign
          </span>
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Comforter', cursive" }}>
            Soundscape Sleep
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            En ljudapp som hjälper användare att koppla av, sova och fokusera genom anpassade
            ljudmiljöer. Ett omfattande UX-projekt från research till slutprodukt.
          </p>
        </motion.div>

        {/* Hero-bild */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src="/soundscape-hero.jpg" alt="Soundscape Sleep" className="w-full h-auto" />
        </motion.div>

        {/* Project info cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: 'Roll', value: 'UX-designer' },
            { label: 'Team', value: '5 UX-designstudenter' },
            { label: 'Tidsperiod', value: 'Vecka 49 2024 – Vecka 10 2025' },
            { label: 'Verktyg', value: 'Figma, Användartester' },
            { label: 'Typ', value: 'UX-designprojekt genom skolan' },
            { label: 'Företag', value: 'Soundscape' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">{item.label}</p>
              <p className="text-gray-800 font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-20">
        {/* Problem & Målgrupp */}
        <motion.section
          className="bg-white rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
              <Target size={20} style={{ color: '#7c3aed' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Uppdragsbeskrivning & Målgrupp</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ backgroundColor: '#f5f3ff' }}>
              <h4 className="font-bold mb-3" style={{ color: '#7c3aed' }}>Uppdraget</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Förstärka Soundscapes värdeproposition, öka användarretention och göra appen till en
                naturlig del av användarnas vardag – inte bara ett sporadiskt verktyg.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: '#f5f3ff' }}>
              <h4 className="font-bold mb-3" style={{ color: '#7c3aed' }}>Målgrupp</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Primär</p>
                  <p className="text-gray-700 text-sm">Unga vuxna 25–35 år med sömnsvårigheter</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Sekundär</p>
                  <p className="text-gray-700 text-sm">Professionella som behöver fokusera under dagen</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          className="rounded-2xl p-8 lg:p-12"
          style={{ backgroundColor: '#f5f1ea' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
              <Users size={20} style={{ color: '#7c3aed' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Research & Datainsamling</h2>
          </div>
          <div className="bg-white rounded-xl p-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              {[
                { number: '47', label: 'Enkäter genomförda' },
                { number: '12', label: 'Djupintervjuer' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <p className="text-6xl font-bold mb-2" style={{ color: '#7c3aed' }}>{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Nyckelinsikter */}
        <motion.section
          className="bg-white rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
              <Lightbulb size={20} style={{ color: '#7c3aed' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Nyckelinsikter</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Genom vår research identifierade vi fem kritiska insikter som styrde designen...
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: '01', title: 'Enkelhet framför komplexitet', text: 'Användarna vill ha en sömlös, intuitiv upplevelse utan inlärningskurva.' },
              { n: '02', title: 'Personalisering skapar värde', text: 'Anpassade upplevelser ökar engagemang och känslan av ägarskap.' },
              { n: '03', title: 'Visualisering av sömndata', text: 'Tydlig visuell feedback hjälper användare att förstå sina sömnmönster.' },
              { n: '04', title: 'Behov av mental nedvarvning', text: 'Verktyg för att aktivt släppa stress och oro inför sömnen.' },
              { n: '05', title: 'Morgonstund har guldglädje', text: 'En positiv morgonrutin sätter tonen för hela dagen.' },
            ].map((insight, i) => (
              <motion.div
                key={insight.n}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#f5f3ff' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#7c3aed' }}>{insight.n}</p>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{insight.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{insight.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Designlösningar */}
        <motion.section
          className="rounded-2xl p-8 lg:p-12"
          style={{ backgroundColor: '#f5f1ea' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ede9fe' }}>
              <Sparkles size={20} style={{ color: '#7c3aed' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Designlösningar</h2>
          </div>
          <div className="space-y-4">
            {[
              { n: 1, title: 'Uppmuntrande Notiser', desc: 'Personliga, vältimsade notiser som guidar användaren mot bättre sömnvanor.' },
              { n: 2, title: 'Sänka Visuellt Tempo', desc: 'Kontrast mellan Focus mode och Sleep mode – mjukare färger och rörelser på kvällen.' },
              { n: 3, title: 'Journal', desc: 'Dagboksfunktion: "Vad tänker du på?" – hjälper användaren att tömma huvudet.' },
              { n: 4, title: 'Sovkollen', desc: 'Självskattning av sömnkvalitet med emoji-feedback för att spåra mönster.' },
              { n: 5, title: 'Morgonkompis', desc: 'AI-baserat personligt morgonmeddelande som startar dagen på rätt sätt.' },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                className="bg-white rounded-xl p-6 flex gap-4 items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}
                >
                  {s.n}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Premium', 'Delightful', 'Vetenskapligt'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Användningscykel */}
        <motion.section
          className="bg-white rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Användningscykel</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { emoji: '🌙', n: '1', title: 'Varva ner', items: ['Sänka visuellt tempo', 'Uppmuntrande notiser', 'Journal'] },
              { emoji: '😴', n: '2', title: 'Sömn', items: ['Sänka visuellt tempo', 'Streamer ljud'] },
              { emoji: '☀️', n: '3', title: 'Vakna upp', items: ['Sovkollen', 'Morgonkompis', 'Sänka visuellt tempo'] },
            ].map((c, i) => (
              <motion.div
                key={c.n}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#f5f3ff' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-3 block">{c.emoji}</span>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#7c3aed' }}>{c.n}.</p>
                <h4 className="font-bold text-gray-900 mb-3">{c.title}</h4>
                <ul className="space-y-1">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Scrolling marquee */}
          <div className="overflow-hidden rounded-lg py-3" style={{ backgroundColor: '#f5f3ff' }}>
            <motion.div
              className="whitespace-nowrap font-medium text-sm"
              style={{ color: '#7c3aed' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              {Array(6).fill('✦ Kontinuerlig cykel varje dag ').join('')}
            </motion.div>
          </div>
        </motion.section>

        {/* Slutprodukt – Morgonkompis */}
        <motion.section
          className="rounded-2xl p-8 lg:p-16 text-white"
          style={{ background: 'linear-gradient(135deg, #1e1035 0%, #2d1b69 50%, #1e1035 100%)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Slutprodukt – Morgonkompis</h2>
          <p className="text-purple-300 mb-12 text-sm">Det personliga AI-morgonmeddelandet som startar dagen rätt.</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* iPhone mockup */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ y: -8, rotate: 1 }}
            >
              <div
                className="relative"
                style={{
                  width: '260px',
                  background: '#0a0a0a',
                  borderRadius: '44px',
                  padding: '12px',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Knappar vänster */}
                <div className="absolute left-[-3px] top-[100px] w-[3px] h-8 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-[-3px] top-[148px] w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                <div className="absolute left-[-3px] top-[200px] w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                {/* Knapp höger */}
                <div className="absolute right-[-3px] top-[140px] w-[3px] h-14 bg-gray-700 rounded-r-sm" />

                {/* Skärm */}
                <div style={{ borderRadius: '34px', overflow: 'hidden', background: '#000' }}>
                  {/* Dynamic Island */}
                  <div className="flex justify-center pt-3 pb-1 bg-black">
                    <div style={{ width: '90px', height: '28px', background: '#000', borderRadius: '20px', border: '1px solid #222' }} />
                  </div>
                  {/* App-skärm */}
                  <img
                    src="/soundscape-morgonkompis.jpg"
                    alt="Morgonkompis skärm"
                    className="w-full"
                    style={{ display: 'block' }}
                  />
                  {/* Home indicator */}
                  <div className="flex justify-center py-2 bg-[#0d0d0d]">
                    <div style={{ width: '120px', height: '4px', background: '#444', borderRadius: '4px' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: '✦', text: 'Personlig AI-hälsning: "God morgon Alex!"' },
                { icon: '✦', text: 'Schemaintegration: dagens agenda direkt i appen' },
                { icon: '✦', text: 'Inspirerande dagscitat' },
                { icon: '✦', text: 'Röstinteraktion med snabbförslag' },
                { icon: '✦', text: 'Premium dark mode design med clean UI' },
              ].map((f, i) => (
                <motion.div
                  key={f.text}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span className="text-purple-400 font-bold flex-shrink-0 mt-0.5">{f.icon}</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projektets värde */}
        <motion.section
          className="bg-white rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Projektets värde</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ backgroundColor: '#f5f3ff' }}>
              <h4 className="font-bold mb-4" style={{ color: '#7c3aed' }}>Vad jag lärde mig</h4>
              <ul className="space-y-2">
                {['Djup förståelse för sömnpsykologi', 'Tjänstedesign som helhetsperspektiv', 'Att designa för känslomässiga behov', 'Iterativ process och användarvalidering', 'Komplexiteten i AI-integration i design'].map((l) => (
                  <li key={l} className="text-sm text-gray-700 flex gap-2"><span style={{ color: '#7c3aed' }}>•</span>{l}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: '#f5f3ff' }}>
              <h4 className="font-bold mb-4" style={{ color: '#7c3aed' }}>Resultat</h4>
              <ul className="space-y-2">
                {['Sammanhängande tjänstedesign från kväll till morgon', 'Tydlig värdepropå för Soundscape', 'Stärkt användarretention genom daglig loop', 'Differentiering via Morgonkompis-feature', 'Validerat med riktiga användare'].map((r) => (
                  <li key={r} className="text-sm text-gray-700 flex gap-2"><span style={{ color: '#7c3aed' }}>•</span>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            className="px-8 py-4 rounded-xl font-semibold text-white cursor-pointer border-none"
            style={{ backgroundColor: '#7c3aed' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
          >
            Se fler projekt
          </motion.button>
        </div>
      </div>
    </div>
  )
}
