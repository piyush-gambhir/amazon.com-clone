import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'

export default function page() {
  return (
    <div className="w-full h-full bg-light_gray">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}
