<template>
  <div id="content-container">
    <NavigationBar />
    <Header />
    <main>
      <JobDesc />
      <ContactSection />
      <SkillsSection />
    </main>

    <Footer />
  </div>
</template>

<script>
import Vue from "vue"
import NavigationBar from "@/components/individual/NavigationBar.vue"
import Header from "@/components/individual/Header.vue"
import JobDesc from "@/components/individual/JobDesc.vue"
import ContactSection from "@/components/sections/ContactSection.vue"
import SkillsSection from "@/components/sections/SkillsSection.vue"
import Footer from "@/components/individual/Footer.vue"

export default Vue.extend({
  name: "IndexPage",
  components: {Header, JobDesc, ContactSection, SkillsSection, Footer, NavigationBar},
  head() {
    return {
      title: "louis1001"
    }
  }
})
</script>

<style lang="sass">
@import '@/static/styles/reset.scss'
@import '@/static/styles/basics.sass'
@import '@/static/styles/font_styles.sass'

body
  position: relative
  margin: 0
  overflow-x: hidden

#content-container
  max-width: 1400px
  margin: 0 auto

main
  padding: 0 40px

h4
  margin: 10px 0

@media screen and (max-width: 720px)
  main
    padding: 0 10px
</style>
