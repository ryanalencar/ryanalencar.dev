'use client'

import { useEffect, useRef, useState } from 'react'
import { Home, FolderOpen, Briefcase, Wrench, PenTool, Mail, Moon, Sun } from 'lucide-react'
import type { Locale } from '../../data/portfolio/types'

type NavItem = {
  id: string
  icon: React.ReactNode
  ariaLabel: string
}

type TopControlsProps = {
  locale: Locale
  isDarkMode: boolean
  localeOptions: Array<{ code: Locale; label: string }>
  labels: {
    language: string
    theme: string
    dark: string
    light: string
  }
  onLocaleChange: (locale: Locale) => void
  onThemeToggle: () => void
}

const navItems: NavItem[] = [
  { id: 'hero', icon: <Home size={20} />, ariaLabel: 'Home' },
  { id: 'projects', icon: <FolderOpen size={20} />, ariaLabel: 'Projects' },
  { id: 'experience', icon: <Briefcase size={20} />, ariaLabel: 'Experience' },
  { id: 'tools', icon: <Wrench size={20} />, ariaLabel: 'Tools' },
  { id: 'thoughts', icon: <PenTool size={20} />, ariaLabel: 'Thoughts' },
  { id: 'contact', icon: <Mail size={20} />, ariaLabel: 'Contact' },
]

export function TopControls({
  locale,
  isDarkMode,
  localeOptions,
  labels,
  onLocaleChange,
  onThemeToggle,
}: TopControlsProps) {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const scrollThreshold = 100

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50% 0px',
      }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isScrolled) {
    return (
      <div className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col gap-6 transition-all duration-500 ease-out opacity-100 translate-x-0">
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-violet-400/35 bg-white/5 p-4 backdrop-blur-sm dark:bg-white/5 light:border-slate-300 light:bg-slate-50">
          {navItems.map((item) => (
            <div key={item.id} className="group relative">
              <button
                onClick={() => handleNavClick(item.id)}
                aria-label={item.ariaLabel}
                aria-pressed={activeSection === item.id}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${activeSection === item.id
                    ? 'border-violet-400 bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'border-white/12 bg-white/5 text-slate-300 hover:border-violet-400/60 hover:bg-violet-500/10 light:border-slate-200 light:text-slate-600 light:hover:bg-violet-100'
                  }`}
              >
                {item.icon}
              </button>
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block bg-slate-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none">
                {item.ariaLabel}
                <div className="absolute left-full w-2 h-2 bg-slate-900/90 dark:bg-white/90 transform -translate-y-1/2 top-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/12 bg-white/5 p-4 backdrop-blur-sm dark:bg-white/5 light:border-slate-300 light:bg-slate-50">
          <div className="flex flex-col items-center gap-2 p-2" aria-label={labels.language} role="group">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => onLocaleChange(option.code)}
                aria-pressed={locale === option.code}
                className={
                  locale === option.code
                    ? 'rounded-full bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition'
                    : 'rounded-full px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-violet-500/30 light:text-slate-800'
                }
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={labels.theme}
            aria-pressed={isDarkMode}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:scale-[1.03] light:border-slate-300 light:bg-white"
          >
            {isDarkMode ? <Sun size={18} className="text-slate-200 light:text-slate-800" /> : <Moon size={18} className="text-slate-200 light:text-slate-800" />}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-40 hidden lg:flex transition-all duration-500 ease-out opacity-100">
      <div className="mx-auto flex w-[min(1240px,96vw)] items-center justify-center gap-3 px-6 py-3">
        <div className="flex items-center gap-4 rounded-2xl border border-violet-400/35 bg-white/5 p-4 backdrop-blur-sm dark:bg-white/5 light:border-slate-300 light:bg-slate-50">
          {navItems.map((item) => (
            <div key={item.id} className="group relative">
              <button
                onClick={() => handleNavClick(item.id)}
                aria-label={item.ariaLabel}
                aria-pressed={activeSection === item.id}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-3xl border transition-all ${activeSection === item.id
                    ? 'border-violet-400 bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'border-white/12 bg-white/5 text-slate-300 hover:border-violet-400/60 hover:bg-violet-500/10 light:border-slate-200 light:text-slate-600 light:hover:bg-violet-100'
                  }`}
              >
                {item.icon}
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-slate-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none">
                {item.ariaLabel}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-slate-900/90 dark:bg-white/90"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 rounded-2xl border border-white/15 bg-white/5 p-1 light:border-slate-300 light:bg-white" aria-label={labels.language} role="group">
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => onLocaleChange(option.code)}
              aria-pressed={locale === option.code}
              className={
                locale === option.code
                  ? 'rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white transition'
                  : 'rounded-full px-3 py-1 text-xs font-semibold text-slate-300 transition hover:bg-violet-500/30 light:text-slate-800'
              }
            >
              {option.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onThemeToggle}
          aria-label={labels.theme}
          aria-pressed={isDarkMode}
          className="inline-flex h-8 w-8 items-center justify-center rounded-3xl border border-white/15 bg-white/5 transition hover:scale-[1.03] light:border-slate-300 light:bg-white"
        >
          {isDarkMode ? <Sun size={16} className="text-slate-200 light:text-slate-800" /> : <Moon size={16} className="text-slate-200 light:text-slate-800" />}
        </button>
      </div>
    </div>
  )
}
