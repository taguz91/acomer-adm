<template>

  <v-form  ref="form"
    v-model="valid"
    lazy-validation>
      
    <v-card-title class="hideline">Formulario Plato</v-card-title>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="nombrePlato"
            :rules="rNombrePlato"
            :counter="50"
            label="Nombre Plato:*"
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="precio"
          label="Precio:*"
          :rules="rPrecio"
          prefix="$"
        ></v-text-field>
      </v-col>
    </v-row>


    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="ingredientes"
            :rules="rIngredientes"
            label="Ingredientes:*"
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
          label="Subir imagen:"
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
  </v-form>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      valid:true,
      nombrePlato: '',
      precio: '',
      ingredientes: '',
      rNombrePlato: [
        v => !!v || 'El campo es obligatorio',
        v => /^([A-Z a-z])*$/.test(v) || 'Solo pueden ser numeros.',
        v => (v && v.length <= 50) || 'El campo no debe tener mas caracteres'
      ],
      rPrecio: [
        v => !!v || 'El campo es obligatorio',
        v => /^([0-9,.])*$/.test(v) || 'Solo pueden ser numeros.',
        v => (v && v.length < 6) || 'El campo no debe tener mas caracteres'
      ],
      rIngredientes: [
   v => !!v || 'Nombre Categoria es requerido.',
        v => (v && v.length <= 50) || 'No debe contener mas de 50 caracteres.'
      ]
    }
    },

    methods: {
     validate () {
      let valido = this.$refs.form.validate();

      if (valido) {
        axios.post(this.$axios.defaults.baseURL+'api/v1/plato', {
                    nombre: this.nombrePlato,
                    precio: this.precio,
                    ingredientes: this.ingredientes,
                    url_image: 'uno'
                })
                .then((response)=> {
                    console.log('objeto guardado',response)
                })
                .catch((error) =>{
                    cconsole.log(error)
                });
      }
    },
  },


  
}
</script>