<template>
    <a-dropdown :trigger="['click']">
        <a-button
            id="btn-head-user-info"
            type="text"
            shape="circle"
            :data-theme="headerTheme"
            :class="[headerTheme === 'dark' ? 'head-btn-dark' : 'head-btn-light']"
            @click.prevent
        >
            <UserOutlined :style="{ fontSize: '25px' }" />
        </a-button>
        <template #overlay>
           <a-menu v-model:selectedKeys="selectedKeys" @click="handleClick">
                <a-menu-item key="1"> Logout </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script >
import { defineComponent, ref } from 'vue'
import { SmileOutlined, MehOutlined, UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        SmileOutlined,
        MehOutlined,
        UserOutlined,
    },
    props: {
        headerTheme: { type: String, default: 'dark' },
        headerColor: { type: String, default: 'primary' },
    },
    setup(props) {
        const selectedKeys = ref([''])
        const handleClick = (e) => {
            // locale.value = `${e['key']}`
        }
        const showHref = (assetsPath) => {
            return new URL(`./../../${assetsPath}`, import.meta.url).href
        }
        // console.log('object :>> ', store.state.ThemeManagement)
        return { selectedKeys, handleClick }
    },
})
</script>

<style >
</style>