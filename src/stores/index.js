import { createStore, createLogger } from 'vuex'
// import user from './modules/user'
import MenuM from './modules/MenuM'
import LangM from './modules/LangM'
import ThemeM from './modules/ThemeM'

const debug = process.env.NODE_ENV !== 'production'
// console.log(process.env.NODE_ENV);
export default createStore({
    modules: {
        // user,
        MenuM,
        LangM,
        ThemeM,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})
