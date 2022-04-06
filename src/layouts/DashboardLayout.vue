<template>
    <!-- Dashboard Layout -->
    <a-layout
        class="layout-dashboard"
        id="layout-dashboard"
        :class="[navbarFixed ? 'navbar-fixed' : '', !sidebarCollapsed ? 'has-sidebar' : '', layoutClass]"
    >
        <!-- Main Sidebar -->
        <DashboardSidebar
            :sidebarColor="sidebarColor"
            :sidebarTheme="sidebarTheme"
            v-model:collapsed="sidebarCollapsed"
            v-model:menus="menus"
        ></DashboardSidebar>
        <!-- / Main Sidebar -->

        <!-- Layout Content -->
        <a-layout>
            <!-- Layout Header's Conditionally Fixed Wrapper  -->
            <DashboardHeader
                v-model:sidebarCollapsed="sidebarCollapsed"
                :headerTheme="headerTheme"
                :headerColor="headerColor"
                :langs="langs"
            ></DashboardHeader>
            <!-- / Layout Header's Conditionally Fixed Wrapper -->

            <!-- Page Content -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view />
            </a-layout-content>
            <!-- / Page Content -->

            <!-- Layout Footer -->
            <DashboardFooter></DashboardFooter>
            <!-- / Layout Footer -->
        </a-layout>
    </a-layout>
    <!-- / Dashboard Layout -->
</template>

<script >
import { defineComponent, ref, toRefs, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { mapState, mapActions, useStore } from 'vuex'

import DashboardHeader from './../components/Layouts/Dashboard/DashboardHeader.vue'
import DashboardFooter from './../components/Layouts/Dashboard/DashboardFooter.vue'
import DashboardSidebar from './../components/Sidebars/DashboardSidebar.vue'
export default defineComponent({
    components: {
        DashboardHeader,
        DashboardFooter,
        DashboardSidebar,
    },
    setup(props, { emit, slots, attrs }) {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const langs = ref(['en', 'th'])

        store.dispatch('ThemeM/switchTheme', { layout: 'header', theme: 'light' })
        store.dispatch('ThemeM/switchTheme', { layout: 'menu', theme: 'dark' })

        store.dispatch('MenuM/addMenus', [
            {
                path: '/',
                name: 'Home',
                layout: '',
                component_path: '',
                requires_auth: false,
                is_system: true,
            },
            {
                path: '/login',
                name: 'Login',
                layout: '',
                component_path: '',
                requires_auth: false,
                is_system: true,
            },
            {
                path: '/404',
                name: '404',
                layout: 'dashboard',
                component_path: '/404.vue',
                requires_auth: false,
                is_system: false,
            },
        ])
        const menus = computed(() => store.state.MenuM.menus)
        const layoutClass = computed(() => route.meta.layoutClass)

        const dataState = reactive({
            sidebarCollapsed: false,
            sidebarColor: store.state.ThemeM['menu']['currentThemeColor'],
            sidebarTheme: store.state.ThemeM['menu']['currentTheme'],
            navbarFixed: true,
            headerColor: store.state.ThemeM['header']['currentThemeColor'],
            headerTheme: store.state.ThemeM['header']['currentTheme'],
            showSettingsDrawer: false,
        })
        return { layoutClass, ...toRefs(dataState), menus, langs }
    },
})
</script>


<style >
@import './../styles/css/layouts/_dashboard.css';
</style>