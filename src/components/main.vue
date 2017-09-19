<template>
  <div class="main">
    <web-nav></web-nav>
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import navslide from '@/components/public/navslide'
export default {
  name: 'main',
  components: {
    'web-nav': navslide
  }
}
</script>
