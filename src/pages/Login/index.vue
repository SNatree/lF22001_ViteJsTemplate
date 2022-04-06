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
        return {}
    },
})
</script>


<style scoped>
@import './../../styles/css/login/login_index.css';
</style>
