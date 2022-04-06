<template>
    <div>
        <h1>Login</h1>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<script >
import { defineComponent, defineAsyncComponent } from 'vue'
import router from './../../routes'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        ;(async () => {
            // router.addRoute({
            //     path: '/',
            //     name: 'home',
            //     component: () => import('./../Home/index.vue'),
            //     meta: {
            //         layout: 'dashboard',
            //         requiresAuth: false,
            //     },
            // })
            // // router.options.routes.push({
            // //     path: '/',
            // //     name: 'home',
            // //     component: () => import('./../Home/index.vue'),
            // //     meta: {
            // //         layout: 'dashboard',
            // //         requiresAuth: false,
            // //     },
            // // })
            // await router.isReady()
            // // router.push({ name: 'home' })
            // console.log('routers :>> ', router.getRoutes())
            // console.log('router.options.routes :>> ', router.options.routes)
        })()

        return {}
    },
})
</script>


<style scoped>
@import './../../styles/css/login/login_index.css';
</style>