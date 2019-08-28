<template>
  <nav>
    <ul>
      <!--         <li>全部合同</li>-->
      <!--         <li>价格排序</li>-->
      <!--         <li>销量排序</li>-->
      <li v-for="(item, index) in data" :key="index" :id="item.id" @click="pitch(item.id)" :class="item.id === id? 'ys':''">{{item.name}}</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'task',
    data () {
      return {
        id: 1,
        data: [
          {name: '全部合同', id: 1},
          {name: '价格排序', id: 2},
          {name: '销量排序', id: 3}
        ]
      }
    },
    methods: {
      pitch (id) {
        this.id = id
        this.$emit('pitch', this.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  nav>ul{
    display: flex;
    text-align: center;
    margin-top: -0.255rem;
    li{
      flex: 1;
      font-size: 16px;
      text-align: center;
      color: #009688;
      background: #f3f4f6;
    }
    .ys{
      border-bottom:2px #24BFA0 solid;
    }
  }

</style>
