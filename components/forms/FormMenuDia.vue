<template>
  <v-form
   ref="form"
    v-model="valid"
    lazy-validation>
    <v-card-title class="headline">Formulario Mesa:</v-card-title>
   
    <v-container>
<!--Inicio ==============================================-->
      <v-row>
        <v-col
          cols="12"
          md=""
        >

        <h1 class="text-center">Formulario Menú Dia</h1>

        </v-col>
      </v-row>
<!--Fin ==============================================-->

<!--Inicio ==============================================-->
      <v-row>
            <v-col
          cols="12"
          md="4"
        >
        <v-date-picker
      v-model="fechas"
      type="month"
      multiple
    ></v-date-picker>

    
    
<!--Button-->
            </v-col>


<!----->
        <v-col
          cols="12"
          md="4"
        >

          <v-text-field
            v-model="descripcion"
            :counter="20"
            label="Descripcion:"
            required
            :rules="rDescripcion"
          >

          </v-text-field>


  <v-text-field
            v-model="precio"
            :counter="20"
            label="Precio:"
            required
            :rules="rPrecio"
          >

          </v-text-field>

<br>
        <v-btn  :disabled="!valid"
        class="mr-4"
        @click="validate"
        color="accent">Registrar</v-btn>
        
      
<!--Button-->

  <!--Button-->
         
        <v-btn   color="error"
        :disabled="!valid"
        class="mr-4"
        @click="validate"> Cancelar</v-btn>
      
        
        </v-col>
<!---->
        <v-col
          cols="12"
          md="4"
        >
        </v-col>

      </v-row>
<!--Fin ==============================================-->





    </v-container>
  </v-form>
</template>


<script>

import axios from 'axios';
export default {
  data() {
    return {
      valid:true,
      menuDia:[], 
      descripcion: '',
      rDescripcion: [
        v => !!v || 'Descripcion es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
      precio:'',
      rPrecio: [
        v => !!v || 'Telefono es requerido.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
      fechas:[]
      
      //fechas
     
    }
  },

  methods: {
     validate () {
       console.log(this.fechas);
      let valido = this.$refs.form.validate();

      if (valido) {
        axios.post(this.$axios.defaults.baseURL+'api/v1/menudia', {
          id_restaurante: this.$store.state.idRestaurante,
          menu_dia: JSON.stringify({"menu":"menu1"}), //pendiente revisar
          fechas: JSON.stringify(this.fechas), //pendiente revisar
          descripcion: this.descripcion,
          precio: this.precio

                })
                .then((response)=> {
                    console.log('objeto guardado',response)
                })
                .catch((error) =>{
                    console.log(error)
                });
      }
    },
     
  },
}
</script>