<template>
  <pre :language="language">
    <slot></slot>
  </pre>
</template>

<script>
import highlight from '@/src/highlighting/highlighting'
export default {
  name: "CodeBlock",
  props: {
    language: "string"
  }
}
</script>

<style lang="sass" scoped>
</style>
