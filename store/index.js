export const state = () => ({
  authUser: null,
  userType: null,
  idRestaurante: 1,
  token: '123'
});

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user;
  },
  SET_USER_TYPE(state, type) {
    state.userType = type;
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let user = this.$auth.$storage.getUniversal('user');
    let type = this.$auth.$storage.getUniversal('type');
    commit('SET_USER_TYPE', type);
    commit('SET_USER', user);
  },

  async login({commit, req}, {username, password}) {
    let typeUser = 1;
    if (password == 'rest') {
      typeUser = 2;
    } else {
      typeUser = 1;
    }

    commit('SET_USER_TYPE', typeUser);
    commit('SET_USER', username);
    this.$auth.$storage.setUniversal('user', username);
    this.$auth.$storage.setUniversal('type', typeUser);
  },

  async logout({ commit }) {
    commit('SET_USER', null);
    commit('SET_USER_TYPE', null);
    this.$auth.$storage.removeUniversal('user');
    this.$auth.$storage.removeUniversal('type');
  }

}