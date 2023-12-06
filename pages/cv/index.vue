<template>
  <div id="my-cv">
    <section id="exporting">
      <a href="https://github.com/louis1001/home_page/releases/latest/download/luis-gonzalez.pdf" target="_blank">
        <span class="embeded-svg" v-html="rawPdfLogo"></span> Download as PDF</a>
      <a href="https://github.com/louis1001/home_page/tree/main/pages/cv/index.vue" target="_blank">
        <span class="embeded-svg" v-html="rawGHLogo"></span>
        Source code
      </a>
    </section>

    <header>
      <div id="name-position">
        <h1>Luis González</h1>
        <p id="position">iOS Developer</p>
      </div>

      <div id="contact-info">
        <p>Somoto, Nicaragua (GMT-6)</p>
        <p>(+505) 8232 2324</p>
        <p><a href="mailto:louis1001dev@gmail.com">louis1001dev@gmail.com</a></p>
        <p><a href="https://linkedin.com/in/louis1001">http://linkedin.com/in/louis1001</a></p>
        <p><a href="https://louis1001.dev">http://louis1001.dev</a></p>
      </div>
    </header>

    <main>
      <section id="headline">
        <p>
          Self-driven mobile developer, with 3 years of experience in developing iOS applications used by a large number
          of users. I've worked with <code class="technical">UIKit</code> and <code class="technical">SwiftUI</code> as
          UI frameworks, and my web background helped me build a strong base when it comes to design. I'm proud to say,
          to this day there hasn't been an interface I couldn't develop, though I'm looking for a challenge. Focused on
          understanding the core of every technology I use, and applying solid problem solving skills in day to day
          work. I'm full of ideas and always looking for the next thing to learn (currently programming language
          development).
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div class="experience-item">
          <h3>Regxi, iOS developer <span class="detail">(outsourcing company)</span></h3>
          <h4>
            InnoTest <span class="detail">(client)</span>, Mobile Developer
            <span class="timespan">— February, 2021 - Present</span>
          </h4>
          <p>
            iOS apps for practicing tests required to work on Spanish state institutions (Oposiciones). They work
            consuming a
            <code class="technical">REST API</code> and <code class="technical">CoreData</code> persistence.
          </p>
          <ul class="achievements">
            <li class="achievement">
              Adapted the apps from web to native code with <code class="technical">UIKit</code> in order to give the
              user a smoother
              experience.
            </li>
            <li class="achievement">
              I added 4 new apps using the same codebase, thus streamlining the process of creating new apps.
            </li>
            <li class="achievement">
              I optimized the maintainability of UI code by rewriting many screens in <code
                class="technical">SwiftUI</code>.
            </li>
            <li class="achievement">
              Created custom UI components and screens, to have complete control over the design and functionality.
            </li>
            <li class="achievement">
              I unified the networking architecture designed around <code class="technical">URLRequest</code> to be
              adaptable to InnoTest's
              special needs.
            </li>
          </ul>
          <p>Tech Stack: <code class="technical">UIKit/SwiftUI</code>, <code class="technical">Firebase</code>,
            <code class="technical">REST API</code> consumption, <code class="technical">Cocoapods</code>,
            <code class="technical">Swift Package Manager</code>
          </p>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div class="project-item">
          <h4>Hangul Practice, iOS Developer -
            <a
              href="https://github.com/louis1001/hangul-practice-ios">https://github.com/louis1001/hangul-practice-ios</a>
            <span class="timespan">— October, 2022 - December, 2022</span>
          </h4>
          <p>
            iOS app to practice reading the Hangul alphabet (한글). It shows a random word that the user can attempt to
            read. It was my first self-published app.
          </p>
          <ul class="achievements">
            <li class="achievement">Designed the UI with <code class="technical">SwiftUI</code> to be intuitive and
              useful for Korean learners.</li>
            <li class="achievement">Prepared the app's content by loading a dataset of Korean words, to get variety and
              exposure to the language.</li>
            <li class="achievement">Added pronunciation guides using <code class="technical">AVSpeechSynthesizer</code>,
              so the user can get used to
              the sound of the characters.</li>
            <li class="achievement">I integrated translations for the words with the use of a translation library to
              enrich the learning experience.</li>
          </ul>

          <p>
            Tech Stack: <code class="technical">SwiftUI</code>, <code class="technical">Google Translate</code>, <code
              class="technical">UIReferenceLibrary</code>.
          </p>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div class="skill-item">
          <h3>Programming Languages</h3>
          <p class="skill-element">
            <span class="skill-level">Advanced:</span>
            <code class="technical">Swift</code>, <code class="technical">JavaScript</code>;
          </p>
          <p class="skill-element">
            <span class="skill-level">Intermediate:</span>
            <code class="technical">C++</code>;
          </p>
          <p class="skill-element">
            <span class="skill-level">Basic:</span>
            <code class="technical">Objective-C</code>;
          </p>
        </div>

        <div class="skill-item">
          <h3>Framework Tools</h3>
          <p class="skill-element">
            <span class="skill-level">Advanced:</span>
            <code class="technical">SwiftUI</code>, <code class="technical">UIKit</code>, <code
              class="technical">Firebase</code>
          </p>
        </div>

        <div class="skill-item">
          <h3>Tools</h3>
          <p class="skill-element">
            Xcode (and, Instruments, Organizer, etc); Visual Studio Code; Postman;<br>
            <em>Figma</em>; AdobeXD; <em>Jira</em>; Github/BitBucket
          </p>
        </div>

        <div class="skill-item">
          <h3>Agile</h3>
          <p class="skill-element">
            Scrum
          </p>
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
            <span class="education-details">Graduate, Computer Systems Engineering, December 2020</span>
          </p>
        </div>
      </section>
      <section id="education">
        <h2>Aditional</h2>
        <p>I wanted to add that this document lists my abilities relating to mobile development,
          but I enjoy low level/logic based development as well. I mentioned my current fixation on
          developing programming languages, I recently made a Virtual Machine in
          <code class="technical">C</code> from scratch.
          I love working with <code class="technical">C++</code>, <code class="technical">Rust</code>,
          <code class="technical">NodeJS</code> and <code class="technical">Python</code> to build
          algorithms and learn about computing.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import rawPdfLogo from "~/static/imgs/icons/pdf_icon.svg?raw"
import rawGHLogo from "~/static/imgs/icons/github_icon.svg?raw"
export default {
  name: "Index",
  data() {
    return { rawPdfLogo, rawGHLogo }
  },
  head() {
    return {
      title: "CV - Luis González",
    }
  }
}
</script>

<style lang="sass">
$titles-outset: .2rem

// This add a little breathing room to the text
*
  letter-spacing: 0.0em

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

section
  margin: 1.3em 0
  padding-left: $titles-outset

#my-cv
  font-family: 'Verdana', sans-serif
  --main-color: rgb(83, 49, 114)
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


ul
  margin-block: 0
  padding-left: 3rem

  li
    margin-bottom: .5rem

code.technical
  padding-inline: .3rem
  background: #eee
  border-radius: .3rem
  font-family: Courier, monospace
  white-space: nowrap

$header-overflow: 2rem
header
  display: flex
  justify-content: space-between

  h1, p
    margin: 0

  #contact-info
    text-align: right
    font-style: italic
    font-size: 10pt

  border-bottom: 4px solid var(--main-color)

  margin: 0 calc($header-overflow * -1)
  padding: 0 $header-overflow
  padding-bottom: .7em

.timespan
  font-weight: normal
  color: black
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

$link-color: rgb(45, 166, 242)
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
</style>
