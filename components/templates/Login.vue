<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer />

              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <nuxt-link
                    to="/"
                    v-on="on"
                  >
                    <v-icon>mdi-close-circle</v-icon>
                  </nuxt-link>
                </template>
                <span>Home</span>
              </v-tooltip>
            </v-toolbar>

            <v-form @submit.prevent="login">
              <v-card-text>
                
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-person"
                    type="text"
                    v-model="username"
                  />

                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import defaultVue from '../../layouts/default.vue';
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      });

      this.username = '';
      this.password = '';
      
      this.$router.push('/');
    }
  }
}
</script>