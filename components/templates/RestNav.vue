<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped=true
      fixed
      app
    >
      <v-list dense>

        <template v-for="(option, o) in options">

          <v-row
            v-if="option.categoria != ''"
            :key="'row-' + o"
            align="center"
          >
            <v-col>
              <v-subheader>
                {{ option.categoria }}
              </v-subheader>
            </v-col>

          </v-row>

          <v-divider
            :key="'divider-' + o"
            class=""  
          >
          </v-divider>

          <v-list-item
            v-for="(item, i) in option.items"
            :key="o + '-opt-' + i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>

        </template>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left=true
      fixed
      app
      color="accent"
    >
      <v-app-bar-nav-icon 
        color="white"
        @click.stop="drawer = !drawer" 
      />

      <v-toolbar-title  
        class="white--text"
      >
        <span 
          class="hidden-sm-and-down"
          >{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
      
      <span class="white--text">{{ authUser }}</span>

      <v-btn
        icon 
        @click="logout"
      >
        <v-icon
          color="white"
        >mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class=""
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
      color="accent"
    >
      <span class="white--text">&copy; ZeroTeam {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'; 

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      options: [
        {
          categoria: '',
          items: [
            {
              icon: 'mdi-chevron-right-circle',
              title: 'Login',
              to: '/login'
            },
            {
              icon: 'mdi-home',
              title: 'Home',
              to: '/'
            },
            {
              icon: 'mdi-account-box',
              title: 'Perfil',
              to: '/perfil'
            },
          ]
        },

        {
          categoria: 'Restaurante',
          items: [
            {
              icon: 'mdi-noodles',
              title: 'Sucursales',
              to: '/restaurante/sucursales'
            },
            {
              icon: 'mdi-table-chair',
              title: 'Mesas',
              to: '/restaurante/mesas'
            },
            {
              icon: 'mdi-cookie',
              title: 'Productos',
              to: '/restaurante/productos'
            },
          ]
        },

        {
          categoria: 'Menus',
          items: [
            {
              icon: 'mdi-cards-outline',
              title: 'Menus',
              to: '/restaurante/menus'
            },
            {
              icon: 'mdi-dishwasher',
              title: 'Menus dia',
              to: '/restaurante/menus/dia'
            },
            {
              icon: 'mdi-silverware',
              title: 'Platos',
              to: '/restaurante/menus/platos'
            },
            {
              icon: 'mdi-food-fork-drink',
              title: 'Combos',
              to: '/restaurante/menus/combos'
            },
          ]
        },

        {
          categoria: 'Administracion',
          items: [
            {
              icon: 'mdi-folder-account',
              title: 'Empleados',
              to: '/restaurante/administracion/empleados'
            },
            {
              icon: 'mdi-note',
              title: 'Pedidos',
              to: '/restaurante/administracion/pedidos'
            },
            {
              icon: 'mdi-cash-usd-outline',
              title: 'Ventas',
              to: '/restaurante/administracion/ventas'
            },
            {
              icon: 'mdi-alarm',
              title: 'Reservas',
              to: '/restaurante/administracion/reservas'
            },
            {
              icon: 'mdi-percent',
              title: 'Promociones',
              to: '/restaurante/administracion/promociones'
            },
            {
              icon: 'mdi-printer',
              title: 'Reportes',
              to: '/restaurante/administracion/reportes'
            },
            {
              icon: 'mdi-cash',
              title: 'Ventas',
              to: '/restaurante/administracion/ventas'
            },
          ]
        }
      ],
      items: [
        
      ],
      right: true,
      title: 'Acomer - Restaurante'
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/');
    }
  },
  computed: mapState([
    'authUser'
  ]),
}
</script>
