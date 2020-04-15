<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>

    <h2>
      {{ message }}
    </h2>
    <NuxtLink to="/">
      Home page
    </NuxtLink>

    <div class="mx-auto">
      <v-btn
        class="p-2"
        color="accent"
        nuxt
        to="/login"
      >
        Login
      </v-btn>
    </div>

  </v-app>
</template>

<script>
export default {
  layout: 'solo-page',
  props: {
    error: {
      type: Object,
      message: null,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      message: ''
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? 
      this.pageNotFound : this.otherError
    this.message = this.error.message; 
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.text-big {
  font-size: 2.5rem;
  padding: 15px 0 15px 0;
}
</style>
