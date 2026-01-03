<script lang="ts">
  const props = $props();
  const classes = $derived(["glass-frame", props.class].filter(Boolean).join(" "));
</script>

<div class={classes}>
  {@render props.children?.()}
</div>

<style lang='sass'>
.glass-frame
  display: block
  padding: var(--padding-md)
  border-radius: var(--regular-radius)
  background-color: var(--glass-bg-col)
  border: 1px solid var(--glass-border-col)
  box-shadow: var(--glass-box-shadow)
  backdrop-filter: var(--glass-blur-filter)
</style>
