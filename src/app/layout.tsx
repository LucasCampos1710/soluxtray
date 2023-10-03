import Nav from '@/components/Header'
import './globals.css'
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Solux Creative',
  description: 'Solux Creative empresa especializada em e-Commerce e criação de sites',
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
