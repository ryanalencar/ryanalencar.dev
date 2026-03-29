import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { ProfileSidebar } from './components/layout/ProfileSidebar'
import { TopControls } from './components/layout/TopControls'
import { DesignThoughts } from './components/sections/DesignThoughts'
import { ExperienceTimeline } from './components/sections/ExperienceTimeline'
import { HeroShowcase } from './components/sections/HeroShowcase'
import { PremiumTools } from './components/sections/PremiumTools'
import { RecentProjects } from './components/sections/RecentProjects'
import { WorkTogether } from './components/sections/WorkTogether'
import { portfolioContent, localeOptions } from './data/portfolio/data'
import { createContactMailTo } from './utils/contact'
import { updateMeta, updatePropertyMeta } from './utils/seo'
import type { Locale } from './data/portfolio/types'

function App() {
  const [locale, setLocale] = useState<Locale>('pt-BR')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light') {
      return false
    }

    if (savedTheme === 'dark') {
      return true
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const t = useMemo(() => portfolioContent[locale], [locale])
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [locale, isDarkMode])

  useEffect(() => {
    document.title = t.seo.title
    updateMeta('description', t.seo.description)
    updateMeta('keywords', t.seo.keywords)
    updatePropertyMeta('og:title', t.seo.title)
    updatePropertyMeta('og:description', t.seo.description)
    updatePropertyMeta('og:locale', locale)
    updateMeta('twitter:title', t.seo.title)
    updateMeta('twitter:description', t.seo.description)
  }, [locale, t.seo.description, t.seo.keywords, t.seo.title])

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const service = String(formData.get('service') ?? '')
    const message = String(formData.get('message') ?? '')
    window.location.href = createContactMailTo(name, email, service, message)
  }

  return (
    <>
      <a
        className="absolute left-3 -top-12 z-50 rounded-xl bg-violet-600 px-4 py-2 font-bold text-white focus:top-3"
        href="#main-content"
      >
        {t.labels.skip}
      </a>

      <TopControls
        locale={locale}
        isDarkMode={isDarkMode}
        localeOptions={localeOptions}
        onLocaleChange={setLocale}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
        labels={t.labels}
      />

      <main id="main-content" className="mx-auto grid w-[min(1240px,96vw)] gap-5 px-2 py-5 lg:grid-cols-[330px_1fr] lg:py-8 lg:pt-36 lg:pr-32 lg:pb-8">
        <ProfileSidebar t={t} />

        <div className="grid gap-5">
          <section id="hero">
            <HeroShowcase t={t} />
          </section>
          <section id="projects">
            <RecentProjects t={t} />
          </section>
          <section id="experience">
            <ExperienceTimeline t={t} />
          </section>
          <section id="tools">
            <PremiumTools t={t} />
          </section>
          <section id="thoughts">
            <DesignThoughts t={t} />
          </section>
          <section id="contact">
            <WorkTogether t={t} onSubmit={handleContactSubmit} />
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400 light:border-slate-300 light:text-slate-700 lg:pr-32">
        © {currentYear} {t.profile.name}. {t.footer.rights}
      </footer>
    </>
  )
}

export default App
