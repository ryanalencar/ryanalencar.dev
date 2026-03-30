import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import type { PortfolioTranslation } from "../../data/portfolio/types"

type RecentProjectsProps = {
  t: PortfolioTranslation
}

export function RecentProjects({ t }: RecentProjectsProps) {
  return (
    <section id="projects" className="reveal space-y-5">
      <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} description={t.projects.intro} />

      <div className="grid gap-3">
        {t.projects.list.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.labels.openProject}: ${project.name}`}
            className="group project-item"
          >
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              loading="lazy"
              decoding="async"
              width={140}
              height={90}
              className="h-20 w-32 rounded-xl border border-white/10 object-cover light:border-slate-300"
            />
            <div className="flex-1">
              <h3 className="text-base font-bold text-white light:text-[#1a1a27]">{project.name}</h3>
              <p className="text-xs uppercase tracking-[0.14em] text-violet-300 light:text-violet-800">{project.type}</p>
            </div>
            <span className="inline-flex rounded-full border border-violet-400/50 p-2 text-violet-200 transition group-hover:bg-violet-500/20 light:border-violet-300 light:text-violet-700 light:group-hover:bg-violet-200 light:group-hover:text-violet-900">
              <Icon name="link" className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
