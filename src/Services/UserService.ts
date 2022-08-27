import {
  IUserLoginReq,
  IUserLoginRes,
  IUserRegisterReq,
  IUserRegisterRes
} from '../Interfaces/IUser'
import IUserService from '../Interfaces/IUserService'

export default class UserService implements IUserService {
  async Register(params: IUserRegisterReq): Promise<IUserRegisterRes> {
    let res = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(params)
      }
    )

    let json = await res.json()

    return json
  }

  async Login(params: IUserLoginReq): Promise<IUserLoginRes> {
    let res = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(params)
      }
    )

    let json = await res.json()

    return json
  }
}
