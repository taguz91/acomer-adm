<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md3
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>

      <div class="my-4">
        <h1 class="text--accent text-center">ACOMER</h1>
      </div>


      <v-card>
        <v-card-title class="headline">
          Bienvenido a la aplicacion de administración
        </v-card-title>
        <v-card-actions>
          <v-btn
            color="primary"
            nuxt
            to="/adm"
          >
            Administracion
          </v-btn>
          <v-spacer />
          
          <v-btn
            nuxt
            to="/login"
          >
            Login
          </v-btn>

          <v-spacer />
          <v-btn
            color="accent"
            nuxt
            to="/restaurante"
          >
            Restaurante
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'solo-page',
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
