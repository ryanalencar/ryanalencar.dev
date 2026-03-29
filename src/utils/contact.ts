export function createContactMailTo(
  name: string,
  email: string,
  service: string,
  message: string,
) {
  const subject = encodeURIComponent(`Contato via landing page - ${name}`)
  const body = encodeURIComponent(
    `Nome: ${name}\nEmail: ${email}\nServiço: ${service}\n\n${message}`,
  )
  return `mailto:contato@ryanalencar.dev?subject=${subject}&body=${body}`
}
