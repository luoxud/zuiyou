<template>
  <div class="hor-overflow">
    <span :class="{item: true, active: item.cur}" v-for="(item, $index) in data" :key="item.id" @click="switchTab($index)">{{ item.name }}</span>
  </div>
</template>

<script>

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        curIndex: 0
      }
    },
    methods: {
      switchTab (index) {
        this.$set(this.data[this.curIndex], 'cur', false)
        this.$set(this.data[index], 'cur', true)

        // 切换指定tab
        this.store.commit('setState', {
          attr: '$topicTab',
          value: index
        })

        // 保存当前索引
        this.curIndex = index
      }
    }
  }
</script>

<style scoped>
  .hor-overflow {
    background-color: #fff;
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }
  .hor-overflow .item {
    padding: .3rem;
    font-size: .38rem;
    position: relative;
    font-weight: bold;
  }
  .hor-overflow .item.active {
    color: #42bcf6;
  }
  .hor-overflow .item.active:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #42bcf6;
    height: .1rem;
    width: .3rem;
    border-radius: 50%;
  }
</style>
