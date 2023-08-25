import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from './components/Header'
import Footer from './components/Footer'


export const metadata = {
  title: 'Amazon',
  description: 'Amazon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
