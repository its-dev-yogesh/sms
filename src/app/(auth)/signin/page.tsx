'use client'
import GuestGaurd from '@/auth/GuestGaurd'
import AuthGuard from '@/auth/GuestGaurd'
// App.tsx

import { useQueryLogin } from '@/services/auth/Login'
import useAuthStore from '@/store/auth.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

// Define the schema using Zod
const loginSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

// Define the form data type
type LoginFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { login } = useAuthStore()
  const router = useRouter()
  const { mutate, isPending, error } = useQueryLogin()
  // Use the useForm hook with the zodResolver and the schema
  const {
    reset,
    setError,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  // Function to handle form submission
  const onSubmit = async (data: any) => {
    console.log('🚀 ~ onSubmit ~ data:', data)

    // try {
    //   await login(data.email, data.password)
    // } catch (error: any) {
    //   console.error(error)
    //   reset()
    //   setError('email', {
    //     ...error,
    //     message: error.message
    //   })
    // }
    const credentials = {
      email: data.email,
      password: data.password
    }
    mutate(credentials)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="p-10 rounded-md border border-black"
        style={{ maxWidth: '300px', margin: '0 auto', padding: '20px' }}
      >
        <div className="flex flex-col gap-1" style={{ marginBottom: '10px' }}>
          <label>Username</label>
          <input
            {...register('email')}
            className="bg-white p-1 rounded-sm border border-black"
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1" style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            className="bg-white p-1 rounded-sm border border-black"
            {...register('password')}
          />
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>

        <button className="btn" type="submit">
          {isPending ? (
            <div className="flex flex-row items-center gap-2">
              <span>Logging</span>
              <span className="loading loading-spinner loading-sm "></span>
            </div>
          ) : (
            <span>Login</span>
          )}
        </button>
      </div>
    </form>
  )
}
