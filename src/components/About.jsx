import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const STATS = [
  { value: '5+',  key: 'stat_exp',   color: 'neon',  border: 'border-neon/40',  text: 'text-neon',  shadow: 'hover:shadow-neon'  },
  { value: '10+', key: 'stat_apis',  color: 'hot',   border: 'border-hot/40',   text: 'text-hot',   shadow: 'hover:shadow-hot'   },
  { value: '2',   key: 'stat_langs', color: 'azure', border: 'border-azure/40', text: 'text-azure', shadow: 'hover:shadow-azure' },
]

export default function About() {
  const { t } = useTranslation()
  const highlights = t('about.highlights', { returnObjects: true })

  return (
    <section id="about" className="py-28 px-8 bg-ink-800 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <p className="font-mono text-xs text-neon tracking-widest uppercase mb-4">01 · about</p>
          <h2 className="font-display font-bold text-ink-50 tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('about.title')}
          </h2>
          <p className="font-mono text-xs text-ink-400">{t('about.subtitle')}</p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-14"
        >
          {STATS.map((s, i) => (
            <motion.div key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-ink-700 border-l-2 ${s.border} border-t border-r border-b border-ink-600 rounded-r-lg px-7 py-5 ${s.shadow} transition-all duration-300`}
            >
              <p className={`font-display font-bold text-4xl leading-none mb-1 ${s.text}`}>{s.value}</p>
              <p className="font-mono text-xs text-ink-400">{t(`about.${s.key}`)}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-ink-100 leading-relaxed">{t('about.p1')}</p>
            <p className="text-ink-200 leading-relaxed">{t('about.p2')}</p>
            <p className="text-ink-300 leading-relaxed">{t('about.p3')}</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.1 }} className="md:col-span-2 flex flex-col gap-2"
          >
            <p className="font-mono text-xs text-ink-500 uppercase tracking-widest mb-3">
              <span className="text-neon">›</span> focus areas
            </p>
            {highlights.map((item, i) => (
              <motion.div key={item}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-3 text-sm text-ink-200 bg-ink-700 border border-ink-600 rounded px-4 py-3 hover:border-neon/40 hover:text-neon transition-all font-mono"
              >
                <span className="text-neon text-xs">—</span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
