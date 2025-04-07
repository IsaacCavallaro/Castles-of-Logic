import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Castles of Logic',
  description: '',
  generator: '',
  icons: {
    icon: 'castles-of-logic-logo-mob.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
