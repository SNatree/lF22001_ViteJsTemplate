<template>
    <a-dropdown :trigger="['click']">
        <a-button
            id="btn-head-notification"
            type="text"
            shape="circle"
            :class="[headerTheme === 'dark' ? 'head-btn-dark' : 'head-btn-light', bellAlert ? 'bell-alert' : 'bell']"
            @click.prevent
        >
            <a-badge :dot="bellAlert">
                <BellFilled :style="{ fontSize: '25px' }" />
            </a-badge>
        </a-button>
        <template #overlay>
            <a-menu v-model:selectedKeys="selectedKeys" @click="handleClick">
                <a-menu-item key="1"> ALert </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script >
import { defineComponent, ref } from 'vue'
import { SmileOutlined, MehOutlined, BellFilled } from '@ant-design/icons-vue'

export default defineComponent({
    components: {
        BellFilled,
    },
    props: {
        headerTheme: { type: String, default: 'dark' },
        headerColor: { type: String, default: 'primary' },
    },
    setup(props) {
        const selectedKeys = ref([''])
        const bellAlert = ref(false)
        const handleClick = (e) => {
            // locale.value = `${e['key']}`
        }

        return { selectedKeys, handleClick, bellAlert }
    },
})
</script>

<style >
</style>