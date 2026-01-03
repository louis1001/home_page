<script lang="ts">
  import GlassFrame from "$lib/components/global/glass_frame.svelte";
</script>

<!-- Interests -->
<h1>Interests</h1>

<GlassFrame class="blurb">
  <p>I am the things I do, and the things I like. So what better way to get to know me, than my interests?</p>

  <ul>
    <li><a href="/interests/photography">📷 Photography</a></li>
    <li><a href="/interests/web_projects">🌐 Web Projects</a></li>
  </ul>
</GlassFrame>

<style lang="sass">
:global(.blurb)
  margin: 0 var(--padding-lg) var(--padding-lg)

ul
  line-height: 2rem
</style>