import { LoginApiResponse, CredentialInterface } from '@/interfaces/auth'
import useAuthStore from '@/store/auth.store'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useQueryLogin = () => {
  // Mutations
  const { login } = useAuthStore()
  const { mutate, isPending, error } = useMutation({
    mutationKey: ['_useQueryLogin'],
    mutationFn: async (credentials: CredentialInterface) => {
      const res = await login(credentials.email, credentials.password)
      return res
    }
  })
  return {
    mutate,
    isPending,
    error
  }
}
