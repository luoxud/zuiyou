<template>
  <div id="app">
    <Menu :module="$curFootModule" v-if="$isMenu" :homeTab="$homeTab" :genpaiTab="$genpaiTab"></Menu>
    <router-view/>
    <Foot v-if="$isFoot"></Foot>
  </div>
</template>

<script>
import Menu from './components/menu'
import Foot from './components/foot'

export default {
  name: 'App',
  computed: {
    $curFootModule () {
      return this.store.state.$footModule
    },
    $isMenu () {
      return this.store.state.$isMenu
    },
    $isFoot () {
      return this.store.state.$isFoot
    },
    $homeTab () {
      return this.store.state.$homeTab
    },
    $genpaiTab () {
      return this.store.state.$genpaiTab
    }
  },
  components: {
    Menu,
    Foot
  }
}
</script>

<style>
</style>
