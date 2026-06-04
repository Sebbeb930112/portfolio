import { motion } from 'motion/react'
import { Shield, Search, PenTool, Users } from 'lucide-react'

const skills = [
  {
    icon: Shield,
    title: 'Militär disciplin',
    text: '13 år i Försvarsmakten formar hur jag tänker strukturerat och löser problem under press.',
  },
  {
    icon: Search,
    title: 'Research-driven',
    text: 'Alltid insikter och data före lösning — jag förstår problemet innan jag designar svaret.',
  },
  {
    icon: PenTool,
    title: 'Figma & Miro',
    text: 'Mina primära verktyg för allt från lo-fi skisser till hi-fi prototyper och workshops.',
  },
  {
    icon: Users,
    title: 'Agilt samarbete',
    text: 'Van att jobba i tvärfunktionella team med utvecklare, PMs och andra designers.',
  },
]

const easeExpo = [0.16, 1, 0.3, 1] as const

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Två textblock + bild */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">

          {/* Vänster */}
          <div className="flex flex-col h-full gap-6">

            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm text-gray-500 uppercase tracking-widest mb-3 font-medium"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                En kort introduktion
              </motion.p>

              <div style={{ overflow: 'hidden' }}>
                <motion.h2
                  className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: easeExpo, delay: 0.1 }}
                >
                  Från Försvarsmakten till design
                </motion.h2>
              </div>

              <div className="space-y-3 text-gray-600 leading-relaxed">
                {['Hej!',
                  'Jag heter Sebastian och är en UX-designer i Stockholm. Efter 13 år inom Försvarsmakten har jag sadlat om mot en ny bana i livet – UX design.',
                  'Jag älskar hur yrket utvecklas och jag känner verkligen hur jag kan växa inom det. Som person är jag analytisk och älskar att dyka ner i detaljerna för att verkligen förstå helheten – en egenskap jag absolut har min tidigare karriär att tacka för.'
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div style={{ overflow: 'hidden' }}>
                <motion.h2
                  className="text-xl lg:text-2xl font-medium text-gray-500 mb-4 leading-tight"
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: easeExpo, delay: 0.25 }}
                >
                  Bortom designarbetet
                </motion.h2>
              </div>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              >
                Utanför skärmen hittar du mig med ett glas vin i handen — alltid nyfiken på nya
                smaker och upplevelser. Det är en påminnelse om att de bästa upplevelserna, digitala
                som fysiska, skapas i detaljerna.
              </motion.p>
            </motion.div>
          </div>

          {/* Höger: bild */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl h-full"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeExpo, delay: 0.1 }}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
          >
            <img
              src="/Sebastianvin.jpg"
              alt="Sebastian med ett glas vin"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-[#f5f1ea] p-6 rounded-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easeExpo, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.04, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            >
              <motion.div
                className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: -8, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <skill.icon size={18} className="text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{skill.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
