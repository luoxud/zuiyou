<template>
  <div class="index">
    <List :data="data[$homeTab]"></List>
  </div>
</template>

<script>
import List from './list'

export default {
  name: 'index',
  beforeRouteEnter (to, form, next) {
    next((vm) => {
      vm.store.commit('setState', {
        attr: '$footModule',
        value: 'home'
      })
      vm.store.commit('setState', {
        attr: '$isMenu',
        value: true
      })
      vm.store.commit('setState', {
        attr: '$isFoot',
        value: true
      })
    })
  },
  data () {
    return {
      data: {
        tuijian: [
          {
            name: '这么萌你见过吗',
            avater: '//lxd123.com/images/90593124.jpg',
            isShare: true,
            review: {
              text: '我们村里人最会玩～',
              list: [
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750297/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750297/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750298/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750300/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750301/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/143750302/sz/148'
                }
              ],
              share: 100,
              comment: 888,
              likes: '8.9k'
            }
          },
          {
            name: '这么萌你见过吗',
            avater: 'https://file.izuiyou.com/account/avatar/id/145027582',
            review: {
              text: '送我上去',
              list: [
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381603/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381613/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381623/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381624/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381642/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381644/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381651/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381662/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/147381133/sz/148'
                }
              ],
              share: 100,
              comment: 888,
              likes: '8.9k'
            }
          }
        ],
        video: [
          
          {
            name: '这么萌你见过吗',
            avater: 'https://file.izuiyou.com/account/avatar/id/36615776',
            review: {
              list: [
                {
                  avater: 'https://file.izuiyou.com/img/view/id/164428180/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/164428181/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/164428182/sz/148'
                },
                {
                  avater: 'https://file.izuiyou.com/img/view/id/164428183/sz/148'
                }
              ],
              share: 100,
              comment: 888,
              likes: '8.9k'
            }
          }
        ],
        guanzhu: [
          {
            name: '这么萌你见过吗',
            avater: '//lxd123.com/images/90593124.jpg',
            isShare: true,
            review: {
              text: '我们村里人最会玩～',
              list: [
                {
                  avater: '//lxd123.com/images/149.jpg'
                },
                {
                  avater: '//lxd123.com/images/150.jpg'
                },
                {
                  avater: '//lxd123.com/images/151.jpg'
                },
                {
                  avater: '//lxd123.com/images/152.jpg'
                },
                {
                  avater: '//lxd123.com/images/153.jpg'
                },
                {
                  avater: '//lxd123.com/images/154.jpg'
                }
              ],
              share: 100,
              comment: 888,
              likes: '8.9k'
            }
          },
          {
            name: '这么萌你见过吗',
            avater: '//lxd123.com/images/90593124.jpg',
            review: {
              text: '我们村里人最会玩～',
              list: [
                {
                  avater: '//lxd123.com/images/149.jpg'
                },
                {
                  avater: '//lxd123.com/images/149.jpg'
                },
                {
                  avater: '//lxd123.com/images/149.jpg'
                },
                {
                  avater: '//lxd123.com/images/149.jpg'
                }
              ],
              share: 100,
              comment: 888,
              likes: '8.9k'
            }
          }
        ]
      }
    }
  },
  computed: {
    $homeTab () {
      return this.store.state.$homeTab
    }
  },
  components: {
    List
  }
}
</script>

<style scoped>
  .index {
    padding: 1.3rem 0;
  }
</style>
