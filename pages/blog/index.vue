<template>
  <div>
    <h1>Blog listing...</h1>
    {{ articles }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    return {articles}
  }
}
</script>
