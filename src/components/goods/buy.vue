<template>
  <div id="test">
    <span>{{count.count}}</span>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <table>
      <tr>
        <td>序号</td>
        <td>名称</td>
        <td>价格</td>
        <td>数量</td>
        <td>合计</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,index) in message">
        <td>{{index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}元</td>
        <td>
          <button type="button" name="button" @click="addNums(index)">+</button>
          <input type="text" v-model="item.nums">
          <button type="button" name="button" @click="redNums(index)">-</button>
        </td>
        <td>{{item.nums*item.price}}元</td>
        <td><button type="button" name="button" @click="removeGoods(index,item.name)">删除</button></td>
      </tr>
      <tr>
        <td colspan="1">总计</td>
        <td colspan="5" style="text-align:right;">{{totalPrice ()}}元</td>
      </tr>
    </table>
    <router-link to="/">跳转至登录页</router-link>
  </div>
</template>
<script>
export default {
  name: 'test',
  data: () => ({
    message: [{
      'name': '机器人',
      'price': '150',
      'nums': '1'
    },
    {
      'name': '苹果',
      'price': '18',
      'nums': '1'
    },
    {
      'name': '西瓜',
      'price': '30',
      'nums': '1'
    }]
  }),
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    addNums (index) {
      let count = this.message[index]
      count.nums++      
    },
    redNums (index) {
      let count = this.message[index]
      if (count.nums === 1) {
        return
      }
      count.nums--
    },
    totalPrice () {
      let result = 0
      this.message.forEach(function (item, index) {
        result += item.nums * item.price
      })
      return result
    },
    removeGoods (index, name) {
      if (confirm('确认删除' + name + '?')) {
        this.message.splice(index, 1)
        alert('成功删除' + name)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  table {
    width: 500px;
    margin: 50px auto;

    td{
      border: 1px solid #ddd;
      text-align: center;
      padding: 15px;

      input {
        width: 40px;
        text-align: center;
      }
    }
  }
</style>
