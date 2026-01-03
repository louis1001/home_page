<section id="job-desc">
  <div class="job-sec">
    <strong>Currently:</strong>
    <span id="job-title">iOS Developer</span>
  </div>
  <div class="job-sec">
    <strong>At:</strong>
    <a href="https://applaudo.com" target="_blank" id="job-place">
      <enhanced:img
        alt=""
        src="/static/site-images/applaudo_logo.png"
        style="height: 20px; width: auto; object-fit: contain"
      />Applaudo
    </a>
  </div>
</section>

<style lang='sass'>
#job-desc
  position: fixed
  left: var(--padding-lg)
  top: calc(var(--nav-bar-height) + var(--padding-md) * 2)
  font-size: 0.9rem
  max-width: 285px
  backdrop-filter: var(--glass-blur-filter)
  border: 1px solid var(--glass-border-col)
  box-shadow: var(--glass-box-shadow)

  background-color: var(--glass-bg-col)
  border-radius: var(--regular-radius)
  padding: var(--padding-sm)

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
    text-decoration-thickness: .3pt
    text-decoration-color: var(--sub-heading-col)

  a:hover
    text-decoration-style: wavy

  strong
    display: block
    font-size: 1em
    font-weight: 400
    color: var(--sec-heading-darker-col)

  .job-sec
    margin-top: var(--padding-sm)

    &:first-child
      margin-top: 0


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
