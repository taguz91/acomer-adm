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
      color="primary"
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
      <v-btn
        icon
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
      color="primary"
    >
      <span class="white--text">&copy; ZeroTeam {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
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
              to: '/adm/sucursales'
            },
            {
              icon: 'mdi-tag',
              title: 'Categorias',
              to: '/adm/categorias'
            },
            {
              icon: 'mdi-silverware',
              title: 'Platos',
              to: '/adm/platos'
            },
            {
              icon: 'mdi-food-fork-drink',
              title: 'Combos',
              to: '/adm/combos'
            },
            {
              icon: 'mdi-cards-outline',
              title: 'Menus',
              to: '/adm/menus'
            },
            {
              icon: 'mdi-dishwasher',
              title: 'Menus dia',
              to: '/adm/menus/dia'
            },
            {
              icon: 'mdi-cookie',
              title: 'Productos',
              to: '/adm/productos'
            },
            {
              icon: 'mdi-table-chair',
              title: 'Mesas',
              to: '/adm/mesas'
            },
            {
              icon: 'mdi-star',
              title: 'Calificaciones',
              to: '/adm/calificaciones'
            },
          ]
        },
        {
          categoria: 'Administracion',
          items: [
            {
              icon: 'mdi-note',
              title: 'Pedidos',
              to: '/adm/pedidos'
            },
            {
              icon: 'mdi-cash-usd-outline',
              title: 'Ventas',
              to: '/adm/ventas'
            },
            {
              icon: 'mdi-alarm',
              title: 'Reservas',
              to: '/adm/reservas'
            },
            {
              icon: 'mdi-percent',
              title: 'Promociones',
              to: '/adm/promociones'
            },
            {
              icon: 'mdi-printer',
              title: 'Reportes',
              to: '/adm/reportes'
            },
          ]
        },
        {
          categoria: 'Usuarios',
          items: [
            {
              icon: 'mdi-account',
              title: 'Usuarios',
              to: '/adm/usuarios'
            },
            {
              icon: 'mdi-pasta',
              title: 'Restaurantes',
              to: '/adm/restaurantes'
            },
            {
              icon: 'mdi-folder-account',
              title: 'Empleados',
              to: '/adm/usuarios/empleados'
            },
            {
              icon: 'mdi-smart-card',
              title: 'Clientes',
              to: '/adm/usuarios/clientes'
            },
            {
              icon: 'mdi-comment-account',
              title: 'Sugerencias',
              to: '/adm/clientes/sugerencias'
            },
            {
              icon: 'mdi-account-tie',
              title: 'Administradores',
              to: '/adm/administradores'
            },
            {
              icon: 'mdi-account-details',
              title: 'Historial',
              to: '/adm/usuarios/historial'
            },
          ]
        }
      ],
      items: [
        
      ],
      right: true,
      title: 'Acomer - Administracion'
    }
  }
}
</script>
