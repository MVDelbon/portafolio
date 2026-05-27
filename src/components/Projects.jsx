import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Lock, ArrowUpRight } from 'lucide-react'

const CAT_STYLE = {
  'CRM System':           { label: 'text-neon',     border: 'border-l-neon',    bar: 'from-neon/80 to-neon/10',           badge: 'text-neon border-neon/30 bg-neon/5'           },
  'Sistema CRM':          { label: 'text-neon',     border: 'border-l-neon',    bar: 'from-neon/80 to-neon/10',           badge: 'text-neon border-neon/30 bg-neon/5'           },
  'Sistema CRM (PT)':     { label: 'text-neon',     border: 'border-l-neon',    bar: 'from-neon/80 to-neon/10',           badge: 'text-neon border-neon/30 bg-neon/5'           },
  'API Integration':      { label: 'text-azure',    border: 'border-l-azure',   bar: 'from-azure/80 to-azure/10',         badge: 'text-azure border-azure/30 bg-azure/5'        },
  'Integración API':      { label: 'text-azure',    border: 'border-l-azure',   bar: 'from-azure/80 to-azure/10',         badge: 'text-azure border-azure/30 bg-azure/5'        },
  'Integração de API':    { label: 'text-azure',    border: 'border-l-azure',   bar: 'from-azure/80 to-azure/10',         badge: 'text-azure border-azure/30 bg-azure/5'        },
  'AI Automation':        { label: 'text-hot',      border: 'border-l-hot',     bar: 'from-hot/80 to-hot/10',             badge: 'text-hot border-hot/30 bg-hot/5'              },
  'Automatización IA':    { label: 'text-hot',      border: 'border-l-hot',     bar: 'from-hot/80 to-hot/10',             badge: 'text-hot border-hot/30 bg-hot/5'              },
  'Automação com IA':     { label: 'text-hot',      border: 'border-l-hot',     bar: 'from-hot/80 to-hot/10',             badge: 'text-hot border-hot/30 bg-hot/5'              },
  'Real-time Platform':   { label: 'text-yellow-400', border: 'border-l-yellow-400', bar: 'from-yellow-400/80 to-yellow-400/10', badge: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
  'Plataforma Real-time': { label: 'text-yellow-400', border: 'border-l-yellow-400', bar: 'from-yellow-400/80 to-yellow-400/10', badge: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
  'Infrastructure Tool':  { label: 'text-purple-400', border: 'border-l-purple-400', bar: 'from-purple-400/80 to-purple-400/10', badge: 'text-purple-400 border-purple-400/30 bg-purple-400/5' },
  'Infraestructura':      { label: 'text-purple-400', border: 'border-l-purple-400', bar: 'from-purple-400/80 to-purple-400/10', badge: 'text-purple-400 border-purple-400/30 bg-purple-400/5' },
  'Infraestrutura':       { label: 'text-purple-400', border: 'border-l-purple-400', bar: 'from-purple-400/80 to-purple-400/10', badge: 'text-purple-400 border-purple-400/30 bg-purple-400/5' },
}

const DEFAULT_STYLE = { label: 'text-neon', border: 'border-l-neon', bar: 'from-neon/80 to-neon/10', badge: 'text-neon border-neon/30 bg-neon/5' }

function ProjectCard({ project, index }) {
  const style = CAT_STYLE[project.category] || DEFAULT_STYLE

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 150 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-ink-800 border-l-2 ${style.border} border-t border-r border-b border-ink-700 rounded-r overflow-hidden hover:border-ink-500 transition-all flex flex-col group`}
    >
      <div className={`h-px w-full bg-gradient-to-r ${style.bar}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded border ${style.badge}`}>
            {project.category}
          </span>
          <ArrowUpRight size={14} className="text-ink-500 group-hover:text-neon transition-colors flex-shrink-0" />
        </div>

        <h3 className="font-display font-bold text-base text-ink-50 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-ink-300 text-sm leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-2 mb-5 flex-1">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-xs text-ink-400 font-mono">
              <span className="text-ink-600 flex-shrink-0 mt-0.5">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map(tech => (
            <span key={tech} className="font-mono text-[11px] text-ink-400 border border-ink-600 px-2 py-0.5 rounded bg-ink-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-ink-500 font-mono border-t border-ink-700 pt-4 mt-auto">
          <Lock size={10} />
          <span>internal / enterprise</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="py-28 px-8 bg-ink-900 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-14"
        >
          <p className="font-mono text-xs text-neon tracking-widest uppercase mb-4">04 · projects</p>
          <h2 className="font-display font-bold text-ink-50 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('projects.title')}
          </h2>
          <p className="text-ink-400 text-sm max-w-lg leading-relaxed font-mono">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
