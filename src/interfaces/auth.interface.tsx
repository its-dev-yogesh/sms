import { UserData } from './user.interface';

export interface AuthInterface {
  isAuthPending: boolean;
  isAuthenticated: boolean;
  userData: UserData | null;
}
