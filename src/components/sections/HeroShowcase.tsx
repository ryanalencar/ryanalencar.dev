import { Icon } from '../Icon'
import type { PortfolioTranslation } from "../../data/portfolio/types"

type HeroShowcaseProps = {
  t: PortfolioTranslation
}

export function HeroShowcase({ t }: HeroShowcaseProps) {
  return (
    <section id="hero" className="space-y-8">
      <div className="reveal rounded-3xl border border-white/10 bg-linear-to-br from-violet-500/15 via-transparent to-violet-700/14 p-6 md:p-8 light:border-slate-300/90">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300 light:text-violet-700">
          {t.profile.role}
        </p>
        <h2 className="text-[clamp(2rem,7vw,4rem)] font-black leading-none tracking-[-0.02em] text-white light:text-[#13131c]">
          {t.hero.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[clamp(1rem,2.2vw,1.25rem)] text-slate-300 light:text-slate-800">
          {t.hero.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="btn-cta-primary">
            {t.hero.ctaPrimary}
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href="#projects" className="btn-cta-secondary">
            {t.hero.ctaSecondary}
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="Professional metrics">
          {t.hero.metrics.map((metric) => (
            <li key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-4 light:border-slate-300 light:bg-white">
              <p className="text-2xl font-black text-white light:text-[#11111a]">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300 light:text-slate-700">{metric.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-violet-400/45 bg-violet-500/15 p-5 transition hover:scale-[1.01] light:border-violet-300/70 light:bg-violet-500/10">
          <h3 className="text-lg font-bold text-violet-100 light:text-violet-800">{t.hero.creativeCard.title}</h3>
          <ul className="mt-3 grid gap-2 text-sm text-violet-200 light:text-violet-800">
            {t.hero.creativeCard.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="reveal rounded-3xl border border-violet-300/40 bg-violet-700/20 p-5 transition hover:scale-[1.01] light:border-violet-300/70 light:bg-violet-600/12">
          <h3 className="text-lg font-bold text-violet-100 light:text-violet-800">{t.hero.stackCard.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
            {t.hero.stackCard.items.map((item) => (
              <li key={item} className="rounded-full border border-violet-300/55 bg-violet-600/15 px-2.5 py-1 text-violet-100 light:border-violet-400/70 light:bg-violet-500/10 light:text-violet-800">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
