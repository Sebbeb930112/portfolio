import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type ActiveCaseStudy = 'balanza' | 'soundscape' | 'spelinsikt' | 'lotr' | null

interface ProjectsProps {
  onOpenCaseStudy: (id: ActiveCaseStudy) => void
}

interface ProjectCard {
  id: ActiveCaseStudy
  title: string
  category: string
  description: string
  tags: string[]
  hasCaseStudy: boolean
  isComingSoon?: boolean
  image: string
  emoji?: string
}

const uxCases: ProjectCard[] = [
  {
    id: 'balanza',
    title: 'Balanza',
    category: 'UX/UI Design',
    description: 'Webappen som gör sparande för studenter roligt!',
    tags: ['Research', 'UI-design', 'Prototyper', 'Mobil'],
    hasCaseStudy: true,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    id: 'soundscape',
    title: 'Soundscape Sleep',
    category: 'UX Research & Tjänstedesign',
    description: 'Appen för dig som vill ha en god natts sömn och produktiva dagar.',
    tags: ['Användarresearch', 'Tjänstedesign', 'Användartester'],
    hasCaseStudy: true,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80',
  },
  {
    id: 'spelinsikt',
    title: 'Spelinsikt',
    category: 'Digital tjänst',
    description: 'Innovativ digital tjänst med fokus på spelansvar och användarstöd.',
    tags: ['UX-design', 'Digital tjänst', 'Användarresa', 'UI Design', 'Scrum master'],
    hasCaseStudy: true,
    isComingSoon: true,
    emoji: '📝',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
  },
]

const uiShowcases: ProjectCard[] = [
  {
    id: 'lotr',
    title: 'The Lord of the Rings',
    category: 'UI Design • Fanpage',
    description:
      'Visuell hyllning till Tolkiens mästerverk – e-handel, karaktärer och interaktiv karta.',
    tags: ['UI-design', 'Visuell design', 'Dark mode'],
    hasCaseStudy: false,
    isComingSoon: false,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
  },
  {
    id: null,
    title: 'UI Showcase',
    category: 'Kommer snart',
    description: 'Mer kreativt UI arbete på gång.',
    tags: ['UI-design', 'Visuell design'],
    hasCaseStudy: false,
    isComingSoon: true,
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
]

function ProjectCardComponent({
  card,
  onClick,
}: {
  card: ProjectCard
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden ${onClick ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <motion.img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: 'rgba(17,24,39,0.8)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={32} className="text-white" />
          <span className="text-white font-medium text-sm">
            {card.isComingSoon ? 'Kommer snart' : 'Läs mer'}
          </span>
        </motion.div>

        {/* Coming soon overlay */}
        {card.isComingSoon && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
            <motion.span
              className="text-4xl mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {card.emoji}
            </motion.span>
            <span className="font-semibold text-gray-700 text-sm">Kommer snart</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">
          {card.category}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {card.tags.map((tag) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-[#f5f1ea] rounded-full text-gray-700 text-xs font-medium"
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Arrow */}
        {onClick && !card.isComingSoon && (
          <div className="flex items-center gap-1 text-gray-900 text-sm font-medium">
            <span>Läs case study</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 lg:py-32" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* UX Cases */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">UX Cases →</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Här är ett urval av projekt där jag har arbetat med allt från research till färdig
            design. Varje projekt representerar en unik utmaning och lösning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {uxCases.map((card) => (
            <ProjectCardComponent
              key={card.title}
              card={card}
              onClick={
                card.hasCaseStudy && !card.isComingSoon && card.id
                  ? () => onOpenCaseStudy(card.id)
                  : undefined
              }
            />
          ))}
        </div>

        {/* UI Artwork Showcases */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UI Artwork Showcases →
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Kreativa UI-explorationer och visuella designexperiment som visar min passion för
            estetik och detaljer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiShowcases.map((card) => (
            <ProjectCardComponent
              key={card.title}
              card={card}
              onClick={
                card.id === 'lotr' && !card.isComingSoon
                  ? () => onOpenCaseStudy('lotr')
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
