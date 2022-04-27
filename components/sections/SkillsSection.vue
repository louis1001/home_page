<template>
  <section id="skills">
    <h3>Development Skills</h3>
    <ul>
      <!-- Skills! -->
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="js-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/javascript.svg"
        />
        <span class="skill-name">JavaScript</span>
      </li>
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="css-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/css3.svg"
        />
        <span class="skill-name">CSS</span>
      </li>
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="cpp-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/cplusplus.svg"
        />
        <span class="skill-name">C++</span>
      </li>
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="py-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/python.svg"
        />
        <span class="skill-name">Python</span>
      </li>
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="swift-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/swift.svg"
        />
        <span class="skill-name">Swift</span>
      </li>
      <li class="skill">
        <img
          class="skill-icon"
          width="20"
          height="20"
          alt="sql-icon"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/vue-dot-js.svg"
        />
        <span class="skill-name">VueJS</span>
      </li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
#top-banner
  max-width: 800px
  margin: 0 auto
  transition: all .5s

#skills ul
  display: flex
  flex-wrap: wrap
  padding: 0

.skill
  list-style: none
  margin: 20px

  & img .skill *
    vertical-align: middle

  & span
    display: none

  &-icon
    height: 3em
    filter: invert(1)
    margin: 0 .1em

/* Related Skills Section */
#related-skills h4
  text-align: right

#related-skills ul
  flex-direction: row-reverse
@media screen and (max-width: 625px)
  #skills
    // text-align: center
    max-width: unset

  #skills ul
    justify-content: space-around
</style>
