import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './routes'
// import routes from './routes'
import store from './stores'
/**Begin bootstrap 5 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import { createPopper } from '@popperjs/core';
// /*and not as you have above i.e*/
// import Popper from "@popperjs/core";
/**End bootstrap 5 */
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

import DefaultLayout from './layouts/DefaultLayout.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'

const messages = {
    th: {
        label: {
            hello: 'สวัสดี',
        },
    },
    en: {
        label: {
            hello: 'Hello',
        },
    },
}

// your message resolver
const messageResolver = (obj, path) => {
    // simple message resolving!
    const msg = obj[path]
    return msg != null ? msg : null
}
const i18n = createI18n({
    useScope: 'global',
    legacy: false, // you must set `false`, to use Composition API
    locale: 'th', // set locale
    messageResolver,
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

const app = createApp(App)
app.component('layout-default', DefaultLayout)
app.component('layout-dashboard', DashboardLayout)
app.use(store)
app.use(Antd)
app.use(router)
app.use(i18n)
router.isReady().then(() => {
    app.mount('#app')
})
// await router.isReady()
// app.mount('#app')
// createApp(App).use(store).use(router).use(Antd).mount('#app')
