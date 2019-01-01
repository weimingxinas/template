import Api from '@/service';



const state = {
  routes: [],
  menus: []
};

const getters = {
  'GET_ROUTES': state => state.routes,
  'GET_MENUS': state => state.menus
};

const mutations = {
  'UPDATE_ROUTES'(state, routes) {
    state.routes = routes;
  },
  'UPDATE_MENUS'(state, menus) {
    state.menus = menus;
  }
};


const actions = {
  async updateRoute({ commit, dispatch }, params) {
    try {
      const menuList = await Api.auth.getMenuList();
      commit('UPDATE_ROUTES', menuList);
      commit('UPDATE_MENUS', {});
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
