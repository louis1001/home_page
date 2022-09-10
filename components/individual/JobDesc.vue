<template>
  <section id="job-desc">
    <div class="job-sec">
      <strong>Currently:</strong>
      <span id="job-title">Mobile Developer (iOS)</span>
    </div>
    <div class="job-sec">
      <strong>At:</strong>
      <a href="https://regxi.com" target="_blank" id="job-place">
        <img src="imgs/regxi.png" width="20" height="20" />Regxi
      </a>
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

  & img
    vertical-align: middle

  & a,

  & span
    display: inline
    font-size: 1.2em
    color: var(--sec-heading-col)
    text-decoration: underline
    text-decoration-style: dashed
    text-decoration-color: var(--sub-heading-col)

  & a:hover
    text-decoration-style: wavy

  & strong
    display: block
    font-size: 1em
    color: var(--sec-heading-darker-col)

  & .job-sec:last-child
    margin-top: 15px

@media screen and (max-width: 720px)
  #job-desc
    position: unset
    margin: 0 auto 0 0

@media screen and (max-width: 300px)
  #job-desc
    max-width: unset
</style>
