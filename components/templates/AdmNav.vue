<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped=true
      fixed
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
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
          icon: 'mdi-pasta',
          title: 'Restaurantes',
          to: '/adm/restaurante'
        },
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
          icon: 'mdi-alarm',
          title: 'Reservas',
          to: '/adm/reserva'
        },
        {
          icon: 'mdi-account',
          title: 'Usuarios',
          to: '/adm/usuarios'
        },
        {
          icon: 'mdi-folder-account',
          title: 'Empleados',
          to: '/adm/empleados'
        },
        {
          icon: 'mdi-smart-card',
          title: 'Clientes',
          to: '/adm/clientes'
        },
        {
          icon: 'mdi-account-tie',
          title: 'Administradores',
          to: '/adm/administradores'
        },
      ],
      right: true,
      title: 'Acomer - Administracion'
    }
  }
}
</script>
