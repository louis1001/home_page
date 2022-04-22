<template>
  <header>
    <img width="200" height="200" src="imgs/profile.jpg" alt="MiFoto" />
    <div>
      <h1 class="main-name">Luis González</h1>
      <h2 id="career">Programmer and Web Developer</h2>
    </div>
  </header>
</template>

<style lang="sass" scoped>
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
  font-family: 'Amaranth', sans-serif
  margin: .1em
  color: var(--heading-col)

h2
  font-size: 1.8rem
  font-family: 'Lucida Sans', sans-serif
  font-weight: 500
  color: var(--sub-heading-col)
  text-align: left

header img
  max-width: 200px
  border-radius: 100%

  animation: 240s 20s infinite linear rotate-slowly

@media screen and (max-width: 720px)
  header
    min-height: unset
</style>
