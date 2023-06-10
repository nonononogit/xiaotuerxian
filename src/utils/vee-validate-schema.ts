export default {
  // 用户名校验
  account(value: string) {
    if (!value) return '请输入用户名'
    // 规则：字母开头6-20字符之间
    // if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
    return true
  },
  // 密码校验
  password(value: string) {
    if (!value) return '请输入密码'
    // 规则：密码格式6-24个字符
    // if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    return true
  },
  mobile(value: string) {
    if (!value) return '请输入手机号'
    // 规则：1开头 3-9 之间  9个数字
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式不对'
    return true
  },
  code(value: string) {
    if (!value) return '请输入短信验证码'
    // 规则： 6个数字
    if (!/^\d{6}$/.test(value)) return '短信验证码6个数字'
    return true
  },
  isAgree(value: string) {
    if (!value) return '请勾选登录协议'
    return true
  }
}