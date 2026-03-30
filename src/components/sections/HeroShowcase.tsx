import type { PortfolioTranslation } from "../../data/portfolio/types"
import { SectionHeading } from '../SectionHeading'

type HeroShowcaseProps = {
  t: PortfolioTranslation
}

export function HeroShowcase({ t }: HeroShowcaseProps) {
  return (
    <section id="hero" className="space-y-8 py-8 md:py-12">
      <div className="reveal">
        <SectionHeading title={t.hero.title} subtitle={t.hero.subtitle} description={t.hero.description} />
      </div>

      <div className="reveal grid gap-6 sm:grid-cols-3">
        {t.hero.metrics.map((metric) => (
          <article key={metric.label} className="flex flex-col items-start space-y-2">
            <p className="text-[clamp(2.5rem,8vw,4rem)] font-black text-white light:text-[#11111a]">
              {metric.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 light:text-slate-600">
              {metric.label}
            </p>
          </article>
        ))}
      </div>

      <article className="reveal rounded-3xl border border-violet-300/40 bg-violet-700/20 p-5 transition hover:scale-[1.01] light:border-violet-300/70 light:bg-violet-600/12">
        <h3 className="text-lg font-bold text-violet-100 light:text-violet-800">{t.hero.stackCard.title}</h3>
        <div className="mt-4 space-y-4">
          {t.hero.stackCard.categories.map((category) => (
            <div key={category.name}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-300 light:text-violet-600">{category.name}</p>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item} className="rounded-full border border-violet-300/55 bg-violet-600/15 px-2.5 py-1 text-xs font-semibold text-violet-100 light:border-violet-400/70 light:bg-violet-500/10 light:text-violet-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
