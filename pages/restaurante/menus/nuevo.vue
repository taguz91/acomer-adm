<template>
  <v-container>
    <form-menu></form-menu>
  </v-container>
</template>


<script>
import FormMenu from '~/components/forms/FormMenu.vue';

export default {
  middleware: 'auth-res',
  layout: 'menu-rest',
  components: {
    FormMenu
  }
}
</script>