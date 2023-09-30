import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HafiDev',
  description: 'Junior Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar logo={''} containerStyle="header"/>
        <main>
        {children}
        </main>
        <Footer logo={''} containerStyle="footer-blocks"/>
        </body>
    </html>
  )
}
