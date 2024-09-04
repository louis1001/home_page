<script lang="ts">
    const {
        isLoading
    } = $props()
</script>

{#if isLoading}
<div class="loading-spinner">
  <div style="--i: 0"></div>
  <div style="--i: 1"></div>
  <div style="--i: 2"></div>
  <div style="--i: 3"></div>
  <div style="--i: 4"></div>
</div>
{/if}

<style lang="sass">
.loading-spinner
  position: relative
  height: 3rem
  margin: 1rem auto

  div
    position: absolute
    width: 3rem
    height: 3rem
    left: 50%
    transform: translateX(-50%)
    opacity: .5
    display: inline-block
    border-radius: 100%
    border: .5rem solid var(--main-col)
    border-bottom: .5rem solid #fff0
    --duration: 2s
    --delay: calc(-1 * var(--i) * var(--duration) * 0.22)
    animation: border-animation var(--duration) var(--delay) linear infinite forwards

@keyframes border-animation
  0%
    transform: scale(1) rotate(0deg)
  
  25%
    transform: scale(.9) rotate(90deg)

  50%
    transform: scale(1) rotate(180deg)

  75%
    transform: scale(.8) rotate(270deg)
  
  100%
    transform: rotate(360deg)
</style>