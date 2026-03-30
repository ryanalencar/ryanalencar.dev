import type { SubmitEvent } from 'react'
import { Icon } from '../Icon'
import { SectionHeading } from '../SectionHeading'
import type { PortfolioTranslation } from "../../data/portfolio/types"

type WorkTogetherProps = {
  t: PortfolioTranslation
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void
}

export function WorkTogether({ t, onSubmit }: WorkTogetherProps) {
  return (
    <section id="contact" className="reveal space-y-5">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} description={t.contact.intro} />

      <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-3xl border border-violet-400/40 bg-violet-500/10 p-5 light:border-violet-300/70 light:bg-violet-50">
          <img
            src="/images/avatar-ryan.svg"
            alt={t.profile.avatarAlt}
            width={88}
            height={88}
            loading="lazy"
            decoding="async"
            className="h-22 w-22 rounded-2xl border border-violet-300/45"
          />
          <h3 className="mt-4 text-lg font-bold text-white light:text-[#151524]">{t.profile.name}</h3>
          <p className="text-sm text-slate-300 light:text-slate-800">{t.contact.cardDescription}</p>

          <ul className="mt-4 grid gap-2">
            {t.profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="inline-flex items-center gap-2 text-sm text-violet-200 transition hover:text-violet-100 light:text-violet-800"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-300/90 light:bg-white/94">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 light:text-slate-800">
              {t.contact.form.name}
            </label>
            <input id="name" name="name" type="text" autoComplete="name" required className="input-field" />
          </div>

          <div className="mt-4 grid gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 light:text-slate-800">
              {t.contact.form.email}
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className="input-field" />
          </div>

          <div className="mt-4 grid gap-2">
            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 light:text-slate-800">
              {t.contact.form.service}
            </label>
            <select id="service" name="service" className="input-field" required defaultValue="">
              <option value="" disabled>
                --
              </option>
              {t.contact.form.serviceOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 light:text-slate-800">
              {t.contact.form.message}
            </label>
            <textarea id="message" name="message" rows={5} required className="input-field resize-y" />
          </div>

          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-violet-400/60 bg-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.01] hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.55)]">
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
