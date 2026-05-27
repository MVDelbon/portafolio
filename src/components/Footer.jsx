import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-ink-700 py-8 px-8 bg-ink-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-mono text-neon font-bold">
          vd<span className="animate-blink">_</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-neon" />
          <span className="font-mono text-xs text-ink-500">
            © {new Date().getFullYear()} Victoria Delbon · {t('footer.built_with')}
          </span>
        </div>
      </div>
    </footer>
  )
}
