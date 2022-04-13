<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>Posted {{ formatDate(article.createdAt) }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error, redirect }) {
    if (!params.slug || params.slug == "/") {
      redirect(404, "/blog/listing")
      return {}
    }

    const article = await $content('articles', params.slug)
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    return {article}
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
