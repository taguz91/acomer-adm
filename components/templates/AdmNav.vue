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
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>


    <v-btn
      bottom
      fab
      fixed
      right
      color="accent"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

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
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Platos',
          to: '/adm/platos'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Combos',
          to: '/adm/combos'
        },
        {
          icon: 'mdi-apps',
          title: 'Menus',
          to: '/adm/menus'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Restaurante',
          to: '/adm/restaurante'
        }
      ],
      right: true,
      title: 'Acomer - Administracion'
    }
  }
}
</script>
