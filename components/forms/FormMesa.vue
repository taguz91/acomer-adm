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

        </v-col>
      </v-row>
<!--Fin ==============================================-->

<!--Inicio ==============================================-->
      <v-row>
            <v-col
          cols="12"
          md="4"
        >



            </v-col>


<!----->
        <v-col
          cols="12"
          md="4"
        >

          <v-text-field
            v-model="numero"
            :counter="20"
            label="Numero:*"
            required
            :rules="rNumero"
          >

          </v-text-field>

        </v-col>
<!---->
        <v-col
          cols="12"
          md="4"
        >
        </v-col>

      </v-row>
<!--Fin ==============================================-->

<!--Inicio ==============================================-->
      <v-row>
            <v-col
          cols="12"
          md="4"
        >



            </v-col>


<!----->
        <v-col
          cols="12"
          md="4"
        >

       <v-text-field
            v-model="capacidad"
            :counter="20"
            label="Capacidad:*"
            required
            :rules="rCapacidad"
          >

          </v-text-field>
        </v-col>
<!---->
        <v-col
          cols="12"
          md="4"
        >
        </v-col>

      </v-row>
<!--Fin ==============================================-->

<!--Inicio ==============================================-->
      <v-row>
                 <v-col
          cols="12"
          md="4"
        >
            </v-col>


<!----->

        <v-col
          cols="12"
          md="4"
        >
 <v-text-field
            v-model="descripcion"
            :counter="20"
            label="Descripcion:*"
            required
            :rules="rDescripcion"
          >

          </v-text-field>
          

        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        </v-col>

      

      </v-row>
<!--Fin ==============================================-->

<!--Inicio ==============================================-->
      <v-row>

       <v-col
          cols="12"
          md="5"
        >
            </v-col>


<!----->
        <v-col
          cols="12"
          md="2"
        >
<!--Button-->

          <div class="my-2">

        <v-btn  
        :disabled="!valid"
        class="mr-4"
        @click="validate"
        color="accent">Registrar</v-btn>
        
      </div>
<!--Button-->

  <!--Button-->
          <div class="my-2">
        <v-btn  color="error"
        :disabled="!valid"
        class="mr-4"
        @click="validate"
        >Cancelar</v-btn>
      </div>
<!--Button-->
        </v-col>

        <v-col
          cols="12"
          md="2"
        >




        </v-col>

      

      </v-row>
<!--Fin ==============================================-->


    </v-container>
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      valid:true,
        numero:'',
        rNumero:[
        v => !!v || 'Numero es requerido.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
      capacidad: '',
      rCapacidad:[
        v => !!v || 'Capacidad es requerida.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
      descripcion:'',
      rDescripcion: [
        v => !!v || 'Descripcion es requerida.',
        v => (v && v.length <= 25) || 'No debe contener mas de 25 caracteres.'
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