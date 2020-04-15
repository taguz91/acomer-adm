<template>
  <v-app>
    <login v-if="!$store.state.authUser"/>
    <adm-nav v-else/>
  </v-app>
</template>

<script>
import AdmNav from '~/components/templates/AdmNav.vue';
import Login from '~/components/templates/Login.vue';

export default {
  components: {
    AdmNav,
    Login
  }
}
</script>
