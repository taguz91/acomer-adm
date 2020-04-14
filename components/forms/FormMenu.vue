<template>

  <v-card
    class="mx-auto"
    outlined
  >

    <v-card-title class="headline">Creación de menú:</v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>

        <v-row>
          <v-col
            cols="12"
            md="6"
          >

            <v-text-field
              v-model="nombre"
              :counter="100"
              label="Menu:*"
              required
            >

            </v-text-field>

          </v-col>

          <v-col
            cols="12"
            md="3"
          >

            <v-menu
              ref="menuFechaInicio"
              v-model="menuFechaInicio"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >

              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="fechaInicio"
                  label="Mes inicio:"
                  persistent-hint
                  prepend-icon="medi-calendar"
                  v-on="on"
                >
                </v-text-field>
              </template>

              <v-date-picker
                v-model="fechaInicio"
                no-title
                @input="menuFechaInicio = false"
              >
              </v-date-picker>

            </v-menu>

          </v-col>


          <v-col
            cols="12"
            md="3"
          >
            <v-menu
              ref="menuFechaFin"
              v-model="menuFechaFin"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="fechaFin"
                  label="Mes fin:"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-on="on"
                >
                </v-text-field>
              </template>

              <v-date-picker
                v-model="fechaFin"
                no-title
                @input="menuFechaFin = false"
              >
              </v-date-picker>

            </v-menu>

          </v-col>

        </v-row>


        <h4>Crear secciones:</h4>

        <v-row>

          <v-col
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="seccion"
              :counter="30"
              label="Sección:"
            >
            </v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="7"
          >
            <v-text-field
              v-model="descripcion"
              :counter="50"
              label="Descripción:"
            >
            </v-text-field>
          </v-col>

        </v-row>

        <v-card-actions>
          <v-btn
            color="accent"
            class="mr-4"
            @click="guardar"
          >
            Guardar
          </v-btn>
        </v-card-actions>

      </v-container>
    </v-form>
  </v-card>


</template>


<script>
export default {
  data(){
    return {
      valid: true,
      nombre: '',
      fechaInicio: new Date('2018-12-12').toISOString()
        .substring(0, 10),
      fechaFin: new Date('2018-12-12').toISOString()
        .substring(0, 10),
      menuFechaInicio: false,
      menuFechaFin: false,
      seccion: '',
      descripcion: '',
    }
  },

  methods: {
    guardar () {
      this.$refs.form.validate();
    }
  },

}
</script>