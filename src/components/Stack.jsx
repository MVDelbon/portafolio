import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const CATEGORIES = [
  { key: 'frontend',   items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'], accent: false, color: 'azure' },
  { key: 'backend',    items: ['Go', 'REST APIs', 'WebSockets', 'OAuth 2.0'],                       accent: false, color: 'azure' },
  { key: 'database',   items: ['SQL Server', 'PostgreSQL', 'Query Optimization'],                   accent: false, color: 'azure' },
  { key: 'automation', items: ['n8n', 'Meta API', 'Google Ads API', 'Webhooks', 'Workflow Automation'], accent: true,  color: 'neon' },
  { key: 'ai',         items: ['AI Agents', 'LLM APIs', 'Prompt Engineering', 'Workflow Orchestration'], accent: true,  color: 'neon' },
]

const COLOR_MAP = {
  azure: { label: 'text-azure', pill: 'text-azure border-azure/20 bg-azure/5 hover:bg-azure/10 hover:border-azure/40' },
  neon:  { label: 'text-neon',  pill: 'text-neon  border-neon/20  bg-neon/5  hover:bg-neon/10  hover:border-neon/40'  },
}

export default function Stack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="py-28 px-8 bg-ink-900 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-14"
        >
          <p className="font-mono text-xs text-neon tracking-widest uppercase mb-4">02 · stack</p>
          <h2 className="font-display font-bold text-ink-50 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('stack.title')}
          </h2>
          <p className="font-mono text-xs text-ink-400">{t('stack.subtitle')}</p>
        </motion.div>

        <div className="space-y-2">
          {CATEGORIES.map((cat, i) => {
            const colors = COLOR_MAP[cat.color]
            return (
              <motion.div key={cat.key}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 px-5 bg-ink-800 border border-ink-700 rounded hover:border-ink-500 transition-all"
              >
                <div className="w-40 flex-shrink-0 flex items-center gap-2">
                  <span className={`font-mono text-[10px] ${colors.label}`}>›</span>
                  <p className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${colors.label}`}>
                    {t(`stack.${cat.key}`)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech, j) => (
                    <motion.span key={tech}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.04 + j * 0.03 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`text-xs font-mono px-3 py-1.5 rounded border cursor-default transition-all ${colors.pill}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
