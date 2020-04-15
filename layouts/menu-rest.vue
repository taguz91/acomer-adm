<template>
  <v-app>
    <login v-if="!$store.state.authUser"/>
    <rest-nav v-else/>
  </v-app>
</template>

<script>
import RestNav from '~/components/templates/RestNav.vue';
import Login from '~/components/templates/Login.vue';

export default {
  components: {
    RestNav,
    Login
  }
}
</script>
