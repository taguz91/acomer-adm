<template>

  <v-form>
      <v-card
      class="mx-auto"
      outlined
      >
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
            :disabled="!valido"
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
      nombrePlato: '',
      precio: '',
      ingredientes: '',
      rNombrePlato: [
        v => !!v || 'El campo es obligatorio',
        v => (v && v.length >= 50) || 'El campo no debe tener mas caracteres'
      ],
      rPrecio: [
        v => !!v || 'El campo es obligatorio',
        v => /^([0-9,.])*$/.test(v) || 'Solo pueden ser numeros.',
        v => (v && v.length < 5) || 'El campo no debe tener mas caracteres'
      ],
      rIngredientes: [

      ]
    }
  }
}
</script>