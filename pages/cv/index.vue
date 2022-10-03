<template>
  <div>
    <header>
      <h1>
        <img
          id="main-picture"
          width="80px"
          height="80px"
          src="@/static/imgs/profile.jpg"
          alt=""
        />
        <div id="heading-text">
          <!-- <div class="faded">Curriculum Vitae</div> -->
          <span>Luis Alberto González Rodríguez</span>
        </div>
      </h1>
    </header>

    <main>
      <section id="personal-info">
        <h2>Contact</h2>
        <ul>
          <li class="info-item">
            <span class="info-title">Email:</span>
            <span class="info-value">
              <a href="mailto:louis1001dev@gmail.com">louis1001dev@gmail.com</a>
            </span>
          </li>
          <li class="info-item">
            <span class="info-title">Phone number:</span>
            <span class="info-value">+505 8232 2324</span>
          </li>
          <li class="info-item">
            <span class="info-title">Personal page:</span>
            <span class="info-value">
              <a target="_blank" href="https://louis1001.dev/">louis1001.dev</a>
            </span>
          </li>
          <li class="info-item">
            <span class="info-title">Github:</span>
            <span class="info-value">
              <a target="_blank" href="https://github.com/louis1001"
                >github.com/louis1001</a
              >
            </span>
          </li>
          <li class="info-item">
            <span class="info-title">LinkedIn:</span>
            <span class="info-value">
              <a target="_blank" href="https://www.linkedin.com/in/louis1001"
                >linkedin.com/in/louis1001</a
              >
            </span>
          </li>
        </ul>
      </section>
      <section id="experiences">
        <h2>Work Experience</h2>
        <ul>
          <li class="experiences-item">
            <h4>
              (2021-) iOS Developer at
              <a href="https://regxi.com" target="_blank">Regxi</a>
            </h4>

            I worked in many different projects, with teams of developers from
            other countries and time zones. Communication and good scheduling
            was essential.
          </li>
          <li class="experiences-item">
            <h4>(2016-2021) Freelance web developer</h4>

            Specially focused on taking a design or idea from the client and
            implementing it in a responsive, maintainable manner using CSS, HTML
            and Javascript. I also worked building
            <strong class="special">automation</strong> tools for simple tasks,
            tutoring teachers on programming releated courses, and spent some
            time doing talks at my University.
          </li>
        </ul>
      </section>
      <section id="projects">
        <h2>Highlighted projects</h2>
        <ul>
          <li id="code-projects">
            <h3>Low-level programming</h3>
            <ol>
              <li class="code-project-item">
                <h4 class="code-project-title">
                  Odo
                  <a href="https://github.com/louis1001/odo" target="_blank"
                    >(github)</a
                  >
                </h4>
                <p>
                  A simple programming language
                  <strong class="special">made from scratch</strong>. My first
                  attempt, where I learned the basics of interpreters and
                  compilers.
                </p>
              </li>
              <li class="code-project-item">
                <h4 class="code-project-title">
                  Cordial
                  <a href="https://github.com/louis1001/cordial" target="_blank"
                    >(github)</a
                  >
                </h4>
                <p>
                  A literate programming language
                  <strong class="special">in spanish</strong>, focused on
                  looking as close to natural, good-mannered spanish as
                  possible.
                </p>
              </li>
            </ol>
          </li>
          <li id="code-projects">
            <h3>Mobile apps</h3>
            <ol>
              <li class="code-project-item">
                <h4 class="code-project-title">
                  InnoTest Apps
                  <a
                    href="https://apps.apple.com/es/developer/innotest-iberica-s-l/id1303395099"
                    target="_blank"
                    >(app store)</a
                  >
                </h4>
                <p>
                  I worked porting the apps from wrapped web apps to native,
                  <strong class="special">SwiftUI</strong> apps. They consumed
                  REST apis with token based authentication.
                </p>
              </li>
            </ol>
          </li>
        </ul>
      </section>
      <section id="habilities">
        <h2>Abilities</h2>
        <ul>
          <li class="habilities-item">
            <h3 class="hability-title">Languages:</h3>
            <span class="hability-value">
              <ul>
                <li>
                  <h4>English</h4>
                </li>
                <li>
                  <h4>Spanish</h4>
                </li>
              </ul>
            </span>
          </li>
          <li class="habilities-item">
            <h3 class="hability-title">Programming Languages:</h3>
            <span class="hability-value">
              <ul>
                <li>
                  <b>Swift</b>
                </li>

                <li>
                  <b>C/C++</b>
                </li>

                <li>
                  <b>Rust</b>
                </li>

                <li>
                  <b>Python</b>
                </li>

                <li>
                  <b>HTML</b>
                </li>

                <li>
                  <b>JavaScript</b>
                </li>

                <li>
                  <b>C# .NET</b>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </section>
      <section id="education">
        <h2>Education</h2>
        <ul>
          <li class="education-item">
            <span class="education-title"
              ><b>(2015 – 2021)</b> Computer Systems Engineering - Universidad
              Nacional de Ingeniería (UNI)</span
            >
            <p class="education-value">
              General programming database management and computing. Enterprise
              and Systems Management.
            </p>
          </li>
          <li class="education-item">
            <span class="educaction-title"
              ><b>(2015 – now)</b> Self-taught Programming</span
            >
            <p class="education-value">
              Desktop programming, web design and mobile apps in many
              programming languages.
            </p>
          </li>
        </ul>
      </section>
      <section id="references">
        <h2>References:</h2>
        <ul>
          <li class="reference">
            <h4>Engr. Sergio Velásquez</h4>
            <ul class="reference-contacts">
              <li>
                <span class="reference-title info-title">Email:</span>
                <span class="reference-value info-value">
                  <a href="mailto:ing.svelasquez@gmail.com"
                    >ing.svelasquez@gmail.com</a
                  >
                </span>
              </li>
              <li>
                <span class="reference-title info-title">Phone number:</span>
                <span class="reference-value info-value">+505 8448 9225</span>
              </li>
            </ul>
          </li>
          <li class="reference">
            <h4>Engr. Jose Manuel Poveda</h4>
            <ul class="reference-contacts">
              <li>
                <span class="reference-title info-title">Email:</span>
                <span class="reference-value info-value">
                  <a href="mailto:jmpov441@gmail.com">jmpov441@gmail.com</a>
                </span>
              </li>
              <li>
                <span class="reference-title info-title">Phone number:</span>
                <span class="reference-value info-value">+505 8565 1485</span>
              </li>
            </ul>
          </li>
          <li class="reference">
            <h4>Engr. Erick José Martinez</h4>
            <ul class="reference-contacts">
              <li>
                <span class="reference-title info-title">Email:</span>
                <span class="reference-value info-value">
                  <a href="mailto:erick.martinez@regxi.com"
                    >erick.martinez@regxi.com</a
                  >
                </span>
              </li>
              <li>
                <span class="reference-title info-title">Phone number:</span>
                <span class="reference-value info-value">+505 8989 8944</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: "Curriculum - Luis González"
    }
  }
}
</script>

<style lang="sass">
@import "@/static/styles/cv.scss"
</style>
