<template>
  <v-form>

    <v-card-title class="headline">Formulario cliente:</v-card-title>

    <v-container>

      <v-row>
        <v-col
          cols="12"
          md=""
        >

        </v-col>
      </v-row>

      <v-row>

        <v-col
          cols="12"
          md="6"
        >

          <v-text-field
            v-model="nombre"
            :counter="20"
            label="Nombre cliente:"
            required
          >

          </v-text-field>

        </v-col>

        <v-col
          cols="12"
          md="3"
        >

          <v-text-field
            v-model="nombre"
            :counter="20"
            label="Telefono:"
            required
          >

          </v-text-field>

        </v-col>

      </v-row>

    </v-container>
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      nombre: ''
    }
  },

  methods: {
    guardar() {
      // GUARDAR EN EL BACKEND 
    }
  },
}
</script>