<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

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
            label="Nombre cliente:*"
            required
            :rules="rNombre" 
          >

          </v-text-field>

        </v-col>

        <v-col
          cols="12"
          md="3"
        >

          <v-text-field
            v-model="telefono"
            :rules="rTelefono"
            :counter="20"
            label="Telefono:*"
            required
          >

          </v-text-field>

        </v-col>

      </v-row>


      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Guardar
      </v-btn>

    </v-container>
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      valid: true,
      nombre: '',
      rNombre: [
        v => !!v || 'Nombre es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
      telefono: '',
      rTelefono: [
        v => !!v || 'Telefono es requerido.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ]

    }
  },

  methods: {
    validate () {
      let valido = this.$refs.form.validate();

      if (valido) {
        console.log('GUARDAMOS EN EL AXIOSSS!!');
        
      }
    },
  },
}
</script>