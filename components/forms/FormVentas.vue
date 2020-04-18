<template>

  <v-form>
      <v-card
      class="mx-auto"
      outlined
      >
    <v-card-title class="hideline">Formulario Ventas</v-card-title>

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
            label="Identificacion:*"
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
            :counter="100"
            label="Nombre:*"
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="direccion"
            :rules="rDireccion"
            label="Dirección:*"
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="telefono"
            :rules="rTelefono"
            :counter="10"
            label="Teléfono:*"
            required
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

    <v-row>
        <v-col
            cols="12"
            md="2"
        >
           <v-btn
            :disabled="!validO"
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
      identificacion: '',
      nombre: '',
      direccion: '',
      telefono: '',
      correo: '',
      rIdentificacion: [
        v => !!v || 'El campo es obligatorio',
        v => (v && v.length == 10) || 'Debe contener 10 caracteres'
      ],
      rNombre: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 100) || 'No puede tener mas caracteres',
        v => /^([A-Z a-z])*$/.test(v) || 'Solo pueden ser letras.'
      ],
      rDireccion: [
        v => !!v || 'El campo es obligatorio',
        v => (v && v.length <= 100) || 'El campo no debe tener mas caracteres'
      ],
      rTelefono: [
        v => !!v || 'El campo es obligatorio.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
      rCorreo: [
        v => !!v || 'Correo Electrónico es requerido',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(v) || 'Correo Electrónico inválido'
      ]
    }
  },
  methods: {
    validate(){
      let valido = this.$refs.form.validate();

      if(valido){
        console.log('GUARDAMOS EN EL AXIOS');
      }
    }
  }
}
</script>>