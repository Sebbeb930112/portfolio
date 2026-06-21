import { motion } from 'motion/react'
import { ArrowLeft, Target, Users, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

interface Props {
  onBack: () => void
}

const NAVY = '#1C2B3A'
const ORANGE = '#FF8229'
const ORANGE_LIGHT = '#fff4ec'

function StatCard({ number, label, sub }: { number: string; label: string; sub?: string }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      <p className="text-4xl font-bold mb-1" style={{ color: ORANGE }}>{number}</p>
      <p className="text-gray-700 text-sm font-medium">{label}</p>
      {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
    </motion.div>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>{number}</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}

export default function ReflexaCaseStudy({ onBack }: Props) {
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
            style={{ backgroundColor: ORANGE_LIGHT, color: ORANGE }}
          >
            UX Audit • E-handel • LIA-projekt
          </span>
          <h1
            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Comforter', cursive" }}
          >
            Reflexa
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Reflexa Nordic Workwear — ett starkt varumärkesarv med 40 års branscherfarenhet, men en
            digital närvaro som inte speglade styrkan. Under min LIA-praktik på Solution Group fick jag
            i uppdrag att identifiera UX-problem och ta fram ett modernt designförslag som stärker
            kundupplevelsen och driver konvertering.
          </p>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a63 100%)` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[280px]">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Examensarbete · LIA · Solution Group</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Reflexa Nordic Workwear
            </h2>
            <p className="text-white/60 text-lg">Från UX Audit till modernt designförslag</p>
            <div className="flex gap-3 mt-8 flex-wrap justify-center">
              {['#1C2B3A', '#FF8229', '#F6F6F6', '#FFFFFF'].map((c) => (
                <div key={c} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                  <span className="text-white/40 text-xs">{c}</span>
                </div>
              ))}
            </div>
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
            { label: 'Roll', value: 'UX Designer, UX Researcher' },
            { label: 'Uppdragsgivare', value: 'Reflexa Nordic Workwear via Solution Group' },
            { label: 'Verktyg', value: 'Figma, enkätverktyg, intervjuer' },
            { label: 'Typ', value: 'LIA-praktik · Examensarbete' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">{item.label}</p>
              <p className="text-gray-800 font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 max-w-5xl mx-auto pb-24 space-y-20">

        {/* 01 Bakgrund & Problem */}
        <Section number="01" title="Bakgrund & Problem">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: ORANGE_LIGHT }}>
                <Target size={20} style={{ color: ORANGE }} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Uppdraget</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reflexa är en svensk e-handlare av arbetskläder inom byggbranschen med 40 års
                branscherfarenhet — men en digital närvaro som inte speglar den styrkan. Mitt uppdrag:
                identifiera UX-problem på reflexa.se och ta fram ett modernt designförslag som stärker
                kundupplevelsen och driver konvertering.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: ORANGE_LIGHT }}>
                <Lightbulb size={20} style={{ color: ORANGE }} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Problemet</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reflexa hade ett starkt varumärkesarv men en webbplats med tydliga farthinder för
                konvertering. Kognitiv överbelastning, otydlig navigation och ett föråldrat visuellt
                uttryck gjorde det svårt för kunden att hitta rätt — och svårt för Reflexa att
                konvertera besökare till köp.
              </p>
            </div>
          </div>

          {/* Målbild */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: NAVY }}>
            <h4 className="font-bold text-white mb-6">Målbilden</h4>
            <div className="space-y-3">
              {[
                'Bygga bort de problem som finns idag, för ökad konvertering.',
                'Skapa ett modernt, robust uttryck som andas hantverksstolthet.',
                'Positionera Reflexa som branschexpert snarare än generisk butik.',
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ORANGE }}>→</span>
                  <span className="text-white/80 text-sm leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 02 Research */}
        <Section number="02" title="Research & Datainsamling">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard number="23" label="Enkätsvar" sub="Respondenter" />
            <StatCard number="6" label="Kvalitativa" sub="Djupintervjuer" />
            <StatCard number="9/23" label="Avbröt köp" sub="Oklar lagerstatus" />
            <StatCard number="92%" label="Ville ha" sub="Lagermatris" />
          </div>

          {/* User quotes */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { quote: '"Sidan ser ut som att den främst vänder sig till företag som köper 100 jackor åt gången. Som privatperson vill jag känna mig välkommen."', role: 'Förstagångsköparen' },
              { quote: '"Det är hopplöst att se om storleken finns hemma när man ska köpa till sex gubbar samtidigt."', role: 'Den pragmatiska hantverkaren' },
              { quote: '"Utan sortering känns det som att butiken försöker dölja de billigare alternativen... det känns som en statisk papperskatalog."', role: 'Filtreringssnillet' },
              { quote: '"Det kändes som att jag klev in på en verkstad där jag inte hörde hemma... jag visste inte vilken kategori jag skulle välja."', role: 'Den vilsna nybörjaren' },
            ].map((q) => (
              <motion.div
                key={q.role}
                className="bg-white rounded-xl p-6 border-l-4"
                style={{ borderColor: ORANGE }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-700 text-sm leading-relaxed italic mb-3">{q.quote}</p>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>{q.role}</p>
              </motion.div>
            ))}
          </div>

          {/* User stories */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: 'B2C', story: 'Som privatperson som renoverar hemma vill jag enkelt hitta hållbara arbetskläder i min storlek så att jag kan handla tryggt utan att behöva förstå branschtermer som C24.' },
              { type: 'B2B', story: 'Som inköpsansvarig vill jag snabbt se lagerstatus på alla storlekar samtidigt så att jag kan beställa rätt antal till hela arbetslaget utan att klicka mig igenom varje storlek separat.' },
            ].map((s) => (
              <div key={s.type} className="rounded-xl p-6" style={{ backgroundColor: ORANGE_LIGHT }}>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full text-white text-xs mb-3 inline-block" style={{ backgroundColor: ORANGE }}>{s.type}</span>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">{s.story}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 03 Från problem till lösning */}
        <Section number="03" title="Från Problem till Lösning">
          <div className="space-y-3">
            {[
              { problem: 'Dominant orange skapar kognitiv överbelastning', solution: 'Navy som primärfärg, orange behålls som accentfärg i topbar' },
              { problem: 'Produktsortering saknas på produktlistor', solution: 'Produktfiltrering, t.ex. Pris: lågt till högt' },
              { problem: 'Avsaknad av lagerstatus på varor', solution: 'Lagerstatus på produktsida + möjlighet till lagermatris' },
              { problem: 'Manuell köpresa utan vägledning', solution: 'Tydliga CTA i banners på startsida, produktsida & Minicart' },
              { problem: 'Utdaterad kassa skapar otrygghet', solution: 'Moderniserad, enkelnavigerad checkout med trust-element' },
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
                  <p className="text-gray-600 text-sm leading-relaxed">{row.problem}</p>
                </div>
                <div className="p-5 flex items-start gap-3" style={{ backgroundColor: ORANGE_LIGHT }}>
                  <span className="font-bold flex-shrink-0" style={{ color: ORANGE }}>✓</span>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{row.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 04 Design */}
        <Section number="04" title="Designbeslut & Visuellt Språk">
          {/* Color palette */}
          <div className="bg-white rounded-2xl p-8 mb-6">
            <h4 className="font-bold text-gray-900 mb-6">Färgpalett</h4>
            <div className="flex flex-wrap gap-6">
              {[
                { name: 'Primary / Navy', hex: '#1C2B3A', light: false },
                { name: 'Accent / Amber', hex: '#FF8229', light: false },
                { name: 'Black', hex: '#000000', light: false },
                { name: 'Mist', hex: '#F6F6F6', light: true },
                { name: 'White', hex: '#FFFFFF', light: true },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-xl border border-gray-200 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="text-xs font-medium text-gray-700">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white rounded-2xl p-8 mb-6">
            <h4 className="font-bold text-gray-900 mb-6">Typografi</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Rubrik</p>
                <p className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Barlow, sans-serif' }}>Barlow</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">Industriell tyngd och pondus. Inspirerat av vägskyltar och industriell design — ger varumärket auktoritet och rätt workwear-känsla.</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Brödtext</p>
                <p className="text-4xl font-bold text-gray-900">Inter Tight</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">Optimerat för skärmar och UI. Extremt rent, avgörande när kunden snabbt ska skanna menyer, certifieringar och tekniska produktspecifikationer.</p>
              </div>
            </div>
          </div>

          {/* Key design decisions */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Orange → Accentfärg', text: 'Kunden ville behålla orange — en utmaning för tillgänglighet. Lösningen: behåll orange men flytta från primär till accent i topbar.' },
              { title: 'Megameny städad', text: 'Minskade antalet underkategorier och tog bort artikelantal för förbättrad läsbarhet och lägre kognitiv belastning.' },
              { title: 'Lagermatris för alla', text: 'Initialt enbart i B2B-läge. Tester visade att privatpersoner också ville ha det — nu tillgängligt som overlay för alla.' },
              { title: 'Trustbar i topbar', text: 'Trustbar med trust-element lyftes upp till topbaren så att den alltid följer med användaren — frigör plats för produkter.' },
            ].map((d, i) => (
              <motion.div
                key={d.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: ORANGE_LIGHT }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="font-bold mb-2" style={{ color: NAVY }}>{d.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 05 Användbarhetstester */}
        <Section number="05" title="Användbarhetstester & Iteration">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                person: 'Testperson 1',
                profile: 'Privatperson',
                task: 'Köpa en Varseljacka i storlek medium — genomför till bekräftelsesida',
                result: 'Genomförde köpet utan problem. Hela köpresan fungerade utan friktion.',
                success: true,
              },
              {
                person: 'Testperson 2',
                profile: 'B2B-inköpare, golvläggarbransch',
                task: 'Köpa samma Varseljacka till 11 anställda i 2 olika storlekar',
                result: 'Genomförde bulkköpet utan problem och uppskattade lagermatrisen — ville dock ha matrisen tillgänglig oavsett läge.',
                success: true,
              },
            ].map((t) => (
              <div key={t.person} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE_LIGHT }}>
                    <Users size={16} style={{ color: ORANGE }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.person}</p>
                    <p className="text-xs text-gray-500">{t.profile}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">Uppgift</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{t.task}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">Resultat</p>
                <p className="text-gray-700 text-sm leading-relaxed">{t.result}</p>
              </div>
            ))}
          </div>

          {/* Iteration */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: NAVY }}>
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight size={20} style={{ color: ORANGE }} />
              <h4 className="font-bold text-white">Iteration: Lagermatrisen</h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Det initiala förslaget placerade lagermatrisen exklusivt i företagsläget. Testet visade
              att detta var för begränsande.
            </p>
            <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,130,41,0.15)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: ORANGE }}>Reviderat beslut →</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Lagermatrisen är nu tillgänglig som en overlay på alla produktsidor, för alla
                användare. Privatpersonen använder vanlig storleksväljare som standard, men tillgång
                till matris finns även här. Ingen tvingas till ett läge de inte behöver.
              </p>
            </div>
            <p className="text-center text-white/40 text-xs mt-6 tracking-widest uppercase">Design → Test → Insikt → Iteration</p>
          </div>
        </Section>

        {/* 06 Reflektioner */}
        <Section number="06" title="Reflektioner & Lärdomar">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4">Utvalda reflektioner</h4>
              <div className="space-y-4">
                {[
                  'E-handel är svårt — särskilt när man tar hänsyn till både B2C och B2B som vill ha information på helt olika sätt.',
                  'Orange som primärfärg är svårarbetad för tillgänglighet. Flytten till accentfärg löste problemet utan att förlora varumärkets identitet.',
                  'Reflexas storlekssystem (C24, D104) utestänger privatpersoner. En storlekskonverterare identifierades men prioriterades till nästa fas.',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ORANGE }}>•</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4">Kritisk reflektion</h4>
              <div className="space-y-4">
                {[
                  'Två testpersoner är ett för litet underlag — fler tester med bredare representation hade stärkt validiteten.',
                  'Enkäten nådde främst B2B-användare vilket kan ha snedvridit resultaten.',
                  'Observationsstudier hade gett en mer objektiv bild av faktiskt beteende jämfört med självrapporterad upplevelse.',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ORANGE }}>•</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-4">Framtiden & Nästa steg</h4>
            {[
              { n: '1', title: 'Kundpresentation & godkännande', text: 'Designförslaget presenteras för Reflexa för att säkerställa att det möter vision och affärsmål.' },
              { n: '2', title: 'Fler användartester', text: 'Minst 5–8 tester med bredare representation — fler branscher, åldrar och roller. Fokus på kassa och filtrering.' },
              { n: '3', title: 'Storlekskonverterare', text: 'Reflexas storlekssystem (C24, D104) utestänger privatpersoner. En guide eller konverterare bör prioriteras tidigt.' },
              { n: '4', title: 'Implementation & A/B-testning', text: 'Kritiska moment testas med A/B-tester. KPI: Konverteringsgrad +15–25%, minskad avhoppsfrekvens i kassan.' },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                className="flex gap-4 items-start bg-white rounded-xl p-5"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-white"
                  style={{ backgroundColor: ORANGE }}
                >
                  {s.n}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h5>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Slutord */}
        <motion.div
          className="rounded-2xl p-8 lg:p-12 text-white"
          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a63 100%)` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle size={24} style={{ color: ORANGE }} className="flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Det viktigaste jag lärde mig</h3>
              <p className="text-white/80 leading-relaxed text-lg italic">
                "UX-design handlar inte enbart om att göra snygga wireframes. Det handlar om att förstå
                människor och deras behov. Varje designbeslut i det här projektet har en användare bakom sig."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {[
              { icon: TrendingUp, label: 'Mål konvertering', value: '+15–25%' },
              { icon: Users, label: 'Respondenter', value: '23 enkät + 6 intervjuer' },
              { icon: CheckCircle, label: 'Testomgångar', value: '2 användbarhetstester' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            className="px-8 py-4 rounded-xl font-semibold text-white cursor-pointer border-none"
            style={{ backgroundColor: NAVY }}
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
