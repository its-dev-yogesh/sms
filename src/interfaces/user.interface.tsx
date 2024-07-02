export interface UserData {
  email: string;
  id: string;
  accessToken?: string;
  token?: string; // !This Need to be Deleted
  refreshToken: string;
}
