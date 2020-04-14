<template>
  <v-form>
      <v-card>
          <v-card-title class="headline">Formulario Sucursal</v-card-title>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="numero"
            :rules="nameRules"
            :counter="10"
            label="Sucursal #"
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
            v-model="direccion"
            :rules="nameRules"
            :counter="10"
            label="Dirección"
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
            v-model="nombre_restaurante"
            :rules="emailRules"
            label="Nombre Restaurante"
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

<script>


</script>