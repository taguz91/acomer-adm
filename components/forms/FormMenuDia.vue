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
            v-model="precio"
            :counter="20"
            label="Precio:"
            required
            :rules="rPrecio"
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
          md="4"
        >

        <v-date-picker
        v-model="dates"
        multiple
      ></v-date-picker>


            </v-col>


<!----->

        <v-col
          cols="12"
          md="4"
        >

<!-- <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="Multiple picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker v-model="dates" multiple no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
        </v-date-picker>
      </v-menu> -->

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
        <v-btn   color="error"
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
      menu:'',
      dates:'',
      descripcion: '',
      rDescripcion: [
        v => !!v || 'Descripcion es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
      precio:'',
      rPrecio: [
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