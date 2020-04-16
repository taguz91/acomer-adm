<template>

  <v-form>
      <v-card
      class="mx-auto"
      outlined
      >
    <v-card-title class="hideline">Formulario Promocion</v-card-title>
    <v-container>
        <v-row>
        <v-col
            cols="12"
            md="3"
        >

            <v-menu
              ref="menuFechaInicio"
              v-model="menuFechaInicio"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >

              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="fechaInicio"
                  label="Fecha inicio:"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-on="on"
                >
                </v-text-field>
              </template>

              <v-date-picker
                v-model="fechaInicio"
                no-title
                @input="menuFechaInicio = false"
              >
              </v-date-picker>

            </v-menu>

          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-menu
              ref="menuFechaFin"
              v-model="menuFechaFin"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="fechaFin"
                  label="Fecha fin:"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-on="on"
                >
                </v-text-field>
              </template>

              <v-date-picker
                v-model="fechaFin"
                no-title
                @input="menuFechaFin = false"
              >
              </v-date-picker>

            </v-menu>

          </v-col>

        </v-row>

      <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          label="Precio"
          value="10.00"
          prefix="$"
          max-width="290px"
          min-width="290px"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          label="Descuento"
          value="10.00"
          prefix="$"
          max-width="290px"
          min-width="290px"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="extra"
            :rules="nameRules"
            :counter="10"
            label="Extra"
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