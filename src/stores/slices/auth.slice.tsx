import { AuthInterface } from '@/interfaces/auth.interface';

export const createAuthSlice = (): AuthInterface => ({
  isAuthPending: false,
  isAuthenticated: false,
  userData: null
});
