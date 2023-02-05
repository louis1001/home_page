<template>
  <section id="job-desc">
    <div class="job-sec">
      <strong>Currently:</strong>
      <span id="job-title">iOS Developer</span>
    </div>
    <div class="job-sec">
      <strong>At:</strong>
      <a href="https://regxi.com" target="_blank" id="job-place">
        <nuxt-img format="webp" placeholder quality="90" alt="" src="imgs/regxi.png" width="20" height="20" />Regxi
      </a>
    </div>
    <div class="job-sec">
      <span class="highlighted">Open to work!</span>
    </div>
  </section>
</template>

<style lang="sass" scoped>
#job-desc
  position: fixed
  left: 10px
  top: 50px
  font-size: 0.9rem
  max-width: 285px
  background: rgb(27, 27, 30)
  box-shadow: 5px 5px 0 1px #0001
  border-radius: 8px
  padding: 10px

  &>*
    display: block
    width: auto
    text-align: left

  img
    vertical-align: middle

  a,
  span
    display: inline
    font-size: 1.2em
    color: var(--sec-heading-col)
    text-decoration: underline
    text-decoration-style: dashed
    text-decoration-color: var(--sub-heading-col)

  a:hover
    text-decoration-style: wavy

  strong
    display: block
    font-size: 1em
    color: var(--sec-heading-darker-col)

  .job-sec
    margin-top: 10px

    &:first-child
      margin-top: 0

  .highlighted
    display: block
    text-align: right
    color: var(--main-col)

  #job-title
    display: block
    min-width: 230px
@media screen and (max-width: 720px)
  #job-desc
    position: unset
    margin: 1em auto 6em 0

@media screen and (max-width: 300px)
  #job-desc
    max-width: unset
</style>
