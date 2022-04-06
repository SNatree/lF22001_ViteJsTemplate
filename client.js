const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')
const { loadEnv } = require('vite')
/**use command with argv ,node client.js -dev or -prod */
const argvEnv = process.argv.includes('-prod') ? 'production' : process.argv.includes('-dev') ? 'development' : 'test'
process.env = { ...process.env, ...loadEnv(argvEnv, process.cwd()) }

async function createServer() {
    const app = express()
    app.use(express.static(path.resolve('./dist')))
    // Create Vite server in middleware mode. This disables Vite's own HTML
    // serving logic and let the parent server take control.
    //
    // In middleware mode, if you want to use Vite's own HTML serving logic
    // use `'html'` as the `middlewareMode` (ref https://vitejs.dev/config/#server-middlewaremode)
    const vite = await createViteServer({
        server: { middlewareMode: 'ssr' },
    })
    // console.log("vite :>> ", vite.config.env);
    // use vite's connect instance as middleware
    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        // serve index.html - we will tackle this next
        const url = req.originalUrl

        const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    })

    //   app.listen(3000);
    const env = vite.config.env
    const HOST = env.VITE_HOST
    const PORT = +env.VITE_PORT
    app.listen(PORT, HOST, () => {
        console.log(`Listening on http://${HOST}:${PORT}`)
    })
}
createServer()
