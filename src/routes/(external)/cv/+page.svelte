<svelte:head>
    <title>louis1001 - CV</title>
</svelte:head>
<div id="my-cv">
  <section id="exporting">
    <a
      href="https://github.com/louis1001/home_page/releases/latest/download/luis-gonzalez.pdf"
      target="_blank"
    >
      <span class="embeded-svg"></span> Download as PDF</a
    >
    <a
      href="https://github.com/louis1001/home_page/tree/main/pages/cv/index.vue"
      target="_blank"
    >
      <span class="embeded-svg"></span>
      Source code
    </a>
  </section>

  <header>
    <div id="name-position">
      <h1>Luis González</h1>
      <p id="position">Software Developer</p>
    </div>

    <div id="contact-info">
      <p>Somoto, Nicaragua (GMT-6)</p>
      <p>(+505) 8232 2324</p>
      <p><a href="mailto:louis1001dev@gmail.com">louis1001dev@gmail.com</a></p>
      <p>
        <a href="https://linkedin.com/in/louis1001"
          >http://linkedin.com/in/louis1001</a
        >
      </p>
      <p><a href="https://louis1001.dev">http://louis1001.dev</a></p>
    </div>
  </header>

  <main>
    <section id="headline">
      <p>
        Self-driven developer, with 3 years of experience in developing iOS
        applications, and their backend, used by a large number of users. I've
        worked with <code class="technical">UIKit</code> and
        <code class="technical">SwiftUI</code> as UI frameworks, and my web background
        helped me build a strong base when it comes to design. I'm proud to say,
        to this day there hasn't been an interface I couldn't develop, though I'm
        looking for a challenge. Focused on understanding the core of every technology
        I use, and applying solid problem solving skills in day to day work. I'm
        full of ideas and always looking for the next thing to learn.
      </p>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <div class="experience-item">
        <h3>
          Regxi, iOS developer <span class="detail">(outsourcing company)</span>
        </h3>
        <h4>
          InnoTest <span class="detail">(client)</span>, Mobile and Backend
          Developer
          <span class="timespan">— February, 2021 - Present</span>
        </h4>
        <p>
          Mobile apps for practicing tests required to work on Spanish state
          institutions (Oposiciones). They work consuming a
          <code class="technical">REST API</code> written in
          <code class="technical">php</code>
          with <code class="technical">Laravel</code> on the backend, and
          <code class="technical">CoreData</code> persistence in frontend.
        </p>
        <p>
          Tech Stack: <code class="technical">UIKit/SwiftUI</code>,
          <code class="technical">php</code>,
          <code class="technical">Laravel</code>,
          <code class="technical">Firebase</code>,
          <code class="technical">MySQL</code>,
          <code class="technical">REST API</code> consumption,
          <code class="technical">Cocoapods</code>,
          <code class="technical">Swift Package Manager</code>
        </p>
      </div>
      <div class="experience-item">
        <h3>
          Freelance, web developer <span class="timespan"
            >— January, 2019 - February 2021</span
          >
        </h3>
        <p>
          As a freelance developer, I built web pages for my clients based on
          the design they provided. Mostly intranet, company resources. I
          focused on delivering quality pages, with responsive design and either
          pure
          <code class="technical">HTML/CSS</code> or using
          <code class="technical">VueJS</code> as a UI framework.
        </p>
        <h4>
          eHarvestHub <span class="detail">(client)</span>, Web Developer
        </h4>
        <p>
          A landing page for the company, they gave me the design and an idea of
          the desired animations. I offered to deliver it in 2 weeks, which
          apparently was faster than the previous developer had taken without
          finishing. I delivered it in 1 week.
        </p>
        <p>
          Tech Stack: <code class="technical">JavaScript</code>,
          <code class="technical">Html</code>,
          <code class="technical">CSS</code>,
          <code class="technical">JQuery</code>,
          <code class="technical">ScrollRevealJS</code>
        </p>
      </div>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <div class="skill-item">
        <h3>Programming Languages</h3>
        <p class="skill-element">
          <code class="technical">Swift</code>
        </p>
        <p class="skill-element">
          <code class="technical">JavaScript</code>;
        </p>
        <p class="skill-element">
          <code class="technical">php</code>;
        </p>
        <p class="skill-element">
          <code class="technical">C++</code>;
        </p>
        <p class="skill-element">
          <code class="technical">Objective-C</code>;
        </p>
      </div>

      <div class="skill-item">
        <h3>Framework Tools</h3>
        <p class="skill-element">
          <code class="technical">SwiftUI</code>,
          <code class="technical">UIKit</code>,
          <code class="technical">VueJS</code>,
          <code class="technical">Laravel</code>,
          <code class="technical">Firebase</code>
        </p>
      </div>

      <div class="skill-item">
        <h3>Tools</h3>
        <p class="skill-element">
          Xcode (and, Instruments, Organizer, etc); Visual Studio Code; Postman;<br
          />
          <em>Figma</em>; AdobeXD; <em>Jira</em>; Github/BitBucket
        </p>
      </div>

      <div class="skill-item">
        <h3>Agile</h3>
        <p class="skill-element">Scrum</p>
      </div>

      <div class="skill-item">
        <h3>Languages</h3>
        <p class="skill-element">
          <span class="skill-level">Advanced:</span>
          English
        </p>
        <p class="skill-element">
          <span class="skill-level">Native:</span>
          Spanish
        </p>
        <p class="skill-element">
          <span class="skill-level">Intermediate:</span>
          French
        </p>
      </div>
    </section>
    <section id="education">
      <h2>Education</h2>

      <div class="education-item">
        <h3>Universidad Nacional de Ingeniería (UNI)</h3>
        <p>
          - Estelí, Nicaragua.
          <span class="education-details"
            >Graduate, Computer Systems Engineering, December 2020</span
          >
        </p>
      </div>
    </section>
  </main>
</div>

<style lang='sass'>
$titles-outset: .2rem

:root
  --background-col: rgb(19, 19, 22)
  --main-col: rgb(219, 151, 95)
  --sub-heading-col: #bbb
  --sec-heading-darker-col: rgb(71, 120, 183)
  --link-col: rgb(100, 123, 224)

// This add a little breathing room to the text
*
  letter-spacing: 0.05em

p
  line-height: 1.24em

#exporting
  position: fixed
  bottom: 0
  left: 0
  display: flex
  flex-direction: column
  gap: .5rem

  a
    text-decoration: none
    display: block
    padding: .5rem
    background: #eee
    border-radius: 5px
    white-space: nowrap

    *
      vertical-align: bottom

.embeded-svg
  svg
    width: 1.5em
    height: 1.5em
    vertical-align: middle

html
  font-size: 9pt
p, div, section
  margin: 0
  margin-top: .4em

section
  margin: 1.5em 0
  padding-left: $titles-outset

#my-cv
  font-family: 'Verdana', sans-serif
  --main-color: var(--main-col)
  max-width: 530pt
  margin: 0 auto

em
  text-decoration: underline
  font-style: normal

h1, h2, h3, h4, h5
  color: var(--main-color)
  margin: 0
  margin-bottom: .2em

  .detail
    font-weight: normal

h1
  font-size: 2.05rem

h2
  font-size: 1.2rem
  margin-left: calc($titles-outset * -1)
  text-transform: uppercase

h3, h4, h5
  font-size: 1rem
  margin-left: 1em


ul
  margin-block: 0
  padding-left: 3rem

  li
    margin-bottom: .5rem

code.technical
  padding-inline: .3rem
  background: var(--sub-heading-col)
  border-radius: .3rem
  font-family: Courier, monospace
  white-space: nowrap
  color: var(--sec-heading-darker-col)

.experience-item
  padding-bottom: 1em

$header-overflow: 2rem
header
  display: flex
  justify-content: space-between
  border-bottom: 4px solid var(--main-color)
  margin: 0 calc($header-overflow * -1)
  padding: 0 $header-overflow
  padding-bottom: .7em

  h1, p
    margin: 0

  #contact-info
    text-align: right
    font-style: italic
    font-size: 10pt

    p
        padding: 0

.timespan
  font-weight: normal
  color: var(--sub-heading-col)
  font-style: italic

#skills, #education
  h3
    &:after
      content: ":"

.skill-item>*, .education-item>*
  display: inline

.skill-level
  text-decoration: underline

.education-details
  font-style: italic

@media screen and (max-width: 1100px)
  #exporting
    position: static
    flex-direction: row
    // display: flex
    justify-content: center
    gap: .5rem

    margin: 0
    margin-top: -.5rem

@media screen and (max-width: 660px)
  #exporting
    margin: 1.5em 0
    font-size: .8rem
    // justify-content: flex-start
    display: block

    a
      display: inline-block
      margin: .25em 0

@media screen and (max-width: 485px)
  header
    display: block

    #name-position
      margin-bottom: 2rem

@media screen
  #my-cv
    padding: 0 2rem

$link-color: var(--link-col)
a
  color: $link-color

@media print
  #exporting
    display: none

  a, a:visited
    color: $link-color

  #my-cv
    margin: .1in .2in .1in .2in
    max-width: unset

  body, html
    margin: 0
    padding: 0

  ul>li
    margin-bottom: 0em

  .technical
    font-family: monospace
</style>
