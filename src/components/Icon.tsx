type IconProps = {
  name: 'github' | 'linkedin' | 'instagram' | 'email' | 'arrow' | 'link'
  className?: string
}

export function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.86-2.79.62-3.38-1.22-3.38-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.23-.26-4.58-1.14-4.58-5.08 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.98c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.6 5.08.36.32.69.95.69 1.93 0 1.39-.01 2.51-.01 2.86 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M6.94 8.87H3.56V20h3.38V8.87Zm.22-3.44C7.15 4.41 6.39 3.6 5.26 3.6c-1.13 0-1.89.81-1.89 1.83s.74 1.83 1.86 1.83h.02c1.15 0 1.91-.8 1.91-1.83Zm5.02 14.57h3.38v-6.2c0-.33.02-.66.12-.9.27-.66.89-1.35 1.93-1.35 1.36 0 1.9 1.06 1.9 2.62V20h3.38v-6.61c0-3.54-1.85-5.19-4.32-5.19-2.02 0-2.89 1.14-3.39 1.93h.02V8.87h-3.38c.04.84 0 11.13 0 11.13Z" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0-2C3.47 0 .01 3.46.01 7.74v8.52C-.01 20.53 3.45 24 7.73 24h8.54c4.28-.01 7.74-3.47 7.74-7.75V7.74C24 .01 20.53-.01 16.25-.01h-8.5Z" />
        <path d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.83a3.08 3.08 0 1 1 .001-6.161A3.08 3.08 0 0 1 12 15.08Z" />
        <circle cx="16.5" cy="7.5" r="1.5" />
      </svg>
    )
  }

  if (name === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2.75" y="5" width="18.5" height="14" rx="2.5" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (name === 'link') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.5 16.5a4 4 0 0 1 0-5.66l3.34-3.34a4 4 0 0 1 5.66 5.66L15 14.66" />
        <path d="M16.5 7.5a4 4 0 0 1 0 5.66l-3.34 3.34a4 4 0 0 1-5.66-5.66L9 9.34" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
