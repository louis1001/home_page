<template>
  <div id="my-cv">
    <header>
      <div id="name-position">
        <h1>Luis González</h1>
        <p id="position">iOS Developer</p>
      </div>

      <div id="contact-info">
        <p>Somoto, Nicaragua (GMT-6)</p>
        <p>(+505) 8232 2324</p>
        <p><a href="mailto:louis1001dev@gmail.com">louis1001dev@gmail.com</a></p>
        <p><a href="http://linkedin.com/in/louis1001">http://linkedin.com/in/louis1001</a></p>
        <p><a href="http://louis1001.dev">http://louis1001.dev</a></p>
      </div>
    </header>

    <main>
      <p id="headline">
        Self-driven mobile developer, with 2 years of experience in developing iOS applications used by a large number of users.
        I've worked with UIKit and SwiftUI as UI frameworks, and my web background helped me build a strong base when it comes to design.
        I'm proud to say, to this day there hasn't been an interface I couldn't develop, though I'm looking for a challenge.
        Focused on understanding the core of every technology I use, and applying solid problem solving skills in day to day work.
        I'm full of ideas and always looking for the next thing to learn (currently programming language development).
      </p>

      <section id="experience">
        <h2>Experience</h2>
        <div class="experience-item">
          <h3>Regxi, iOS developer <span class="detail">(outsourcing company)</span></h3>
          <h4>InnoTest <span class="detail">(consumer)</span>, Mobile Developer <span class="timespan">— February, 2021 - Present</span></h4>
          <p>
            The apps work consuming a REST API and Token authentication. The main functionality is a tests module, where a user can answer
            questions and get feedback. These tests can be saved for later, repeated, etc. with local CoreData persistence.
          </p>
          <ul class="achievements">
            <li class="achievement">Ported the existing web apps to native code with UIKit.</li>
            <li class="achievement">Added 4 new apps using the same codebase, and streamlined the process of creating new apps.</li>
            <li class="achievement">Optimized the maintainability of UI code by rewriting many screens in SwiftUI.</li>
            <li class="achievement">Created custom UI components and screens, to have complete control over the design and functionality.</li>
            <li class="achievement">Unified the network and requesting architecture, which is customized and works over URLRequest.</li>
          </ul>
          <p>Tech Stack: UIKit/SwiftUI, Firebase, REST API consumption, Cocoapods, Swift Package Manager</p>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div class="project-item">
          <h3>Hangul Practice - <a href="https://github.com/louis1001/hangul-practice-ios">https://github.com/louis1001/hangul-practice-ios</a> - 2022</h3>
          <p>An iOS app to practice reading the Hangul alphabet (한글). It was my first self-published app.</p>
          <ul class="achievements">
            <li class="achievement">Designed and wrote the UI with SwiftUI.</li>
            <li class="achievement">Loaded a dataset of the most utilized Korean words to pick a random one.</li>
            <li class="achievement">Used AVSpeechSynthesizer to give hints on pronunciation.</li>
            <li class="achievement">Implemented a Google Translate library with Swift Package Manager for translations</li>
          </ul>
        </div>
        <div class="project-item">
          <h3>Odo - <a href="https://github.com/louis1001/odo">https://github.com/louis1001/odo</a> - 2021</h3>
          <p>
            A programming language I developed. It was based on the idea of taking all the features I've used in other
            programming languages and joining them into one that's more accessible.
          </p>
          <ul class="achievements">
            <li class="achievement">Originally written in Swift, and then ported to Rust and C++.</li>
            <li class="achievement">Developed an understanding of programming language design and the algorithms needed.</li>
          </ul>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div class="skill-item">
          <h3>Programming Languages</h3>
          <p class="skill-element">
            <span class="skill-level">Advanced:</span>
            Swift, JavaScript
          </p>
        </div>

        <div class="skill-item">
          <h3>Framework Tools</h3>
          <p class="skill-element">
            <span class="skill-level">Advanced:</span>
            SwiftUI, UIKit, Firebase
          </p>
        </div>

        <div class="skill-item">
          <h3>Tools</h3>
          <p class="skill-element">
            Xcode (and, Instruments, Organizer, etc); Visual Studio Code; Postman;<br>
            Figma; AdobeXD; Jira; Github/BitBucket
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
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: "CV - Luis González",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
        },
      ]
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap')

#my-cv
  font-family: 'Open Sans', sans-serif
  --main-color: #3a00e0
  max-width: 530pt
  margin: 0 auto

  h1, h2, h3, h4, h5
    color: var(--main-color)
    margin: 0

    .detail
      font-weight: normal

  ul
    margin-block: 0

  header
    display: flex
    justify-content: space-between

    h1, p
      margin: 0

    #contact-info
      text-align: right
      font-style: italic
      font-size: 10pt

    padding: 10px 0
    border-bottom: 4px solid var(--main-color)

  main
    font-size: 9pt

  #skills, #education
    h3
      &:after
        content: ":"

  .skill-item>*, .education-item>*
    display: inline

@media print
  #my-cv
    margin: 0
    max-width: unset

  body, html
    margin: 0
    padding: 0
</style>
