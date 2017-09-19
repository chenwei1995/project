<template>
  <div class="goods-info">
    <!-- banner部分 -->
    <swiper :options="swiperOption" ref="goodsImgs">
      <swiper-slide v-for="item in data.imgs">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- end -->
    <!-- goods title -->
    <div class="goods-title">
      {{data.title}}
    </div>
    <!-- end -->
    <!-- 价格 -->
    <div class="goods-price pl-10 mt-10 fs-14 pb-10">
      <span class="color-999 pr-10">价格</span>
      <em class="ft-nm color-red ft-wt">
        {{Number(count.count*data.price).toFixed(2)}}
      </em>
      <span class="color-999">元</span>
    </div>
    <!-- end -->
    <!-- 选择件数 -->
    <div class="goods-select pl-10 fs-14 border-t pt-10 pb-10 border-b">
      <span class="color-999 pr-10">已选</span>
      <div class="inline color-666">
        {{count.count}}件
        <label>
          <input type="checkbox" v-model="flag" class="showhide" />
          <span>{{submitDATA.version}}</span>
        </label>
      </div>
      <!-- select-active -->
      <div :class="{'fixed-select': true, 'color-666': true, active: flag}">
        <label>
          <input type="checkbox" v-model="flag" class="showhide" />
          <div class="close">x</div>
        </label>
        <h5 class="pb-10 color-666">
          <span class="pr-10">价格</span>
          <span class="color-red">{{Number(count.count*data.price).toFixed(2)}}</span>
        </h5>
        <div class="pb-10 select-version" v-if="data.list.length">
          <em class="ft-nm">选择</em>
          <span>
            <label :class="{'ml-10':true, active: item == submitDATA.version}" v-for="(item,index) in data.list">
              <input type="radio" name="a" v-model="submitDATA.version" :value="item">
              {{item}}
            </label>
          </span>
        </div>
        <div>
          <span class="pr-10">数量</span>
          <span class="text-center">
            <button type="button" name="button" @click="decrement">-</button>
            <input type="text" v-model="count.count" class="text-center">
            <button type="button" name="button" @click="increment">+</button>
          </span>
        </div>
      </div>
      <!-- end -->
    </div>
    <!-- end -->
    <!-- 提交 -->
    <div class="fixed-goods-wrap">
      <button type="button" class="border-r" @click="submitData">购买</button>
      <button type="button">加入购物车</button>
    </div>
    <!-- end -->
  </div>
</template>
<script>
export default {
  name: 'goodsInfo',
  data: () => ({
    data: {
      list: []
    },
    flag: false,
    swiperOption: {
      notNextTick: true,
      pagination: '.swiper-pagination',
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 3,
      autoplayDisableOnInteraction: false
    },
    submitDATA: {
      count: 0,
      price: 0,
      version: ''
    }
  }),
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    submitData () {
      this.submitDATA = {
        count: this.count.count,
        price: this.count.count * this.data.price,
        version: this.submitDATA.version
      }
      console.log(this.submitDATA)
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    count () {
      return this.$store.state.count
    },
    goodsInfo () {
      return this.$store.state.goods.info
    }
  },
  mounted () {
    this.data = this.goodsInfo
    this.submitDATA.version = this.data.list[0]
  },
  destroyed () {
    this.count.count = 1
  }
}
</script>
<style lang="scss" scoped>
  .goods-info {
    padding-bottom: 45px;

    .showhide {
      opacity: 0;
    }
  }
  .swiper-container-horizontal {
    margin-top: 1px;

    img {
      width: 100%;
      display: block;
    }
  }
  .goods-title {
    font-size: 13px;
    background-color: #eee;
    line-height: 25px;
    margin-top: 10px;
    color: #666;
    text-indent: 1em;
    padding: 10px;
  }
  .fixed-select {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    transition: 0.5s all linear;
    transform: translate(0,100%);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    z-index: 1;

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #999;
    }

    button {
      width: 20px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #ddd;
      vertical-align: middle;
    }

    input {
      width: 30px;
      height: 18px;
      border: 1px solid #ddd;
      vertical-align: middle;
    }
  }
  .active {
    transform: translate(0,0);
  }
  .fixed-goods-wrap {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;

    button {
      width: 50%;
      box-sizing: border-box;
      border: 0;
      float: left;
      height: 45px;
      background-color: #b22;
      color: #fff;
      line-height: 45px;

      &:last-child {
        background-color: #eee;
        color: #666;
      }
    }
  }
  .select-version {
    overflow: hidden;
    label {
      padding: 0 10px;
      font-size: 14px;
      line-height: 26px;
      border: 1px solid #ddd;
      height: 26px;
      box-sizing: border-box;
      display: inline-block;
      border-radius: 4px;
      position: relative;
      margin-bottom: 10px;
    }
    input[type=radio] {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
    span {
      float: left;
      width: 86%;
    }
    em {
      float: left;
    }

    .active {
      border-color: #c22;
      color: #c22;
    }
  }
</style>
