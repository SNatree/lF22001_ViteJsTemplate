const MenuManagement = {
    namespaced: true,
    state: () => ({ menus: [] }),

    mutations: {
        setMenusItems(state, { items }) {
            state.menus = items
        },
    },

    actions: {
        async addMenus({ state, commit }, data) {
            commit('setMenusItems', { items: data })
        },
    },

    getters: {},
}

export default MenuManagement
