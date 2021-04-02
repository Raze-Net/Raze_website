<template>
  <div class="main">
    <div class="token-sale-bg d-flex align-center justify-center">
      <div class="cui-content-center">
        <img :src="logo" alt="" class="token-logo">
        <h3>Token Generation Even</h3>
        <el-row type="flex">
          <el-col>
            <img :src="token1" alt="" class="w-100">
          </el-col>
          <el-col>
            <img :src="token2" alt="" class="w-100">
          </el-col>
          <el-col>
            <img :src="token3" alt="" class="w-100">
          </el-col>
          <el-col>
            <img :src="token4" alt="" class="w-100">
          </el-col>
        </el-row>
        <!-- <div class="d-flex">
          <img :src="token1" alt="" style="width: 400px">
          <img :src="token2" alt="" style="width: 400px">
          <img :src="token3" alt="" style="width: 400px">
          <img :src="token4" alt="" style="width: 400px">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/logo.png'
import token1 from '@/assets/img/token1.png'
import token2 from '@/assets/img/token2.png'
import token3 from '@/assets/img/token3.png'
import token4 from '@/assets/img/token4.png'
export default {
  name: 'TokenSale',
  data () {
    return {
      logo: logo,
      token1: token1,
      token2: token2,
      token3: token3,
      token4: token4
    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style type="text/less" lang="less" scoped>
</style>
