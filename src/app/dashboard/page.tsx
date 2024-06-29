'use client'
import { PATH_AUTH } from '@/routes/path'
import useAuthStore from '@/store/auth.store'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { replace, push } = useRouter()
  const { logout } = useAuthStore()
  const handleLogout = async () => {
    try {
      logout()
      replace('/signin')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button className="" onClick={handleLogout}>
      Logout
    </button>
  )
}
