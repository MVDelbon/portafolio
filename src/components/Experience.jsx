import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Experience() {
  const { t } = useTranslation()
  const achievements = t('experience.achievements', { returnObjects: true })

  return (
    <section id="experience" className="py-28 px-8 bg-ink-800 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mb-14"
        >
          <p className="font-mono text-xs text-neon tracking-widest uppercase mb-4">03 · experience</p>
          <h2 className="font-display font-bold text-ink-50 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('experience.title')}
          </h2>
          <p className="font-mono text-xs text-ink-400">{t('experience.subtitle')}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="relative max-w-2xl"
        >
          {/* Timeline */}
          <div className="absolute left-5 top-6 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/15 to-transparent" />
          <div className="absolute left-3 top-4 w-5 h-5 rounded-full bg-neon/10 border border-neon/60 z-10 shadow-neon" />

          <div className="ml-14 bg-ink-900 border border-ink-600 rounded overflow-hidden shadow-card">
            {/* Header bar */}
            <div className="h-0.5 w-full bg-gradient-to-r from-neon via-azure to-hot" />

            <div className="p-7">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-ink-50 mb-1">
                    {t('experience.job_title')}
                  </h3>
                  <p className="text-neon font-mono text-sm">{t('experience.job_company')}</p>
                </div>
                <span className="font-mono text-xs text-ink-400 bg-ink-800 border border-ink-600 px-3 py-1.5 rounded whitespace-nowrap self-start">
                  {t('experience.job_period')}
                </span>
              </div>

              <p className="text-ink-300 text-sm leading-relaxed mb-7">{t('experience.job_description')}</p>

              <p className="font-mono text-xs text-ink-500 uppercase tracking-widest mb-5">
                <span className="text-neon">›</span> {t('experience.achievements_title')}
              </p>

              <ul className="space-y-3">
                {achievements.map((achievementItem, i) => (
                  <motion.li key={achievementItem}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-ink-300"
                  >
                    <span className={`font-mono text-xs flex-shrink-0 mt-0.5 ${i % 2 === 0 ? 'text-neon' : 'text-ink-500'}`}>
                      {i % 2 === 0 ? '▹' : '·'}
                    </span>
                    {achievementItem}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
