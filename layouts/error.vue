<template>
  <main>
    <div>
      <h1 v-if="error.statusCode === 404">Page not found :(</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Back to home</NuxtLink>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }

</script>

<style>
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

h1 {
  font-size: 4rem;
  margin: .4em 0;
}
</style>
