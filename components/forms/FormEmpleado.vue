<template>
  <v-form>
    <v-card>
    <v-card-title class="hideline">Formulario Empleado</v-card-title>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="identificacion"
            :rules="nameRules"
            :counter="10"
            label="Identificación"
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
          md="4"
        >
          <v-text-field
            v-model="apellido"
            :rules="emailRules"
            label="Apellido"
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