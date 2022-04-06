const MenuManagement = {
    namespaced: true,
    state: () => ({
        dark: {
            bgColor: 'dark',
            color: 'primary',
        },
        light: {
            bgColor: 'light',
            color: 'primary',
        },
        header: {
            currentTheme: 'dark',
            currentThemeColor: 'primary',
        },
        menu: {
            currentTheme: 'dark',
            currentThemeColor: 'primary',
        },
    }),

    mutations: {
        setTheme(state, { layout, theme }) {
            state[layout].currentTheme = state[theme]['bgColor']
            state[layout].currentThemeColor = state[theme]['color']
        },
    },

    actions: {
        async switchTheme({ state, commit }, { layout, theme }) {
            commit('setTheme',{ layout, theme })
        },
    },

    getters: {},
}

export default MenuManagement
