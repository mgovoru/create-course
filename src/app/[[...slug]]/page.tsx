import { ClientOnly } from './client'

const totalPages = 10
// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  const params = [{ slug: [''] }, {
      slug: ["favicon.ico"]
    }]

  for (let i = 1; i <= totalPages; i++) {
    params.push({ slug: ['page', i.toString()] })
  }
  return params
}

export default function Page() {
  return <ClientOnly />
}
