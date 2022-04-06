<template>
    <a-dropdown :trigger="['click']">
        <a-button
            id="btn-head-switchlang"
            type="text"
            shape="circle"
            :data-theme="headerTheme"
            :class="[headerTheme === 'dark' ? 'head-btn-dark' : 'head-btn-light']"
            @click.prevent
        >
            <a-avatar :src="showHref(`assets/images/svgs/lang/${locale}.svg`)" :size="32" />
            <span style="margin-left: 0.2rem; font-weight: 500"> {{ locale.toUpperCase() }}</span>
        </a-button>
        <template #overlay>
            <a-menu v-model:selectedKeys="selectedKeys" @click="handleClick">
                <a-menu-item v-for="lang in langList" :key="lang">
                    <a-row>
                        <a-avatar :src="showHref(`assets/images/svgs/lang/${lang}.svg`)" size="small" />
                        <span style="font-size: 18px; margin-left: 0.2rem">{{ lang.toUpperCase() }}</span>
                    </a-row>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>

    <!-- <a-dropdown :trigger="['click']">
        <a-button @click.prevent type="text" id="btn-head-switchlang" shape="circle">
            <a-row>
                <a-avatar :src="showHref(`assets/images/svgs/lang/${locale}.svg`)" :size="28" />
                <span style="margin-left: 0.2rem; font-weight: 500"> {{ locale.toUpperCase() }}</span>
            </a-row>
        </a-button>
        <template #overlay>
            <a-menu v-model:selectedKeys="selectedKeys" @click="handleClick">
                <a-menu-item v-for="lang in langList" :key="lang">
                    <a-row>
                        <a-avatar :src="showHref(`assets/images/svgs/lang/${lang}.svg`)" size="small" />
                        <span style="font-size: 18px; margin-left: 0.2rem">{{ lang.toUpperCase() }}</span>
                    </a-row>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown> -->
</template>

<script >
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LocalStorageService from '../../services/LocalStorageService'

import { SmileOutlined, MehOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        SmileOutlined,
        MehOutlined,
    },
    props: {
        headerTheme: { type: String, default: 'dark' },
        headerColor: { type: String, default: 'primary' },
        langs: { type: Array, default: [] },
    },
    setup(props) {
        const { t, locale } = useI18n()
        const localStorageService = LocalStorageService.getService()
        const langList = ref(props.langs)

        if (localStorageService.getLang()) locale.value = localStorageService.getLang()

        // locale.value = 'en' // change!
        const selectedKeys = ref([''])
        const handleClick = (e) => {
            locale.value = `${e['key']}`
            localStorageService.setLang(locale.value)
        }
        const showHref = (assetsPath) => {
            return new URL(`./../../${assetsPath}`, import.meta.url).href
        }
        ;(async () => {})()
        return { t, locale, selectedKeys, handleClick, showHref, langList }
    },
})
</script>


<style scoped>
</style>