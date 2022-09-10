<template>
  <div id="actual-container">
    <nav>
      <ul>
        <li><a href="/">Main</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/work/innotest">My work</a></li>
        <li><a href="/demo">Demos</a></li>
      </ul>
    </nav>
    <div id="spacer"></div>
  </div>
</template>

<style lang="sass" scoped>
#actual-container
  height: 50px

nav
  position: fixed
  left: 0
  right: 0
  height: 3em
  backdrop-filter: blur(4px)
  z-index: 9999

  ul
    max-width: 1500px
    display: flex
    justify-content: flex-end
    align-items: center
    height: 50px
    gap: 2em
    margin-inline: 1em
</style>
