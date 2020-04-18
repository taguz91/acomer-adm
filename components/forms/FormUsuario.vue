<template>

  <v-form>
      <v-card
      class="mx-auto"
      outlined
      >
    <v-card-title class="hideline">Formulario Usuario</v-card-title>

    <v-container>
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
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="clave"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rClave"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Ingresar Contraseña"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="claveConf"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rClaveConf"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirmar Contraseña"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="correo"
            :rules="rCorreo"
            label="Correo:*"
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-btn
        :disabled="!valido"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Guardar
      </v-btn>
      
    </v-container>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      valid: true,
      nombre: '',
      correo: '',
      clave: '',
      claveConf: '',
      rNombre: [
        v => !!v || 'Nombre es requerido.',
        v => (v && v.length <= 50) || 'No debe contener más de 20 caracteres'
      ],
      rClave: [
        v => !!v || 'Contraseña es requerida.'
      ],
      rClaveConf: [
        v => !!v || 'Contraseña es requerida.'
      ],
      rCorreo: [
        v => !!v || 'Correo Electrónico es requerido',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(v) || 'Correo Electrónico inválido'
      ]
    }
  },

  methods: {
    validate(){
      let  valido = this.$refs.form.validate();

      if(valido){
        console.log('GUARDAMOS EN EL AXIOS');
      }
    },
  },
}
</script>