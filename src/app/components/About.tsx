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

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Två textblock + bild */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">

          {/* Vänster: båda textstyckena */}
          <div className="flex flex-col h-full gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-3 font-medium">
                En kort introduktion
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Från Försvarsmakten till design
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Hej!</p>
                <p>
                  Jag heter Sebastian och är en UX-designer i Stockholm. Efter 13 år inom
                  Försvarsmakten har jag sadlat om mot en ny bana i livet – UX design.
                </p>
                <p>
                  Jag älskar hur yrket utvecklas och jag känner verkligen hur jag kan växa inom det.
                  Som person är jag analytisk och älskar att dyka ner i detaljerna för att verkligen
                  förstå helheten – en egenskap jag absolut har min tidigare karriär att tacka för.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Bortom designarbetet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Utanför skärmen hittar du mig med ett glas vin i handen — alltid nyfiken på nya
                smaker och upplevelser. Det är en påminnelse om att de bästa upplevelserna, digitala
                som fysiska, skapas i detaljerna.
              </p>
            </motion.div>
          </div>

          {/* Höger: bild – linjerar undertill med texten */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
          >
            <img
              src="/Sebastianvin.jpg"
              alt="Sebastian med ett glas vin"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Skill cards – sammanfattning */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-[#f5f1ea] p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <skill.icon size={18} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{skill.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
