<template>
  <v-container>
<v-card
class="mx-auto"
outlined>
    <form-restaurante></form-restaurante>
</v-card>
  </v-container>
</template>


<script>
import FormRestaurante from '~/components/forms/FormRestaurante.vue';

export default {
  middleware: 'auth-adm',
  components: {
    FormRestaurante
  }
}
</script>