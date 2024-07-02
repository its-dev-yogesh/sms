'use client';
import { closeDrawer, useAuthState } from '@/stores';
import DashboardLayout from './DashboardLayout';
import HomeLayout from './HomeLayout';
import { useEffect } from 'react';
import { TanstackQueryProvider } from '@/providers/TanstackQueryProvider';

export default function AuthGaurd({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthState();

  useEffect(() => {
    if (!isAuthenticated) closeDrawer();
  }, [isAuthenticated]);
  if (isAuthenticated)
    return (
      <DashboardLayout>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </DashboardLayout>
    );
  else return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
