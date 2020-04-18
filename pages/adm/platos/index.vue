<template>
  <div>

    <h1 class="mt-2 mb-3">Platos</h1>

    <v-data-table
      :headers="headers"
      :items="items"
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

      <template v-slot:item.actions="{ item }" >
        <v-icon
          small
          class="mx-auto"
          @click="showMore(item)"
        >
          mdi-eye
        </v-icon>
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
    middleware: 'auth-adm',
    data () {
      return {
        page: 1,
        lastLoad: 1,
        pageCount: 37,
        sortBy: 'fecha_reserva',
        sortDesc: false,
        loading: false,
        headers: [
          { text: 'Nombre', value: 'nombre' },
          { text: 'Precio', value: 'precio' },
          { text: 'Ingredientes', value: 'ingredientes' },
          { text: 'Nombre Restaurante', value: 'nombre_restaurante'},
          { 
            text: 'Acciones', 
            value: 'actions', 
            sortable: false,
            align: 'center',
          },
        ],
        items: [],
      }
    },
    asyncData({$axios, params, error}) {
      return axios.get($axios.defaults.baseURL +'api/v1/plato')
      .then((res) => {
        let data = res.data;
        if (data.status < 400) {
          return {
            pageCount: data.meta.last_page,
            items: data.data
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
    methods: {
      next(page) {
        if (this.lastLoad != page) {
          this.loading = true;
          axios.get(this.$axios.defaults.baseURL +'api/v1/plato?page=' + page)
          .then((res) => {
            let data = res.data;
            if (data.status < 400) {
              this.items = data.data
            }
            this.loading = false;
          })
          .catch((e) => {
            this.loading = false;
            console.log(e);
          });
          this.lastLoad = page;
        }
      },
      showMore(item) {
        console.log(item);
      }
    }
  }

</script>