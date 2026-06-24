import { motion } from 'motion/react'
import { ArrowLeft, Gamepad2 } from 'lucide-react'

interface Props {
  onBack: () => void
}

export default function SpelinsiktCaseStudy({ onBack }: Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f1ea', fontFamily: "'Montserrat', sans-serif" }}>
      <motion.button
        className="fixed top-24 left-6 z-40 bg-white rounded-lg shadow-sm px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer border-none hover:shadow-md transition-shadow"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <ArrowLeft size={16} />
        Tillbaka till projekt
      </motion.button>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1 bg-white text-gray-700 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-gray-200">
            Digital tjänst • Spelansvar • UX/UI Design
          </span>
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Comforter', cursive" }}>
            Spelinsikt
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            [Lägg till en kort introduktion om Spelinsikt-projektet här. Beskriv syftet, målgruppen och vad
            projektet löser för problem.]
          </p>
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl overflow-hidden flex items-center justify-center min-h-[280px]"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <Gamepad2 size={64} strokeWidth={1.5} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-400 text-sm">Projektbild – placeholder</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { label: 'Roll', value: '[Din roll i projektet]' },
            { label: 'Team', value: '[Teamets sammansättning]' },
            { label: 'Verktyg', value: '[Figma, Miro, etc.]' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-white rounded-xl p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">{item.label}</p>
              <p className="text-gray-500 font-medium text-sm italic">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-16">
        {/* 01 Problem */}
        <Section number="01" title="Problemformulering">
          <div className="bg-white rounded-xl p-6">
            <p className="text-gray-500 italic text-sm leading-relaxed">
              [Beskriv problemet som projektet adresserar. Vad är det för utmaning? Varför är det viktigt?]
            </p>
          </div>
        </Section>

        {/* 02 Research */}
        <Section number="02" title="Research">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Användarintervjuer</h4>
              <p className="text-gray-500 text-sm italic">[Antal intervjuer och nyckelinsikter]</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Konkurrentanalys</h4>
              <p className="text-gray-500 text-sm italic">[Vad visade konkurrentanalysen?]</p>
            </div>
          </div>
        </Section>

        {/* 03 Design */}
        <Section number="03" title="Design">
          <div className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[200px]">
            <p className="text-gray-400 text-sm">Design-skärmar – bildplatshållare</p>
          </div>
        </Section>

        {/* 04 Lösning */}
        <Section number="04" title="Lösning">
          <div className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[200px]">
            <p className="text-gray-400 text-sm">Lösningens design – bildplatshållare</p>
          </div>
        </Section>

        {/* 05 Features */}
        <Section number="05" title="Nyckelfunktioner">
          <div className="space-y-4">
            {[
              { border: 'border-blue-400', color: 'text-blue-700', title: 'Funktion 1', text: '[Beskriv nyckelfunktion 1]' },
              { border: 'border-purple-400', color: 'text-purple-700', title: 'Funktion 2', text: '[Beskriv nyckelfunktion 2]' },
              { border: 'border-green-400', color: 'text-green-700', title: 'Funktion 3', text: '[Beskriv nyckelfunktion 3]' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5">
                <h4 className={`font-bold ${f.color} mb-1`}>{f.title}</h4>
                <p className="text-gray-500 text-sm italic">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 06 Resultat */}
        <Section number="06" title="Resultat">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { color: 'blue', label: 'Metrik 1', value: '[X]%' },
              { color: 'purple', label: 'Metrik 2', value: '[X]%' },
              { color: 'green', label: 'Metrik 3', value: '[X]%' },
            ].map((m) => (
              <div
                key={m.label}
                className={`bg-${m.color}-50 border border-${m.color}-200 rounded-xl p-6 text-center`}
              >
                <p className={`text-4xl font-bold text-${m.color}-600 mb-2`}>{m.value}</p>
                <p className={`text-${m.color}-700 text-sm font-medium`}>{m.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Reflektioner */}
        <motion.div
          className="rounded-2xl p-8 lg:p-12"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Reflektioner & Lärdomar</h3>
          <p className="text-gray-500 italic leading-relaxed text-sm">
            [Reflektera över vad du lärde dig av projektet. Vad fungerade bra? Vad skulle du göra
            annorlunda? Hur har projektet påverkat din förståelse för UX-design?]
          </p>
        </motion.div>

        <div className="text-center">
          <motion.button
            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold cursor-pointer border-none"
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

function Section({ number, title, children }: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-500">{number}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}
