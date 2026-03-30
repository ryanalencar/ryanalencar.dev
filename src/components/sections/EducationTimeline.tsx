import type { PortfolioTranslation } from '../../data/portfolio/types'
import { SectionHeading } from '../SectionHeading'

type EducationTimelineProps = {
  t: PortfolioTranslation
}

export function EducationTimeline({ t }: EducationTimelineProps) {
  return (
    <div className="space-y-5" aria-label={t.nav.education}>
      <SectionHeading title={t.education.title} subtitle={t.education.subtitle} description={t.education.intro} />

      <ol className="relative ml-2 grid gap-5 border-l border-violet-500/35 pl-6">
        {t.education.timeline.map((item) => (
          <li key={`${item.institution}-${item.period}`} className="relative rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-300 light:bg-white">
            <span className="absolute -left-[1.9375rem] top-6 h-3 w-3 rounded-full border border-violet-300 bg-violet-500 shadow-[0_0_14px_rgba(168,85,247,0.7)]" aria-hidden="true" />
            <h3 className="text-base font-bold text-white light:text-[#12121c]">{item.institution}</h3>
            <p className="mt-1 text-sm text-violet-300 light:text-violet-800">{item.degree}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-400 light:text-slate-700">{item.period}</p>
            <p className="mt-3 text-sm text-slate-300 light:text-slate-800">{item.fieldOfStudy}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
