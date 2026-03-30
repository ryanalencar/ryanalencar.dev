import type { PortfolioTranslation } from '../../data/portfolio/types'
import { Icon } from '../Icon'

type ProfileSidebarProps = {
  t: PortfolioTranslation
}

export function ProfileSidebar({ t }: ProfileSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start lg:pr-5">
      <div className="profile-card flex flex-col gap-6 overflow-hidden rounded-3xl p-5 lg:min-h-160 lg:p-6">
        <img
          src="/images/profile.png"
          alt={t.profile.avatarAlt}
          width={320}
          height={320}
          className="h-auto w-full max-h-110 rounded-2xl object-cover object-top"
        />

        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white light:text-[#14141f]">{t.profile.name}</h1>
          <p className="text-sm text-slate-300 light:text-slate-700">{t.profile.bio}</p>
          <p className="text-xs text-slate-400 light:text-slate-600">{t.profile.location}</p>
        </div>

        <nav aria-label={t.labels.socialLinks} className="mt-auto flex items-center justify-center gap-3">
          {t.profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={social.ariaLabel}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/45 bg-violet-500/10 text-violet-200 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/20 hover:text-violet-100 light:border-violet-300 light:bg-violet-100 light:text-violet-700 light:hover:border-violet-400 light:hover:bg-violet-200 light:hover:text-violet-800"
            >
              <Icon name={social.icon} className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
