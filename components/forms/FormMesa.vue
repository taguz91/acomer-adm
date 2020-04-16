<template>
  <v-form>
    <v-container>
<!--Inicio ==============================================-->
      <v-row>
        <v-col
          cols="12"
          md=""
        >

        <h1 class="text-center">Formulario Mesa</h1>

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
            label="Numero:"
            required
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
            label="Capacidad:"
            required
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
            label="Descripcion:"
            required
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
        numero:'',
      capacidad: '',
      descripcion:''
    }
  },

  methods: {
    guardar() {
      // GUARDAR EN EL BACKEND 
    }
  },
}
</script>