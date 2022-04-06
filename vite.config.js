// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    return defineConfig({
        plugins: [vue()],
        server: {
            host: process.env.VITE_CLIENT_HOST,
            port: process.env.VITE_CLIENT_PORT,
        },
        envDir: '.env.[mode]',
        // plugins: [
        //     vue(),
        //     // ViteComponents({
        //     //     customComponentResolvers: [AntDesignVueResolver()],
        //     // }),
        // ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            rollupOptions: {
                // https://rollupjs.org/guide/en/#big-list-of-options
            },
        },
    })
}
