import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true })
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ink-900 grid-pattern px-8">

      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none animate-blob-1"
        style={{ background: 'radial-gradient(circle at center, rgba(0,245,160,0.06) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-blob-2"
        style={{ background: 'radial-gradient(circle at center, rgba(255,61,113,0.05) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: main content */}
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.p variants={item} className="font-mono text-xs text-ink-400 mb-6">
            <span className="text-neon">$</span> whoami
          </motion.p>

          <motion.h1 variants={item}
            className="font-display font-bold text-ink-50 leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
          >
            Victoria<br />
            Delbon<span className="text-neon animate-blink">_</span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div variants={item} className="h-6 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm text-ink-300"
              >
                <span className="text-neon">›</span> {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={item} className="text-ink-300 leading-relaxed mb-10 max-w-md">
            {t('hero.description')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-neon hover:bg-neon-hover text-ink-900 font-display font-bold text-sm px-6 py-3 rounded transition-all duration-200 hover:shadow-neon"
            >
              {t('hero.cta_projects')}
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-ink-400 border border-ink-600 px-6 py-3 rounded hover:border-neon hover:text-neon transition-all"
            >
              {t('hero.cta_contact')}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse shadow-neon" />
            <span className="font-mono text-xs text-ink-400">{t('hero.available')}</span>
          </motion.div>

        </motion.div>

        {/* Right: floating code block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="bg-ink-800 border border-ink-600 rounded-lg overflow-hidden shadow-card">
            {/* Tab bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-ink-700 border-b border-ink-600">
              <span className="w-2.5 h-2.5 rounded-full bg-hot/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-neon/60" />
              <span className="ml-3 font-mono text-xs text-ink-400">developer.ts</span>
            </div>
            {/* Code */}
            <div className="p-6 font-mono text-sm leading-7">
              <div className="text-ink-500">// Full Stack Developer</div>
              <div className="mt-1">
                <span className="text-azure">const</span>
                <span className="text-ink-50"> victoria </span>
                <span className="text-ink-300">= {'{'}</span>
              </div>
              <div className="pl-6">
                <span className="text-neon">stack</span>
                <span className="text-ink-300">: [</span>
                <span className="text-hot">"React"</span>
                <span className="text-ink-300">, </span>
                <span className="text-hot">"Go"</span>
                <span className="text-ink-300">, </span>
                <span className="text-hot">"SQL Server"</span>
                <span className="text-ink-300">],</span>
              </div>
              <div className="pl-6">
                <span className="text-neon">focus</span>
                <span className="text-ink-300">: </span>
                <span className="text-yellow-400">"AI & Automation"</span>
                <span className="text-ink-300">,</span>
              </div>
              <div className="pl-6">
                <span className="text-neon">apis</span>
                <span className="text-ink-300">: [</span>
                <span className="text-hot">"Meta"</span>
                <span className="text-ink-300">, </span>
                <span className="text-hot">"Google Ads"</span>
                <span className="text-ink-300">],</span>
              </div>
              <div className="pl-6">
                <span className="text-neon">exp</span>
                <span className="text-ink-300">: </span>
                <span className="text-azure">3</span>
                <span className="text-ink-300">,</span>
              </div>
              <div className="pl-6">
                <span className="text-neon">status</span>
                <span className="text-ink-300">: </span>
                <span className="text-neon">"available"</span>
                <span className="text-ink-300">,</span>
              </div>
              <div>
                <span className="text-ink-300">{'}'}</span>
              </div>
              <div className="mt-4 text-ink-500">
                <span className="text-azure">export default</span>
                <span className="text-ink-50"> victoria</span>
                <span className="text-neon animate-blink">|</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
