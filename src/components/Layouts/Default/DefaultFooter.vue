v<template>
    <!-- Layout Footer -->
    <a-layout-footer>
        <!-- Copyright Notice -->
        <p class="copyright">Copyright © 2022 Muse by <a href="https://m-focus.co.th">M-Focus</a>.</p>
        <!-- / Copyright Notice -->
    </a-layout-footer>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
})
</script>


<style scoped>
.nav-link svg {
    margin-right: 5px;
    vertical-align: middle;
}
.nav-link span {
    vertical-align: middle;
}
.ant-menu-submenu-popup {
    width: 100%;
}
</style>