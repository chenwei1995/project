<template>
  <div class="goodsDetail">
    <div class="gooods-detail-wrap" v-for="item in data">
      <div class="clearfix vip-head">
        <router-link to="/order" class="left">﹤订单</router-link>
        <span>{{item.name}}</span>
      </div>
      <div class="goods-content">
        <div class="goods-nav border-t border-b">
          <router-link :to="{path: '/buy/'+$route.params.id+'/'}" class="border-r">首页</router-link>
          <router-link :to="{path: '/buy/info/'+$route.params.id+''}" class="border-r">详情</router-link>
          <router-link :to="{path: '/buy/config/'+$route.params.id+''}">售后</router-link>
        </div>
        <div class="content">
          <transition name="bounce" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsDetail',
  data: () => ({
    data: []
  }),
  computed: {
    goodsInfo () {
      return this.$store.state.goods
    }
  },
  methods: {
    getGoods () {
      const self = this
      this.$axios.get(`http://localhost:8080/static/data/${this.$route.params.id}/goods.json`)
        .then(function (data) {
          self.data = data.data
          self.goodsInfo.info = data.data[0].detail
          self.goodsInfo.detail = data.data[0].particulars
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getGoods()
  }
}
</script>
<style lang="scss" scoped>
.vip-head {
  height: 45px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
  text-align: center;
  font-size: 16px;
  line-height: 45px;
  font-family: 'microsoft yahei';
  position: relative;

  a {
    font-size: 14px;
    color: #666;
    position: relative;
    margin-left: 10px;
    z-index: 1;
    line-height: 45px;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
.goods-nav {
  text-align: center;
  font-size: 0;
  margin-top: 10px;

  a {
    font-size: 14px;
    display: inline-block;
    line-height: 40px;
    width: 33.33%;
    box-sizing: border-box;
    color: #333;
  }
}
</style>
