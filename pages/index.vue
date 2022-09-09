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
  components: {Header, JobDesc, ContactSection, SkillsSection, Footer, NavigationBar}})
</script>

<style lang="sass">
@import '@/static/styles/reset.scss'
html
  --background-col: rgb(19, 19, 22)
  --main-col: rgb(219, 151, 95)
  --sub-heading-col: rgb(199, 207, 212)
  --sec-heading-col: rgb(170, 201, 241)
  --sec-heading-darker-col: rgb(71, 120, 183)
  --h4-col: rgb(124 150 195)
  --link-col: rgb(100, 123, 224)
  position: relative

body
  position: relative
  background: var(--background-col)
  color: var(--main-col)
  font-family: 'Source Code Pro', monospace
  font-weight: bold
  margin: 0
  overflow-x: hidden

#content-container
  max-width: 1400px
  margin: 0 auto

main
  padding: 0 40px

a
  color: var(--link-col)
  text-decoration: none

a:visited
  color: var(--link-col)

a:hover
  text-decoration: underline

*::selection
  background-color: rgb(56, 56, 56)
  color: var(--main-col)

h3
  color: var(--sec-heading-col)
  font-weight: 100
  text-decoration: underline
  font-size: 1.8rem

h4
  color: var(--h4-col)
  font-weight: lighter
  margin: 10px 0
  font-style: italic

@media screen and (max-width: 720px)
  main
    padding: 0 10px
</style>
