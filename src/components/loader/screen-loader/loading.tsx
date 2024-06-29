import { useState, useEffect, ReactNode } from 'react'
import { motion as m } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const StyledRoot = ({ children }: { children: ReactNode }) => (
  <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 z-9998">
    {children}
  </div>
)

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <StyledRoot>
      <m.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1]
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity
        }}
      >
        <Icon icon="mingcute:dashboard-fill" width={50} />
      </m.div>

      <div className="absolute w-24 h-24 border-3 border-primary-dark-24 animate-spin rounded-full" />

      <div className="absolute w-28 h-28 border-8 border-primary-dark-24 rounded-full animate-ping" />
    </StyledRoot>
  )
}
