<template>
  <div class="my-msg">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style scoped>
  .my-msg {
  	position: absolute;
  	left: 0;top: 0;right: 0;bottom: 0;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }
  .my-msg img {
  	width: 5.5rem;
  }
</style>
