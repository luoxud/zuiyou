<template>
  <div class="topic-list">
    <Item v-for="item in data[topicTab]" :info="item" :key="item.id"></Item>
  </div>
</template>

<script>
  import Item from './item'
  export default {
    data () {
      return {
        data: {
          0: [
            {
              id: 1,
              avater: '//lxd123.com/images/IMG_1823_06.jpg'
            }
          ],
          1: [
            {
              id: 2,
              avater: '//lxd123.com/images/IMG_1823_08.jpg'
            }
          ],
          2: [
            {
              id: 3,
              avater: '//lxd123.com/images/IMG_1823_03.jpg'
            }
          ],
          3: [
            {
              id: 1,
              avater: '//lxd123.com/images/IMG_1823_06.jpg'
            }
          ],
          4: [
            {
              id: 2,
              avater: '//lxd123.com/images/IMG_1823_08.jpg'
            }
          ],
          5: [
            {
              id: 3,
              avater: '//lxd123.com/images/IMG_1823_03.jpg'
            }
          ],
          6: [
            {
              id: 2,
              avater: '//lxd123.com/images/IMG_1823_08.jpg'
            }
          ],
          7: [
            {
              id: 3,
              avater: '//lxd123.com/images/IMG_1823_03.jpg'
            }
          ]
        }
      }
    },
    computed: {
      topicTab () {
        return this.store.state.$topicTab
      }
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  .topic-list {
    margin-top: .2rem;
  }
</style>
