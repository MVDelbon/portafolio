import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const LANGS = ['es', 'en', 'pt']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { num: '01', key: 'about',      href: '#about'      },
    { num: '02', key: 'stack',      href: '#stack'       },
    { num: '03', key: 'experience', href: '#experience'  },
    { num: '04', key: 'projects',   href: '#projects'    },
    { num: '05', key: 'contact',    href: '#contact'     },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-ink-900/95 backdrop-blur-md border-b border-ink-700'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

        <a href="#" className="font-mono text-neon font-bold tracking-tight">
          vd<span className="animate-blink">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.key}>
              <a href={link.href} className="group flex items-baseline gap-1.5 font-mono text-xs text-ink-300 hover:text-neon transition-colors">
                <span className="text-ink-500 group-hover:text-neon">{link.num}</span>
                <span className="link-under">{t(`nav.${link.key}`)}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-0.5 font-mono text-xs">
          {LANGS.map((lang, i) => (
            <span key={lang} className="flex items-center">
              <button
                onClick={() => i18n.changeLanguage(lang)}
                className={`px-2.5 py-1.5 transition-all ${
                  i18n.language?.startsWith(lang)
                    ? 'text-neon font-bold'
                    : 'text-ink-400 hover:text-ink-100'
                }`}
              >
                {lang.toUpperCase()}
              </button>
              {i < LANGS.length - 1 && <span className="text-ink-600">·</span>}
            </span>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ink-300 hover:text-neon transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink-800 border-b border-ink-700 px-8 py-6">
          <ul className="flex flex-col gap-5 mb-6">
            {links.map(link => (
              <li key={link.key}>
                <a href={link.href} onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-2 font-mono text-xs text-ink-300 hover:text-neon transition-colors"
                >
                  <span className="text-ink-500">{link.num}</span>
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 font-mono text-xs">
            {LANGS.map((lang, i) => (
              <span key={lang} className="flex items-center">
                <button onClick={() => i18n.changeLanguage(lang)}
                  className={`px-2 py-1 transition-all ${
                    i18n.language?.startsWith(lang) ? 'text-neon font-bold' : 'text-ink-400'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
                {i < LANGS.length - 1 && <span className="text-ink-600">·</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
