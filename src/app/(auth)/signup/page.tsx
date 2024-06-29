'use client'
import useAuthStore from '@/store/auth.store'
import React, { useEffect } from 'react'

const MyComponent: React.FC = () => {
  const {
    isInitialized,
    isAuthenticated,
    user,
    initialize,
    login,
    register,
    logout
  } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  const handleLogin = async () => {
    await login('email@example.com', 'password')
  }

  const handleRegister = async () => {
    await register('email@example.com', 'password', 'First', 'Last')
  }

  const handleLogout = () => {
    logout()
  }

  if (!isInitialized) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  )
}

export default MyComponent
