import AuthGuard from '@/auth/AuthGaurd'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>
}
