import Nav from '@/components/Header'
import './globals.css'
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Solux Creative',
  description: 'Site da solux creative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div>
        {children}
        <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  )
}
