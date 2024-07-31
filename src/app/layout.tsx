import type { Metadata } from 'next'
import '../base/index.scss'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Week_4 React',
  description: 'Week_4 React',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
