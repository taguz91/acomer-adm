<template>
  <v-container>
<v-card
class="mx-auto"
outlined>

    <form-cliente></form-cliente>
  </v-card>

  </v-container>
</template>


<script>

import FormCliente from '~/components/forms/FormCliente.vue';

export default {
  middleware: 'auth-res',
  layout: 'menu-rest',
  components: {
    FormCliente
  }
}

</script>