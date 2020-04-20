<template>

  <v-form
  ref="form"
    v-model="valid"
    lazy-validation>
     
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
            v-model="total"
            :rules="rTotal"
            label="Total:*"
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
      identificacion: '',
      nombre: '',
      direccion: '',
      telefono: '',
      total: '',
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
      ],rTotal:[
        v => !!v || 'Total es requerida.',
        v => /^([0-9])*$/.test(v) || 'Solo pueden ser numeros.'
      ]
    }
  },
  methods: {
    validate(){
      let valido = this.$refs.form.validate();

      if(valido){
         axios.post(this.$axios.defaults.baseURL+'api/v1/encabezado/factura', {
                    id_cliente: 1,
                    id_pedido: 1,
                    total: 1,
                    nombre: this.nombre,
                    direccion: this.direccion,
                    telefono:this.telefono,
                    identificacion: this.identificacion,
                    id_restaurante: this.$store.state.idRestaurante
                    
                })
                .then((response)=> {
                    console.log('objeto guardado',response)
                })
                .catch((error) =>{
                    console.log(error)
                });
      }
    }
  }
}
</script>>