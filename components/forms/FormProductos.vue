<template>
  <v-form ref="form"
    v-model="valid"
    lazy-validation>
     <v-card-title class="headline">Formulario Producto:</v-card-title>
    
    <v-container>
<!--Inicio ==============================================-->
      <v-row>
        <v-col
          cols="12"
          md=""
        >

        <h1 class="text-center">Formulario Productos</h1>

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
            label="Nombre:"
            required,
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
            v-model="stock"
            :counter="20"
            label="Stock:"
            required
            :rules="rStock"
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
            v-model="url_imagen"
            :counter="20"
            label="url_imagen:"
            required
            :rules="rUrl"
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
            </v-col>


<!----->

        <v-col
          cols="12"
          md="4"
        >
 <v-text-field
            v-model="precio"
            :counter="20"
            label="precio:"
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
        nombre:'',
        rNombre:[
        v => !!v || 'Nombre es requerido.',
        v => (v && v.length <= 20) || 'No debe contener mas de 20 caracteres.'
      ],
        stock:'',
        rStock:[
        v => !!v || 'Precio es requerido.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ],
        url_imagen:'',
        rUrl:[
          v => !!v || 'Url invalidad digite nuevamente',
          v => /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(v) || 'No es una url'
        ],
        precio:'',
        rPrecio:[
        v => !!v || 'Precio es requerido.',
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