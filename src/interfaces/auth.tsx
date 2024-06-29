interface UserData {
  userId: string
  _id: string
  accessToken: string
}

interface DataWrapper {
  data: UserData
  message: string
}

interface LoginApiResponse {
  status: number
  message: string
  data: DataWrapper
}
interface CredentialInterface {
  email: string
  password: string
}

export type { UserData, LoginApiResponse, CredentialInterface }
