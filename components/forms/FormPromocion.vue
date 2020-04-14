<template>

  <v-form>
      <v-card>
    <v-card-title class="hideline">Formulario Promocion</v-card-title>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nombre"
            :rules="nameRules"
            :counter="10"
            label="Nombre"
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
            v-model="clave"
            :rules="nameRules"
            :counter="10"
            label="Contraseña"
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
            v-model="clave"
            :rules="nameRules"
            :counter="10"
            label="Confirmar Contraseña"
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
            v-model="correo"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>
        </v-col>
    </v-row>
      
    </v-container>
    </v-card>
  </v-form>
</template>