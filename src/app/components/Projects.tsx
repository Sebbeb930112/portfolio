import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type ActiveCaseStudy = 'balanza' | 'soundscape' | 'spelinsikt' | 'lotr' | 'reflexa' | 'circla' | null

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
    image: '/balanza-hero.jpg',
  },
  {
    id: 'soundscape',
    title: 'Soundscape Sleep',
    category: 'UX Research & Tjänstedesign',
    description: 'Appen för dig som vill ha en god natts sömn och produktiva dagar.',
    tags: ['Användarresearch', 'Tjänstedesign', 'Användartester'],
    hasCaseStudy: true,
    image: '/soundscape-hero.jpg',
  },
  {
    id: 'circla',
    title: 'Circla – Dödsbo',
    category: 'UI/UX Design • Landningssida • Live',
    description: 'Redesign av en landningssida med dålig konvertering för Circla, del av Sortera.se. Min design är live idag.',
    tags: ['UI Design', 'Konvertering', 'Landningssida', 'LIA'],
    hasCaseStudy: true,
    image: '/circlathumbnail.jpg',
  },
  {
    id: 'reflexa',
    title: 'Reflexa Nordic Workwear',
    category: 'UX Audit • E-handel • LIA',
    description: 'Examensarbete: UX-audit och modernt designförslag för en svensk e-handlare av arbetskläder med 40 års branscherfarenhet.',
    tags: ['UX Audit', 'E-handel', 'Research', 'Prototyp', 'LIA'],
    hasCaseStudy: true,
    image: '/Reflexathumbnail.jpg',
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
    description: 'Visuell hyllning till Tolkiens mästerverk – e-handel, karaktärer och interaktiv karta.',
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

function TiltCard({ card, onClick, index }: { card: ProjectCard; onClick?: () => void; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden ${onClick ? 'cursor-pointer' : ''}`}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <motion.img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: 'rgba(17,24,39,0.78)' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          >
            <ArrowUpRight size={36} className="text-white" />
          </motion.div>
          <span className="text-white font-medium text-sm tracking-wide">
            {card.isComingSoon ? 'Kommer snart' : 'Läs mer'}
          </span>
        </motion.div>

        {card.isComingSoon && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
            <motion.span
              className="text-4xl mb-2"
              animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {card.emoji}
            </motion.span>
            <span className="font-semibold text-gray-700 text-sm">Kommer snart</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">{card.category}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {card.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-[#f5f1ea] rounded-full text-gray-700 text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.12, backgroundColor: '#e8e3da' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {onClick && !card.isComingSoon && (
          <div className="flex items-center gap-1 text-gray-900 text-sm font-medium">
            <span>Läs case study</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUpRight size={15} />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ overflow: 'hidden' }}>
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          initial={{ y: '100%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h2>
      </div>
      <motion.p
        className="text-gray-600 text-lg leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 lg:py-32" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="UX Cases →"
          description="Här är ett urval av projekt där jag har arbetat med allt från research till färdig design. Varje projekt representerar en unik utmaning och lösning."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {uxCases.map((card, i) => (
            <TiltCard
              key={card.title}
              card={card}
              index={i}
              onClick={card.hasCaseStudy && !card.isComingSoon && card.id ? () => onOpenCaseStudy(card.id as ActiveCaseStudy) : undefined}
            />
          ))}
        </div>

        <SectionHeading
          title="UI Artwork Showcases →"
          description="Kreativa UI-explorationer och visuella designexperiment som visar min passion för estetik och detaljer."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiShowcases.map((card, i) => (
            <TiltCard
              key={card.title}
              card={card}
              index={i}
              onClick={card.id === 'lotr' && !card.isComingSoon ? () => onOpenCaseStudy('lotr') : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
