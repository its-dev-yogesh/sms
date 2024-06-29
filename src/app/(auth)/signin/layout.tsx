import GuestGaurd from '@/auth/GuestGaurd'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <GuestGaurd>{children}</GuestGaurd>
}
