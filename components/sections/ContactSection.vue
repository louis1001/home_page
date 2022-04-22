
<template>
  <section id="contact">
    <h3>Contact Me!</h3>
    <ul id="contact-container">
      <li>
        <h4>Email</h4>
        <a href="mailto:contact@louis1001.dev">contact@louis1001.dev</a>
      </li>
      <li>
        <h4>Phone</h4>
        <span>+505 82322324</span>
      </li>
      <li>
        <h4>Github</h4>
        <a href="https://github.com/louis1001">louis1001</a>
      </li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
#contact
  margin: 0 0 100px auto
  max-width: max(700px, 50vw)
  text-align: right


  &-container
    display: flex
    justify-content: flex-end
    flex-wrap: wrap
    max-width: 100%


  &-container li
    list-style: none
    text-align: center
    /* padding: 0 20px; */
    min-width: 200px
</style>
