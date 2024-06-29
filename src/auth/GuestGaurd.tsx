'use client'
import { useEffect } from 'react'

import useAuthStore from '@/store/auth.store'
import { PATH_DASHBOARD } from '@/routes/path'
import LoadingScreen from '@/components/loader/screen-loader/loading'
import { useRouter } from 'next/navigation'

interface GuestGaurdProps {
  children: React.ReactNode
}

export default function GuestGaurd({ children }: GuestGaurdProps) {
  const router = useRouter()
  const { isAuthenticated, isInitialized, initialize } = useAuthStore()
  useEffect(() => {
    initialize()
  }, [initialize])
  useEffect(() => {
    if (isAuthenticated) {
      router.push(PATH_DASHBOARD.root)
    }
  }, [isAuthenticated, router.push])

  if (isInitialized === isAuthenticated) {
    return <LoadingScreen />
  }
  if (!isAuthenticated) return <>{children}</>
}
