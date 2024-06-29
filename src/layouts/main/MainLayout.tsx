// next
'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import React, { ReactNode } from 'react'

const Header = dynamic(() => import('@/sections/global/Header'), { ssr: false })
const Footer = dynamic(() => import('@/sections/global/Footer'), { ssr: false })

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className={`flex-grow ${isHome ? '' : 'pt-20 md:pt-28'}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
