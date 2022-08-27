export interface IUserData {
  username: string
  email: string
  password: string
}

export interface IUserLoginReq {
  username: string
  password: string
}

export interface IUserLoginRes {
  token?: string
  user_email?: string
  user_nicename?: string
  user_display_name?: string
  message?: string | undefined
}

export interface IUserRegisterReq extends IUserData {}

export interface IUserRegisterRes {
  message: string | undefined
}
