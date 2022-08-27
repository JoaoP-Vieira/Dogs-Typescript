import {
  IUserLoginReq,
  IUserLoginRes,
  IUserRegisterReq,
  IUserRegisterRes
} from './IUser'

export default interface IUserService {
  Login(params: IUserLoginReq): Promise<IUserLoginRes>
  Register(params: IUserRegisterReq): Promise<IUserRegisterRes>
}
