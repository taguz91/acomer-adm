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
import FormCliente from '~/components/forms/FormMesa.vue';

export default {
  components: {
    FormCliente
  }
}
</script>