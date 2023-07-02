export default {
  receiverValidate(rule: any, value: any, callback: any) {
    if (value === '' || value.length < 1 || value.length > 6) {
      callback(new Error('请输入正确的姓名'))
    } else {
      callback()
    }
  },
  contactValidate(rule: any, value: any, callback: any) {
    let phone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (!phone.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  },
  postalCodeValidate(rule: any, value: any, callback: any) {
    if (!/^[1-9]\d{5}(?!\d)$/.test(value)) {
      callback(new Error('请输入正确的邮政编码'))
    } else {
      callback()
    }
  }
}

