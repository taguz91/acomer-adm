<template>
  <v-form ref="form"
    v-model="valid"
    lazy-validation>
     <v-card-title class="headline">Formulario Restaurante:</v-card-title>
    
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
            v-model="nombre"
            :counter="20"
            label="Nombre Comercial:*"
            required
            :rules="rNombre"
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
            v-model="nombreFiscal"
            :counter="20"
            label="Nombre Fiscal:*"
            required
            :rules="rNombreFiscal"
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

        <v-btn  color="accent">Registrar</v-btn>
        
      </div>
<!--Button-->

  <!--Button-->
          <div class="my-2">
        <v-btn  color="error">Cancelar</v-btn>
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
      nombre: '',
      rNombre: [
        v => !!v || 'Nombre Restaurante es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
      nombreFiscal:'',
      rNombreFiscal: [
        v => !!v || 'Nombre Fiscal es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
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