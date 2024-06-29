'use client'
import { ReactNode, useEffect, useState } from 'react'

import LoadingScreen from '@/components/loader/screen-loader/loading'
import useAuthStore from '@/store/auth.store'
import { usePathname, useRouter } from 'next/navigation'

// ----------------------------------------------------------------------

interface AuthGuardProps {
  children: ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized, initialize } = useAuthStore()
  const pathname = usePathname()
  const { push } = useRouter()

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  )
  useEffect(() => {
    initialize()
  }, [initialize])

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation)
    }
    if (isAuthenticated) {
      setRequestedLocation(null)
    }
  }, [isAuthenticated, pathname, push, requestedLocation])

  if (!isInitialized) {
    return <LoadingScreen />
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <LoadingScreen />
  }

  return <>{children}</>
}
