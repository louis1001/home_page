<nav>
    <section id='nav-contents'>
        <a id="my-name" href="/">louis1001</a>
        <ul>
            <li id="main-link"><a href="/">Main</a></li>
            <li><a href="/cv">CV</a></li>
            <!-- <li><a href="/work/innotest">My work</a></li> -->
            <li><a href="/demo">Demos</a></li>
            <li><a href="/interests">Interests</a></li>
        </ul>
    </section>
</nav>

<style lang='sass'>
nav
  height: 50px

#nav-contents
  position: fixed
  left: 0
  right: 0
  height: 3em
  display: flex
  justify-content: space-between
  align-items: center
  backdrop-filter: blur(4px)
  z-index: 998

  ul
    max-width: 1500px
    display: flex
    justify-content: flex-end
    align-items: center
    height: 50px
    gap: 2em
    margin-inline: 1em

  #main-link
    display: none

  #my-name
    font-family: 'Amaranth', sans-serif
    color: var(--heading-col)
    padding-left: 10px

@media screen and (max-width: 720px)
  nav ul
    gap: 1em

@media screen and (max-width: 340px)
  #my-name
    display: none

  nav ul #main-link
    display: block
</style>
