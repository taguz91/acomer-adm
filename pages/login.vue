<template>
  <Login/>
</template>

<script>
import Login from '~/components/templates/Login.vue';

export default {
  middleware: 'login',
  layout: 'solo-page',
  components: {
    Login
  }
}
</script>