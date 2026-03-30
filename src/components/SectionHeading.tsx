type SectionHeadingProps = {
  title: string
  subtitle: string
  description?: string
}

export function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  return (
    <header className="space-y-2 text-center md:text-left">
      <h2 className="text-[clamp(2.1rem,10vw,2.8rem)] md:text-[clamp(6rem,6.2vw,3.6rem)] font-black uppercase leading-none tracking-[-0.02em] text-white light:text-[#13131c]">
        {title}
      </h2>
      <h2 className="text-[clamp(2rem,9vw,2.6rem)] md:text-[clamp(6rem,6.2vw,3.6rem)] font-black uppercase leading-none tracking-[-0.02em] text-white/18 light:text-slate-400">
        {subtitle}
      </h2>
      {description ? (
        <p className="mx-auto max-w-[72ch] pt-2 text-sm text-slate-300 light:text-slate-700 md:mx-0">
          {description}
        </p>
      ) : null}
    </header>
  )
}