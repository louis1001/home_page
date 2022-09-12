<template>
  <div>
    <NavigationBar />
    <div id="main-container">
      <header>
        <h2>My work</h2>
        <h1>at InnoTest</h1>
      </header>

      <section id="the-apps">
        <p> For <a href="https://innotest.es" target="_blank">InnoTest®</a> I've worked on this 7 (very similar) apps.</p>
        <div id="apps-container">
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-guardia-civil-2022/id1303395100">
            <img src="/imgs/innotest/icons/logo_gc.svg"  width="80" height="80"  alt="guardia civil logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-polic%C3%ADa-nacional-2022/id1432134737">
            <img src="/imgs/innotest/icons/logo_pn.svg"  width="80" height="80"  alt="policía nacional logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-constituci%C3%B3n-1978/id1432135074">
            <img src="/imgs/innotest/icons/logo_ce.svg"  width="80" height="80"  alt="constitución española logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-correos/id1526642281">
            <img src="/imgs/innotest/icons/logo_co.svg"  width="80" height="80"  alt="correos logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-administrativo-estado/id1632344996">
            <img src="/imgs/innotest/icons/logo_ae.svg"  width="80" height="80"  alt="administrador del estado logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-aux-adm-del-estado/id1632345697">
            <img src="/imgs/innotest/icons/logo_aae.svg" width="80" height="80"  alt="ayudante administrador del estado logo">
          </a>
          <a target="_blank" href="https://apps.apple.com/es/app/innotest-inst-penitenciarias/id1628398061">
            <img src="/imgs/innotest/icons/logo_ip.svg"  width="80" height="80"  alt="instituciones penitenciarias logo">
          </a>
        </div>
      </section>

      <section id="design-to-code">
        <h2>From Design to Code</h2>
        <p>One of my <em>favorite</em> tasks while programming is to take a <strong>design</strong> from someone who knows what they're doing and translating it into code, be it <em>SwiftUI</em>, <em>CSS</em> or the creative design platform <a target="_blank" href="https://p5js.org"><em>P5.js</em></a>. Here are some examples of that in my work with InnoTest.</p>

        <div class="work-item">
          <h3>A Video to CSS</h3>
          <p>Originally proposed as a video, due to the need for more resolution I decided to recreate it as a responsive CSS animation. Once embedded in a <code>WKWebView</code>, the result is seamless:</p>
          <div class="work-item-illustration">
            <video id="comparativa-video" autoplay muted loop playsinline>
              <source src="/videos/innotest/comparativa.webm" type="video/webm">
              <source src="/videos/innotest/comparativa.mp4" type="video/mp4">
              Video not supported
            </video>

            <img class="illustration-arrow" src="/imgs/right_arrow.svg"/>

            <video id="comparativa-implementada" autoplay muted loop playsinline>
              <source src="/videos/innotest/comparativa-implementada.webm" type="video/webm">
              <source src="/videos/innotest/comparativa-implementada.mp4" type="video/mp4">
              Video not supported
            </video>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavigationBar from "~/components/individual/NavigationBar.vue";

export default {
  components: { NavigationBar}
}

</script>

<style lang="sass">
@import '@/static/styles/reset.scss'
@import '@/static/styles/basics.sass'

@import '@/static/styles/font_styles.sass'

body
  min-height: 1000vh

#main-container
  margin: 0 auto
  padding: 40px 20px
  max-width: 1000px

header
  padding-bottom: 20px
  margin-bottom: 25px
  border-bottom: 2px solid var(--sec-heading-col)
  h2
    margin-bottom: 0

h2
  margin-bottom: .5em

h3
  margin-bottom: .5em

#the-apps
  text-align: center
  padding: 10px
  margin: 40px 0

#apps-container
  margin: 20px 0
  padding: 0 10px
  line-height: 2

  img
    transition: transform 0.2s ease-in-out
    &:hover
      transform: scale(1.1)

#design-to-code
  p
    margin-left: 1em
    line-height: 1.2

.work-item
  margin: 4em 0
  --arrow-width: 80px

  .work-item-illustration
    display: flex
    justify-content: space-around
    padding: 20px 0

    .illustration-arrow
      width: var(--arrow-width)
      filter: invert(100%)

  video
    width: max(30%, 300px)
    max-width: calc(50% - var(--arrow-width))

@media screen and (max-width: 720px)
  #apps-container
    img
      width: 50px
      height: 50px

  .work-item
    .work-item-illustration
      display: block
      text-align: center

      *
        display: block
        margin: 0 auto
        max-width: 100%

      .illustration-arrow
        transform: rotate(90deg)
        padding: 30px 0
        max-width: 20%


// @media screen and (max-width: 340px)
//   #comparativa-video
//     max-width: unset
//     padding: 0 20px
//     margin: 0 auto
</style>
