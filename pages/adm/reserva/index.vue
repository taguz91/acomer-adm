<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="reservas"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      hide-default-footer
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
    >

      <template v-slot:top>
        <v-text-field
          label="Buscador:"
          class="mx-4 mt-2 pt-2"
        ></v-text-field>
      </template>
    
    </v-data-table>

    <v-flex
      xs8
      class="mt-4 ml-auto" 
    >
      <v-pagination 
        :disabled="loading"
        value="page"
        v-model="page"
        color="accent"
        :length="pageCount"
        @input="next"
      />
    </v-flex>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        page: 1,
        lastLoad: 1,
        pageCount: 37,
        sortBy: 'fecha_reserva',
        sortDesc: false,
        loading: false,
        headers: [
          {
            text: 'Fecha Reserva',
            align: 'center',
            value: 'fecha_reserva',
          },
          { text: '# Personas', value: 'numero_personas' },
          { text: 'Total', value: 'total' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Identificacion', value: 'identificacion' },
          { text: 'Telefono', value: 'telefono' },
        ],
        reservas: [],
      }
    },
    asyncData({params, error}) {
      return axios.get('http://localhost:8000/api/v1/reserva')
      .then((res) => {
        let data = res.data;
        if (data.status < 400) {
          return {
            pageCount: data.meta.last_page,
            reservas: data.data
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
    methods: {
      next: function (page) {
        if (this.lastLoad != page) {
          this.loading = true;
          axios.get('http://localhost:8000/api/v1/reserva?page=' + page)
          .then((res) => {
            let data = res.data;
            if (data.status < 400) {
              this.reservas = data.data
            }
            this.loading = false;
          })
          .catch((e) => {
            this.loading = false;
            console.log(e);
          });
          this.lastLoad = page;
        } else {
          console.log('YA CARGAMOS!!!'); 
        }
      }
    }
  }

</script>