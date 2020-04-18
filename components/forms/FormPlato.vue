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
            :rules="nameRules"
            :counter="20"
            label="Nombre Plato"
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          label="Precio"
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
            :rules="nameRules"
            :counter="10"
            label="Ingredientes"
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
          label="Subir imagen"
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
                color="accent"
            >Guardar
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