<section id="job-desc">
  <div class="job-sec">
    <strong>Currently:</strong>
    <span id="job-title">iOS Developer</span>
  </div>
  <div class="job-sec">
    <strong>At:</strong>
    <a href="https://regxi.com" target="_blank" id="job-place">
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
    margin-top: 10px

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
