import { UserData } from '@/interfaces';

export interface LoginResponse {
  token?: unknown; // !this needs to be deleted
  data: UserData;
  message: string;
}
