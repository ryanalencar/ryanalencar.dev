import type { PortfolioTranslation } from '../../data/portfolio/types'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'

type DesignThoughtsProps = {
  t: PortfolioTranslation
}

export function DesignThoughts({ t }: DesignThoughtsProps) {
  return (
    <section id="thoughts" className="reveal space-y-5">
      <SectionHeading title={t.thoughts.title} subtitle={t.thoughts.subtitle} description={t.thoughts.intro} />

      <div className="grid gap-3">
        {t.thoughts.posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.labels.readArticle}: ${post.title}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-400/55 hover:shadow-[0_0_16px_rgba(168,85,247,0.28)] light:border-slate-300 light:bg-white"
          >
            <h3 className="text-base font-semibold text-slate-100 light:text-slate-800">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300 light:text-slate-800">{post.description}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 light:text-slate-700">
              <span>
                {post.date} · {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1 text-violet-200 transition-transform group-hover:translate-x-0.5 light:text-violet-700">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
