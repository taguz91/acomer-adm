<template>
  <v-form
  ref="form"
  v-model="valid"
  lazy-validation>
      <v-card
      class="mx-auto"
      outlined
      >
          <v-card-title class="headline">Formulario Sucursal</v-card-title>
    <v-container>

      <!--LUNES-->
      <v-row>
        <v-col
         cols="12"
         md="4"
        >
        <v-checkbox label="Lunes"></v-checkbox>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu1Lunes"
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
            label="Hora de Inicio"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu1Lunes"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>

    <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu2Lunes"
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
            label="Hora Fin"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2Lunes"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>  
        </v-row>

        <!--Martes-->
        <v-row>
        <v-col
         cols="12"
         md="4"
        >
        <v-checkbox label="Martes"></v-checkbox>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu1Martes"
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
            label="Hora de Inicio"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu1Martes"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>

    <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu2Martes"
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
            label="Hora Fin"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2Martes"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>  
        </v-row>

        <!--MIERCOLES-->
        <v-row>
        <v-col
         cols="12"
         md="4"
        >
        <v-checkbox label="Miercoles"></v-checkbox>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu1Miercoles"
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
            label="Hora de Inicio"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu1Miercoles"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>

    <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu2Miercoles"
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
            label="Hora Fin"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2Miercoles"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>  
        </v-row>

        <!--JUEVES-->
        <v-row>
        <v-col
         cols="12"
         md="4"
        >
        <v-checkbox label="Jueves"></v-checkbox>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu1Jueves"
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
            label="Hora de Inicio"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu1Jueves"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>

    <v-col
        cols="12"
        md="4"
        >
        <v-menu
        ref="menu"
        v-model="menu2Jueves"
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
            label="Hora Fin"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2Jueves"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>  
        </v-row>

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
            :rules="rNumero"
            :counter="3"
            label="Sucursal #:*"
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
            :rules="rDireccion"
            :counter="50"
            label="Dirección:*"
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
    </v-card>
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      valid: true,
      numero: '',
      direccion: '',
      time: null,
        menu2Lunes: false,
        modal2: false,
        menu1Lunes: false,
        menu1Martes: false,
        menu2Martes: false,
        menu1Miercoles: false,
        menu2Miercoles: false,
        menu1Jueves: false,
        menu2Jueves: false,
      rNumero: [
        v => !!v || 'El campo es obligatorio',
        v => (v && v.length <=3) || 'El campo no debe tener mas caracteres'
      ],
      rDireccion: [
        v => !!v || 'El campo es obligatorio',
        v => (v && v.length <= 50) || 'El campo no debe tener mas caracteres'
      ]
    }
  },
  methods: {
    validate(){
      let valido = this.$refs.form.validate();

      if(valido){
        console.log('GUARDAMOS EN EL AXIOS');
      }
    }
  }
}
</script>