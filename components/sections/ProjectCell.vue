
<template>
  <article class="project">
    <figure>
      <code-block :language="odo" :content="codigoCordial" />
    </figure>
    <section class="project-content">
      <h4>{{ projectName }}</h4>
      <p>
        <strong>My first attempt at a general programming language</strong>, I
        experimented with different techniques for interpreter design and
        learned a lot.
      </p>
      <p>
        The basic design principle was: "Does this feature still need to
        exist?", which got rid of things like semicolons, convoluted
        <code>for</code> loops, etc.
      </p>

      <p>
        The ability to change all keywords to spanish was a feature that led to
        the topic of my thesis' research.
      </p>
    </section>
  </article>
</template>



<script>

export default {
  name: "ProjectCell"
}
</script>
