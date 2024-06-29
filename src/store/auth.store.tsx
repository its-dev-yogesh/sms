import { create } from 'zustand'
import axios from '@/utils/axios/axios'
import localStorageAvailable from '@/utils/localStorageAvailable'
import { isValidToken, setSession } from '@/utils/auth/authUtills'

interface User {
  id: string
  email: string
  [key: string]: any
}

interface AuthState {
  isInitialized: boolean
  isAuthenticated: boolean
  user: User | null
  initialize: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>
  logout: () => void
}

const useAuthStore = create<AuthState>(set => ({
  isInitialized: true,
  isAuthenticated: false,
  user: null,
  initialize: async () => {
    const storageAvailable = localStorageAvailable()
    try {
      const accessToken = storageAvailable
        ? localStorage.getItem('accessToken')
        : ''

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken)
        const response = await axios.get('/api/account/my-account')
        const { user } = response.data

        set({
          isInitialized: true,
          isAuthenticated: true,
          user
        })
      } else {
        set({
          isInitialized: true,
          isAuthenticated: false,
          user: null
        })
      }
    } catch (error) {
      console.error(error)
      set({
        isInitialized: true,
        isAuthenticated: false,
        user: null
      })
    }
  },
  login: async (email: string, password: string) => {
    const response = await axios.post('/api/account/login', { email, password })
    const { accessToken, user } = response.data
    localStorage.setItem('accessToken', accessToken)
    setSession(accessToken)
    set({
      isAuthenticated: true,
      user
    })
  },
  register: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName
    })
    const { accessToken, user } = response.data

    localStorage.setItem('accessToken', accessToken)

    set({
      isAuthenticated: true,
      user
    })
  },
  logout: () => {
    setSession(null)
    set({
      isAuthenticated: false,
      user: null
    })
  }
}))

export default useAuthStore
