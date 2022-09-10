<template>
  <div id="main-container">
    <NavigationBar />
    <h2>My work</h2>
    <h1>at InnoTest</h1>
  </div>
</template>

<script>
import NavigationBar from "~/components/individual/NavigationBar.vue";

export default {
  components: { NavigationBar}
}

</script>

<style lang="sass">
@import '@/static/styles/reset.scss'
@import '@/static/styles/basics.sass'

@import '@/static/styles/font_styles.sass'

body
  min-height: 120vh

</style>
