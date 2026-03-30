import type { PortfolioTranslation } from "../../data/portfolio/types"
import { SectionHeading } from '../SectionHeading'

type PremiumToolsProps = {
  t: PortfolioTranslation
}

export function PremiumTools({ t }: PremiumToolsProps) {
  return (
    <section id="tools" className="reveal space-y-5">
      <SectionHeading title={t.tools.title} subtitle={t.tools.subtitle} description={t.tools.intro} />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {t.tools.list.map((tool) => (
          <article
            key={tool}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center transition duration-200 hover:scale-[1.02] hover:border-violet-400/70 hover:shadow-[0_0_16px_rgba(168,85,247,0.32)] light:border-slate-300 light:bg-white"
          >
            <h3 className="m-0 text-sm font-bold tracking-[0.08em] text-slate-100 light:text-slate-800">{tool}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
