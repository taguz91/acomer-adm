<template>

  <v-form
  ref="form"
  v-model="valid"
  lazy-validation>
      <v-card
      class="mx-auto"
      outlined
      >
    <v-card-title class="headline">Formulario Promocion</v-card-title>
    <v-container>
        <v-row>
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
                  label="Fecha inicio:"
                  :rules="rFechaInicio"
                  persistent-hint
                  prepend-icon="mdi-calendar"
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
                  label="Fecha fin:"
                  :rules="rFechaFin"
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

      <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="precio"
          label="Precio"
          :rules="rPrecio"
          prefix="$"
          max-width="290px"
          min-width="290px"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="descuento"
          label="Descuento"
          :rules="rDescuento"
          prefix="$"
          max-width="290px"
          min-width="290px"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="extra"
            label="Extra"
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col
            cols="12"
            md="2"
        >
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Guardar
            </v-btn>
        </v-col>

        <v-col
            cols="12"
            md="2"
        >
            <v-btn
                color="error"
            >Cancelar</v-btn>
        </v-col>
    </v-row>
      
    </v-container>
    </v-card>
  </v-form>
</template>
<script>
export default {
  data(){
    return {
      valid: true,
      fechaInicio: '',
      fechaFin: '',
      precio: '',
      descuento: '',
      extra: '',
      rFechaInicio: [
        v => !!v || 'El campo es obligatorio'
      ],
      rFechaFin: [
        v => !!v || 'El campo es obligatorio'
      ],
      rPrecio: [
        v => !!v || 'El campo es obligatorio',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.',
        //v => (v && v.length < 6) || 'El campo no debe tener mas caracteres'
      ],
      rDescuento: [
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ]
    }
  },
  methods: {
    validate(){
      let valido = this.$refs.form.validate();

      if (valido){
        console.log('GUARDAMOS EN EL AXIOS');
      }
    },
  },
}
</script>