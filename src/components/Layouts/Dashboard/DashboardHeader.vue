<template>
    <a-layout-header
        :class="[headerTheme === 'dark' ? 'header-dark' : 'header-light']"
        :style="{ padding: 0, overflow: 'hidden', position: 'relative' }"
    >
        <div class="head-menu-left">
            <a-space :size="0">
                <a-button
                    id="btn-head-toggle"
                    type="text"
                    :class="[headerTheme === 'dark' ? 'head-btn-dark' : 'head-btn-light']"
                    @click.prevent="toggleSidebarCollapse"
                >
                    <menu-unfold-outlined :style="{ fontSize: '28px' }" v-if="sidebarCollapsed" class="trigger" />
                    <menu-fold-outlined :style="{ fontSize: '28px' }" v-else class="trigger" />
                </a-button>
            </a-space>
        </div>
        <div class="head-menu-right">
            <a-space :size="16">
                <SwitchLanguage :langs="langs" :headerTheme="headerTheme" :headerColor="headerColor" />
                <Notification :headerTheme="headerTheme" :headerColor="headerColor" />
                <UserInfo :headerTheme="headerTheme" :headerColor="headerColor" />
            </a-space>
        </div>
       
    </a-layout-header>
</template>

<script >
import { defineComponent } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import SwitchLanguage from './../../SwitchLanguage/index.vue'
import Notification from './../../Notification/index.vue'
import UserInfo from './../../UserInfo/index.vue'
export default defineComponent({
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        SwitchLanguage,
        Notification,
        UserInfo,
    },
    props: {
        sidebarCollapsed: { type: Boolean, default: false },
        headerTheme: { type: String, default: 'dark' },
        headerColor: { type: String, default: 'primary' },
        langs: { type: Array, default: [] },
    },
    setup(props, { emit }) {
        const toggleSidebarCollapse = () => {
            emit('update:sidebarCollapsed', !props.sidebarCollapsed)
        }
        return { toggleSidebarCollapse }
    },
})
</script>


<style scoped>
</style>