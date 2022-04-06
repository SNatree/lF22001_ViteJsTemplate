const MenuManagement = {
    namespaced: true,
    state: () => ({ notifications: [] }),

    mutations: {
        setNotificationItems(state, { items }) {
            state.notifications.push(items)
        },
    },

    actions: {
        async addNotification({ state, commit }, data) {
            commit('setNotificationItems', { items: data })
        },
    },

    getters: {},
}

export default MenuManagement
