import request from '@/utils/request'

export interface LoginParams {
  account?: string
  password?: string
  mobile?: string
  code?: string
}
export interface UserInfo {
  account: string
  avatar: string
  birthday: string
  cityCode: string
  gender: string
  id: string
  mobile: string
  nickname: string
  profession: string
  provinceCode: string
  token: string
}

export default {
  reqLogin(loginParams: LoginParams) {
    if (loginParams.account) {
      return request.post<any, UserInfo>('/login', loginParams)
    } else {
      return request.post<any, UserInfo>('/login/code', loginParams)
    }
  }
}