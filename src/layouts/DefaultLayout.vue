<template>
    <div>
        <!-- Default Layout -->
        <a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
            <!-- Layout Header ( Navbar ) -->
            <DefaultHeader></DefaultHeader>
            <!-- / Layout Header ( Navbar ) -->

            <!-- Page Content -->
            <a-layout-content>
                <router-view />
            </a-layout-content>
            <!-- / Page Content -->

            <!-- Layout Footer -->
            <DefaultFooter></DefaultFooter>
            <!-- / Layout Footer -->
        </a-layout>
    </div>
</template>

<script >
import { defineComponent,computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DefaultHeader from '../components/Layouts/Default/DefaultHeader.vue'
import DefaultFooter from '../components/Layouts/Default/DefaultFooter.vue'
export default defineComponent({
    components: {
        DefaultHeader,
        DefaultFooter,
    },
    setup() {
        const route = useRoute()
        const layoutClass = computed(()=>route.meta.layoutClass) 
        return {layoutClass}
    },
})
</script>


<style>
@import './../styles/css/layouts/_default.css';
</style>