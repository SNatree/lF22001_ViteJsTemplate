<template>
    <a-layout-sider id="menu-layout-sidebar" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">
            <UserOutlined />
        </div>
        <a-menu id="menu-sidebar" v-model:selectedKeys="selectedKeys" :theme="sidebarTheme" mode="inline">
            <a-menu-item v-for="(menu) in menus" :key="`${menu['path']}`">
                <user-outlined />
                <span>
                    <router-link :to="menu['path']">
                        {{ menu['name'] }}
                    </router-link>
                </span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script >
import { defineComponent, ref, reactive, computed } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
    },
    props: {
        collapsed: { type: Boolean, default: false },
        sidebarTheme: { type: String, default: 'dark' },
        sidebarColor: { type: String, default: 'primary' },
        menus: { type: Array, default: [] },
    },
    setup(props) {
        const router = useRouter()
        const currPath = router.currentRoute.value
        const selectedKeys= ref([`/`])
        ;(async () => {
            for (let index = 0; index < props.menus.length; index++) {
                const menu = props.menus[index]

                if (menu['is_system'] !== false) continue

                router.addRoute({
                    name: `${menu['name']}`,
                    path: `${menu['path']}`,
                    component: () => import(/* @vite-ignore */ `./../../pages${menu['component_path']}`),
                    meta: {
                        layout: `${menu['layout']}`,
                        requiresAuth: menu['requires_auth'],
                    },
                })
            }

            await router.isReady()
            selectedKeys.value=[currPath['path']]
            router.push(`${currPath['path']}`)
        })()
        return {
            selectedKeys,
        }
    },
})
</script>


<style scoped>
</style>