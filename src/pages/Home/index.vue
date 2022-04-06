<template>
    <div>
        <a-row :gutter="24" type="flex" align="stretch">
            <a-col :span="24" :lg="10" class="mb-24">
                {{ t('label.hello') }}
                <router-link to="/login">Go to Login</router-link>
            </a-col>
        </a-row>
    </div>
</template>

<script >
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
    setup() {
        const { t} = useI18n()
        ;(async () => {})()

        return { t}
    },
})
</script>


<style scoped>
@import './../../styles/css/home/home_index.css';
</style>