// routes
import { PATH_AUTH } from '@/routes/path'
import axiosInstance from '@/utils/axios/axios'

// utils

import jwtDecode from 'jwt-decode'

// ----------------------------------------------------------------------

interface JwtPayload {
  exp: number
  [key: string]: any
}

// ----------------------------------------------------------------------

function decodeToken(token: string): JwtPayload {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  )

  return JSON.parse(jsonPayload)
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string | null): boolean => {
  if (!accessToken) {
    return false
  }

  const decoded: JwtPayload = decodeToken(accessToken)
  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

// ----------------------------------------------------------------------

export const tokenExpired = (exp: number): void => {
  let expiredTimer: NodeJS.Timeout | string | number | undefined

  const currentTime = Date.now()
  const timeLeft = exp * 1000 - currentTime

  clearTimeout(expiredTimer)

  expiredTimer = setTimeout(() => {
    alert('Token expired')

    localStorage.removeItem('accessToken')

    window.location.href = PATH_AUTH.login
  }, timeLeft)
}

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null): void => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    const { exp } = decodeToken(accessToken) // ~3 days by minimal server
    tokenExpired(exp)
  } else {
    localStorage.removeItem('accessToken')

    delete axiosInstance.defaults.headers.common.Authorization
  }
}
