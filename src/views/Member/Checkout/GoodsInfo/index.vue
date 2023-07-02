<template>
  <h3 class="title">商品信息</h3>
  <div class="goods-list-container">
    <table>
      <thead>
        <tr>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>实付</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="goods in checkoutData.goods" :key="goods.id">
          <td class="goods-describe">
            <img :src="goods.picture" alt="">
            <div>
              <p>{{ goods.name }}</p>
              <p>{{ goods.attrsText }}</p>
            </div>
          </td>
          <td>¥{{ goods.price }}</td>
          <td>{{ goods.count }}</td>
          <td>¥{{ goods.totalPrice }}</td>
          <td>¥{{ goods.totalPayPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {useMemberStore} from '@/store/member'
import { storeToRefs } from 'pinia';
const memberStore = useMemberStore()
const {checkoutData} = storeToRefs(memberStore)
</script>

<style lang="less" scoped>
.goods-list-container {
  padding: 20px 0;
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
      th {
        background: #f5f5f5;
        font-weight: 400;
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid #f5f5f5;
      }
    }

    tbody {
      td {
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid #f5f5f5;
      }

      .goods-describe {
        display: flex;

        img {
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }

        p {
          text-align: left;
        }

        p:last-child {
          margin-top: 5px;
          color: #999;
        }
      }

      td:first-child {
        border-left: 1px solid #f5f5f5;
      }

      td:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}
</style>