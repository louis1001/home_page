<script lang="ts">
  import Footer from "$lib/components/global/footer.svelte";
  import NavBar from "$lib/components/global/nav_bar.svelte";

  import Graphics from "$lib/components/global/p5/graphics.svelte";
</script>

<Graphics />
<section id='internal-layout'>
    <NavBar />
    <slot></slot>
</section>
<Footer/>

<svelte:head>
    <style lang='sass'>
        @import '$lib/assets/styles/reset.scss'
        @import '$lib/assets/styles/basics.sass'
        @import '$lib/assets/styles/section.sass'
        @import '$lib/assets/styles/font_styles.sass'
    </style>
</svelte:head>

<style lang='sass'>
#internal-layout
    min-height: calc(100vh - 1.5em)
</style>
