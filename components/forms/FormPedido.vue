<template>
  <v-form
  ref="form"
    v-model="valid"
    lazy-validatio>
     <v-card-title class="headline">Formulario Pedido:</v-card-title>
   
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
            v-model="notas"
            :counter="20"
            label="Notas:*"
            required
            :rules="rNotas"
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

       <v-combobox
          v-model="mesas"
          :items="items"
          label="Mesas:*"
          multiple
          outlined
          dense
        ></v-combobox>

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

        <v-btn  :disabled="!valid"
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
        @click="validate">Cancelar</v-btn>
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
        mesas: ['Seleccione una mesa'],
      notas: '',
      rNotas:[
        v => !!v || 'Notas es requerido.',
        v => (v && v.length <= 40) || 'No debe contener mas de 40 caracteres.'
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