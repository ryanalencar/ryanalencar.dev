import type { PortfolioTranslation } from "../../data/portfolio/types"

type ExperienceTimelineProps = {
  t: PortfolioTranslation
}

export function ExperienceTimeline({ t }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="reveal space-y-5" aria-label={t.labels.timeline}>
      <header>
        <h2 className="section-title">{t.experience.title}</h2>
      </header>

      <ol className="relative ml-2 grid gap-5 border-l border-violet-500/35 pl-6">
        {t.experience.timeline.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-300 light:bg-white">
            <span className="absolute -left-7.75 top-6 h-3 w-3 rounded-full border border-violet-300 bg-violet-500 shadow-[0_0_14px_rgba(168,85,247,0.7)]" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-white light:text-[#12121c]">{item.company}</h3>
              <span className="text-xs text-violet-300 light:text-violet-800">{item.role}</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400 light:text-slate-700">{item.period}</p>
            <p className="mt-3 text-sm text-slate-300 light:text-slate-800">{item.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
