<template>
  <div>
    <NavigationBar />
    <div id="main-container">
      <header>
        <h2>My work</h2>
        <h1>at InnoTest</h1>
      </header>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis laudantium corporis provident distinctio consequatur iusto quis, quam ipsam necessitatibus minima tempora eaque obcaecati molestias minus commodi? Neque, obcaecati itaque!</p>
    </div>
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

#main-container
  margin: 0 auto
  padding: 40px 20px
  max-width: 900px

</style>
