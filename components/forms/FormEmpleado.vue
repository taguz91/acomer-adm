<template>
  <v-form
  ref="form"
  v-model="valid"
  lazy-validation>
    <v-card
    class="mx-auto"
    outlined
    >
    <v-card-title class="hideline">Formulario Empleado</v-card-title>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="identificacion"
            :rules="rIdentificacion"
            :counter="10"
            label="Identificación:*"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nombre"
            :rules="rNombre"
            :counter="50"
            label="Nombre:*"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="apellido"
            :rules="rApellido"
            :counter="50"
            label="Apellido:*"
            required
          ></v-text-field>
        </v-col>
      </v-row>

  <v-row>
   <v-col
   cols="4"
   >
      <template>
        <v-file-input
          label="Subir imagen"
          filled
          prepend-icon="mdi-camera"
        ></v-file-input>
      </template>
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
    return{
      valid: true,
      identificacion: '',
      nombre: '',
      apellido: '',
      rIdentificacion: [
        v => !!v || 'La identificación es requerida',
        v => (v && v.length == 10) || 'Debe contener 10 caracteres'
        //v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
      rNombre: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 50) || 'No puede tener mas de 50 caracteres',
        v => /^([A-Z a-z])*$/.test(v) || 'Solo pueden ser letras.'
      ],
      rApellido: [
        v => !!v || 'El apellido es requerido',
        v => (v && v.length <= 50) || 'No puede tener mas de 50 caracteres',
        v => /^([A-Z a-z])*$/.test(v) || 'Solo pueden ser letras.'
      ]
    }
  },
  methods: {
    validate(){
      let valido = this.$refs.form.validate();

      if(valido){
        console.log('GUARDAMOS EN EL AXIOS');
      }
    },
  },
}
</script>