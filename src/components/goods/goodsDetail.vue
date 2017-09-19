<template>
  <div class="goods-detail">
    <div class="clearfix mt-10">
      <div class="flex-1 goods-title border-b border-t">
        主要
      </div>
      <div class="flex goods-table border-b" v-for="(item,index) in data.txt">
        <div class="flex-2 border-r bg-f7f7f7">
          {{item.name}}
        </div>
        <div class="flex-1">
          {{item.message}}
        </div>
      </div>
    </div>
    <div class="goods-imgs">
      <ul>
        <li v-for="(item,index) in data.imgs" :key="index"><img :src="item"></li>
      </ul>
    </div>
    <div class="fs-14 pr-10 pl-10 pb-10 pre-wrap color-666 bg-f7f7f7">
      {{data.title}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data: () => ({
    data: []
  }),
  computed: {
    goodsInfo () {
      return this.$store.state.goods
    }
  },
  mounted () {
    this.data = this.goodsInfo.detail
  }
}
</script>
<style lang="scss" scoped>
  .goods-detail {
    .goods-title {
      line-height: 34px;
      padding-left: 10px;
      background-color: #fafafa;
    }
  }
  .goods-imgs {
    img {
      width: 100%;
      display: block;
    }
  }
  .goods-table {
    div {
      line-height: 34px;
      padding: 0 10px;
    }
  }
  .pre-wrap {
    white-space:pre-wrap;
  }
</style>
