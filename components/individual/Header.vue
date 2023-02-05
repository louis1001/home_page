<template>
  <header>
    <nuxt-img format="webp" placeholder quality="90" width="200" height="200" src="imgs/profile.jpg" alt="MiFoto" />
    <div>
      <h1 class="main-name">Luis González</h1>
      <h2 id="career">iOS and Web Developer</h2>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import '@/static/styles/font_styles.sass'

header
  display: grid
  align-content: center
  justify-items: center
  flex-direction: column
  align-items: center
  padding: 20px 0
  margin: 0 auto
  min-height: min(calc(100vh - 200px), 1000px)

h1
  font-size: 5rem
  margin: .1em 0

h2
  font-size: 1.8rem
  text-align: left

header img
  max-width: 200px
  border-radius: 100%

  animation: 240s 20s infinite linear rotate-slowly

@media screen and (max-width: 720px)
  html, body
    font-size: 10pt
  header
    min-height: unset
    margin-block: 2em
    padding-inline: 1em

  #career
    text-align: right
    padding-right: .5em

@media screen and (max-width: 370px)
  header img
    max-width: 8rem
    max-height: 8rem
    aspect-ratio: 1

  header h1
    font-size: 3rem
</style>
