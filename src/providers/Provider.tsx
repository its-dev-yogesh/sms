'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import QueryProvider from './QueryClientProvider'

const Provider = ({ children }: { children: ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>
}

export default Provider
