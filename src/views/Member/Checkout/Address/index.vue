<template>
  <h3 class="title">
    收货地址
  </h3>
  <div class="address">
    <div class="address-info">
      <p class="no-address" v-if="!defaultAddress.address">您需要先添加收货地址才可提交订单</p>
      <div class="has-address-info" v-else>
        <ul>
          <li><span>收&ensp;货&ensp;人：</span>{{ defaultAddress.receiver }}</li>
          <li><span>联系方式：</span>{{ defaultAddress.contact.slice(0, 3) + '****' + defaultAddress.contact.slice(-4) }}</li>
          <li><span>收货地址：</span>{{ defaultAddress.fullLocation + defaultAddress.address }}</li>
        </ul>
        <div class="address-update">
          <el-button type="warning" size="large" @click="editAddress">修改地址</el-button>
        </div>
      </div>
    </div>
    <div class="address-handle">
      <el-button type="primary" size="large" @click="dialogChangeAddress = true">切换地址</el-button>
      <el-button type="success" size="large" @click="handleAddAddress(addAddressFromRef)">添加地址</el-button>
    </div>
  </div>
  <el-dialog :lock-scroll="false" v-model="dialogAddAddress" :title="addAddressInfo.id ? '修改收货地址' : '添加收货地址'" center>
    <el-form ref="addAddressFromRef" :model="addAddressInfo" :rules="rules" label-position="right" label-width="200px">
      <el-form-item label="收货人：" prop="receiver">
        <el-col :span="12">
          <el-input v-model.trim="addAddressInfo.receiver" placeholder="请输入姓名" />
        </el-col>
      </el-form-item>
      <el-form-item label="手机号：" prop="contact">
        <el-col :span="12">
          <el-input v-model="addAddressInfo.contact" placeholder="请输入手机号" maxlength="11" type="tel" />
        </el-col>
      </el-form-item>
      <el-form-item label="地区：" prop="fullLocation">
        <el-col :span="12">
          <AddressOptions @area="area" :defaultAddress=addAddressInfo></AddressOptions>
        </el-col>
      </el-form-item>
      <el-form-item label="详细地址：" prop="address">
        <el-col :span="12">
          <el-input v-model.trim="addAddressInfo.address" placeholder="请输入详细地址" />
        </el-col>
      </el-form-item>
      <el-form-item label="邮政编码：" prop="postalCode">
        <el-col :span="12">
          <el-input v-model="addAddressInfo.postalCode" placeholder="请输入邮政编码" maxlength="6" />
        </el-col>
      </el-form-item>
      <el-form-item label="地址标签：" prop="addressTags">
        <el-col :span="12">
          <el-input v-model="addAddressInfo.addressTags" placeholder="请输入地址标签" />
        </el-col>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogAddAddress = false">取消</el-button>
        <el-button type="primary" @click="submitAddAddress(addAddressFromRef)">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog :lock-scroll="false" v-model="dialogChangeAddress" title="切换收货地址" width="40%">
    <ul class="consignee-list">
      <li class="consignee-item" :class="{ active: address.isDefault === '1' }"
        v-for="address in checkoutData.userAddresses" :key="address.id"
        @click="handleChangeAddress(checkoutData.userAddresses, address)">
        <p>收货人：{{ address.receiver }}</p>
        <p>联系方式：{{ address.contact.slice(0, 3) + '****' + address.contact.slice(-4) }}</p>
        <p>收货地址：{{ address.fullLocation + address.address }}</p>
      </li>
    </ul>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogChangeAddress = false">取消</el-button>
        <el-button type="primary" @click="submitChangeAddress">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import addresseeValidate from '@/hooks/addresseeValidate'
import memberApi, { AddAddressData, AreaData, } from '@/api/member'
import { useMemberStore } from '@/store/member'
import { storeToRefs } from 'pinia'
const memberStore = useMemberStore()
const { checkoutData } = storeToRefs(memberStore)
const dialogAddAddress = ref(false)
const dialogChangeAddress = ref(false)
const defaultAddress = ref<AddAddressData>({
  address: "",
  addressTags: null,
  cityCode: "",
  contact: "",
  countyCode: "",
  fullLocation: "",
  isDefault: "",
  postalCode: "",
  provinceCode: "",
  receiver: "",
  id: "",
})
// 添加地址所需的数据
let addAddressInfo = ref<AddAddressData>({
  address: "",
  addressTags: null,
  cityCode: "",
  contact: "",
  countyCode: "",
  fullLocation: "",
  isDefault: "",
  postalCode: "",
  provinceCode: "",
  receiver: "",
})
// 获取添加地址表单的DOM
const addAddressFromRef = ref<FormInstance>()
// 添加地址表单校验规则
const rules = reactive<FormRules>({
  address: [
    {
      required: true,
      message: '请输入详细地址',
      trigger: ['blur'],
    }
  ],
  receiver: [
    {
      required: true,
      validator: addresseeValidate.receiverValidate,
      trigger: ['blur'],
    }
  ],
  contact: [
    {
      required: true,
      validator: addresseeValidate.contactValidate,
      trigger: ['blur'],
    }
  ],
  fullLocation: [
    {
      required: true,
      message: '请选择地区',
      trigger: ['blur'],
    }
  ],
  postalCode: [
    {
      required: true,
      validator: addresseeValidate.postalCodeValidate,
      trigger: ['blur'],
    }
  ],
})
// 接收选择地区子组件传来的数据
const area = (value: AreaData) => {
  addAddressInfo.value = Object.assign(addAddressInfo.value, value)
}
// 点击添加地址
const handleAddAddress = (addAddressFromRef: FormInstance | undefined) => {
  dialogAddAddress.value = true
  if (!addAddressFromRef) return
  addAddressFromRef.resetFields()
  addAddressInfo.value = {
    address: "",
    addressTags: null,
    cityCode: "",
    contact: "",
    countyCode: "",
    fullLocation: "",
    isDefault: "",
    postalCode: "",
    provinceCode: "",
    receiver: ""
  }
}
// 点击添加地址和修改地址的提交
const submitAddAddress = async (addAddressFromRef: FormInstance | undefined) => {
  if (!addAddressFromRef) return
  await addAddressFromRef?.validate(async (valid, fields) => {
    if (valid) {
      try {
        // 将手动添加的地址,加入到store中,用于点击切换地址显示列表
        checkoutData.value.userAddresses.forEach((item) => {
          item.isDefault = '0'
        })
        // 将新添加的地址信息设为默认
        addAddressInfo.value.isDefault = '1'
        const result = await memberApi.reqAddAddress(addAddressInfo.value)
        // 用id判断是修改还是添加，如果是修改，将新修改的地址，用于页面显示
        if (addAddressInfo.value.id) {
          // 用浅拷贝,避免表单里的数据改动得到时候,地址展示栏也跟着改变
          defaultAddress.value = { ...addAddressInfo.value }
          defaultAddress.value.fullLocation = addAddressInfo.value.fullLocation.split(' ').join('')
          // 替换旧地址
          const index = checkoutData.value.userAddresses.findIndex(item => item.id === addAddressInfo.value.id)
          checkoutData.value.userAddresses.splice(index, 1, defaultAddress.value)
        } else {
          // 如果是新添加,则将新添加的增加在store中
          defaultAddress.value = { ...addAddressInfo.value }
          defaultAddress.value.fullLocation = addAddressInfo.value.fullLocation.split(' ').join('')
          checkoutData.value.userAddresses.push(defaultAddress.value)
        }
        dialogAddAddress.value = false
      } catch (error) {
        ElMessage.error('请求添加地址信息失败')
      }
    } else {
      ElMessage.warning('请输入完整的地址信息')
    }
  })
}
// 点击切换地址
const handleChangeAddress = (addressList: AddAddressData[], defaultAddress: AddAddressData) => {
  addressList.forEach((item) => {
    item.isDefault = '0'
  })
  defaultAddress.isDefault = '1'
}
// 点击切换地址的确定
const submitChangeAddress = () => {
  defaultAddress.value = checkoutData.value.userAddresses.find((item) => item.isDefault == '1') as AddAddressData
  dialogChangeAddress.value = false
}
// 点击修改地址
const editAddress = () => {
  // 用浅拷贝,避免表单里的数据改动得到时候,地址展示栏也跟着改变
  addAddressInfo.value = { ...checkoutData.value.userAddresses.find((item) => item.isDefault == '1') as AddAddressData }
  dialogAddAddress.value = true
}
watch(() => checkoutData.value.userAddresses, (newVal, oldVal) => {
  if (newVal.length) {
    defaultAddress.value = newVal.find((item) => item.isDefault == '1') as AddAddressData
  }
}, { immediate: true, deep: true })
</script>

<style lang="less" scoped>
.address {
  display: flex;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  border: 1px solid #f5f5f5;

  .address-info {
    flex: 1;

    .no-address {
      font-size: 14px;
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    .has-address-info {
      display: flex;
      align-items: center;
      padding: 20px;

      ul {
        flex: 1;

        li {
          text-align: left;
          line-height: 30px;
          font-size: 14px;

          span {
            display: inline-block;
            width: 70px;
            color: #999;
          }
        }
      }

    }

    .address-update {
      width: 160px;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .address-handle {
    width: 420px;
  }
}

.consignee-list {

  .consignee-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #f5f5f5;
    cursor: pointer;

    p {
      line-height: 30px;
    }

    &:hover {
      border-color: #27ba9b;
      background: #e6faf6;
    }
  }

  .active {
    border-color: #27ba9b;
    background: #e6faf6;
  }

}

:deep(.el-form) {
  .el-form-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .el-form-item__label {
      text-align: center;
    }
  }
}

:deep(.el-dialog .el-dialog__footer) {
  text-align: center !important;
}
</style>