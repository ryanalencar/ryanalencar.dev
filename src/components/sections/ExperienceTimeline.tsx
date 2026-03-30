import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { PortfolioTranslation } from "../../data/portfolio/types"
import { SectionHeading } from '../SectionHeading'

type ExperienceTimelineProps = {
  t: PortfolioTranslation
}

export function ExperienceTimeline({ t }: ExperienceTimelineProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioTranslation['experience']['timeline'][number] | null>(null)

  useEffect(() => {
    if (!selectedItem) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedItem])

  return (
    <section id="experience" className="reveal space-y-5" aria-label={t.labels.timeline}>
      <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} description={t.experience.intro} />

      <ol className="relative ml-2 grid gap-5 border-l border-violet-500/35 pl-6">
        {t.experience.timeline.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="absolute -left-7.75 top-6 h-3 w-3 rounded-full border border-violet-300 bg-violet-500 shadow-[0_0_14px_rgba(168,85,247,0.7)]" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="w-full cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-violet-400/55 hover:shadow-[0_0_18px_rgba(168,85,247,0.25)] light:border-slate-300 light:bg-white"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white light:text-[#12121c]">{item.company}</h3>
                <span className="text-xs text-violet-300 light:text-violet-800">{item.role}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400 light:text-slate-700">{item.period}</p>
              <p className="mt-3 text-sm text-slate-300 light:text-slate-800">{item.summary}</p>
              <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-violet-300 light:text-violet-700">
                Ver detalhes
              </span>
            </button>
          </li>
        ))}
      </ol>

      {selectedItem && typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/65 p-4 backdrop-blur-[2px] light:bg-slate-900/45"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedItem.company} details`}
              onClick={() => setSelectedItem(null)}
            >
              <article
                className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-violet-400/40 bg-[#101018] p-6 light:border-violet-300/70 light:bg-white"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white light:text-[#11111a]">{selectedItem.company}</h3>
                    <p className="mt-1 text-sm text-violet-300 light:text-violet-700">{selectedItem.role}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-400 light:text-slate-700">{selectedItem.period}</p>
                  </div>
                  <button
                    type="button"
                    className="cursor-pointer rounded-xl border border-white/15 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/60 hover:text-white light:border-slate-300 light:text-slate-700 light:hover:border-violet-500/70 light:hover:bg-violet-100 light:hover:text-violet-900"
                    onClick={() => setSelectedItem(null)}
                  >
                    Fechar
                  </button>
                </div>

                <p className="mt-5 text-sm text-slate-300 light:text-slate-800">{selectedItem.summary}</p>

                <div className="mt-6 space-y-6">
                  <section>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 light:text-violet-700">Highlights</h4>
                    <ul className="mt-3 grid gap-2">
                      {selectedItem.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 light:border-slate-300 light:bg-slate-50 light:text-slate-800">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 light:text-violet-700">Impact Metrics</h4>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {selectedItem.impactMetrics.map((metric) => (
                        <article key={`${metric.metric}-${metric.value}`} className="rounded-xl border border-violet-400/35 bg-violet-500/10 p-3 light:border-violet-300/60 light:bg-violet-50">
                          <p className="text-lg font-black text-white light:text-[#181827]">{metric.value}</p>
                          <p className="text-xs uppercase tracking-[0.12em] text-violet-200 light:text-violet-700">{metric.metric}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 light:text-violet-700">Technologies</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selectedItem.technologies.map((technology) => (
                        <li key={technology} className="rounded-full border border-violet-300/55 bg-violet-600/15 px-3 py-1 text-xs font-semibold text-violet-100 light:border-violet-400/70 light:bg-violet-500/10 light:text-violet-800">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
