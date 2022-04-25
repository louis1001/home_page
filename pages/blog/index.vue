<template>
  <div>
    <h1>Blog listing...</h1>

    <ul id="blogs-list">
      <li class="blog-item" v-for="blog in articles" :key="blog.slug">
        <a :href="slug + blog.slug">{{ blog.title }}</a>
      </li>
    </ul>
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

    return {articles }
  },
  data() {
    let slug = this.$route.path
    if (!slug.endsWith('/')) slug += "/"
    return {
      slug
    }
  }
}
</script>
