import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react'

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/[tu-usuario]',      icon: Github   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/[tu-usuario]', icon: Linkedin },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-8 bg-ink-800 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon tracking-widest uppercase mb-4">05 · contact</p>

          <h2 className="font-display font-bold text-ink-50 tracking-tight leading-tight mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t('contact.title')}<span className="text-neon animate-blink">_</span>
          </h2>

          <p className="font-mono text-xs text-ink-400 mb-8">{t('contact.subtitle')}</p>

          <p className="text-ink-300 leading-relaxed mb-10 max-w-md">
            {t('contact.description')}
          </p>

          {/* Email */}
          <motion.a
            href="mailto:mvdelbon@gmail.com"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-4 mb-12"
          >
            <span className="w-11 h-11 bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all duration-300 rounded">
              <Mail size={16} className="text-neon group-hover:text-ink-900 transition-colors" />
            </span>
            <span className="font-mono text-base text-ink-100 link-under group-hover:text-neon transition-colors">
              mvdelbon@gmail.com
            </span>
            <ArrowRight size={16} className="text-ink-500 group-hover:text-neon transition-colors" />
          </motion.a>

          <p className="font-mono text-xs text-ink-500 uppercase tracking-widest mb-5">
            <span className="text-neon">›</span> {t('contact.or')}
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex items-center gap-2 font-mono text-xs text-ink-300 border border-ink-600 bg-ink-700 px-5 py-2.5 rounded hover:border-neon/50 hover:text-neon transition-all"
              >
                <Icon size={14} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
