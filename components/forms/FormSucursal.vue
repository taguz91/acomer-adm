<template>
  <v-form>
      <v-card
      class="mx-auto"
      outlined
      >
          <v-card-title class="headline">Formulario Sucursal</v-card-title>
    <v-container>
      <v-row>
        <v-col
         cols="6"
         md="3"
        >
        <v-checkbox label="Lunes"></v-checkbox>
        </v-col>
        <v-col
        cols="6"
        md="3"
        >
        <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Picker in menu"
            prepend-icon="access_time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
          </v-col>
        </v-row>
        <v-checkbox label="Martes"></v-checkbox>
        <v-checkbox label="Miercoles"></v-checkbox>
        <v-checkbox label="Jueves"></v-checkbox>
        <v-checkbox label="Viernes"></v-checkbox>
        <v-checkbox label="Sábado"></v-checkbox>
        <v-checkbox label="Domingo"></v-checkbox>
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