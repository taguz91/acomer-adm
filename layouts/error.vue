<template>
  <v-app>
    
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >

        <v-col
          cols="12"
          sm="10"
          md="6"
        >

          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>


          <div class="mx-auto my-3">
            <v-btn
              class="p-2"
              color="accent"
              nuxt
              to="/"
            >
              Regresar al inicio
            </v-btn>
          </div>

          <v-alert
            icon="mdi-silverware-clean"
            border="left"
            type="info"
            dismissible
          >
            <span v-html="message"></span>
          </v-alert>

          <div class="mx-auto">
            <v-spacer/>
            <v-btn
              class="p-2"
              color="accent"
              nuxt
              to="/login"
            >
              Login
            </v-btn>
          </div>

        </v-col>

      </v-row>

    </v-container>

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
      pageNotFound: '404 Pagina no encontrada!',
      otherError: 'Error',
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
