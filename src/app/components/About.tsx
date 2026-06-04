import { motion } from 'motion/react'
import { Users, Lightbulb, Zap, Heart } from 'lucide-react'

const skills = [
  {
    icon: Users,
    title: 'Användarresearch',
    text: 'Djupa insikter genom intervjuer, observationer och datanalys',
  },
  {
    icon: Lightbulb,
    title: 'Konceptutveckling',
    text: 'Kreativa lösningar baserade på användarens behov',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    text: 'Från low-fi skisser till high-fi interaktiva prototyper',
  },
  {
    icon: Heart,
    title: 'Användartester',
    text: 'Kontinuerlig validering och optimering av upplevelser',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro text */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-medium">
            En kort introduktion
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Från Försvarsmakten till design
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>Hej!</p>
            <p>
              Jag heter Sebastian och är en UX-designer i Stockholm. Efter 13 år inom Försvarsmakten
              har jag sadlat om mot en ny bana i livet – UX design.
            </p>
            <p>
              Jag älskar hur yrket utvecklas och jag känner verkligen hur jag kan växa inom det. Men
              framför allt för de problem som bra design kan lösa för människor i vardagen. Som person
              är jag analytisk och älskar att dyka ner i detaljerna för att verkligen förstå helheten
              – en egenskap jag absolut har min tidigare karriär att tacka för.
            </p>
          </div>
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-[#f5f1ea] p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <skill.icon size={22} className="text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bortom designarbetet */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bortom designarbetet
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Kreativitet och problemlösning – två kvaliteter som definierar mig både som UX
                Designer och som person. De driver mig att hitta genomtänkta lösningar som verkligen
                fungerar för användarna.
              </p>
              <p>
                Utanför den digitala världen använder jag min kreativitet så gott det går genom mat.
                Jag älskar att utforska nya smaker och tekniker, men framförallt konsten att
                komponera och lägga upp mat – att skapa något som tilltalar både ögat och
                smaklökarna. Det är en hobby som ständigt påminner mig om att design handlar om
                upplevelsen i sin helhet.
              </p>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ aspectRatio: '3/4' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
          >
            <img
              src="/Sebastianvin.jpg"
              alt="Matlagning och kreativitet"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
