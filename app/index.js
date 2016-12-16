const path = require("path")
const express = require("express")
const serveStatic = require("serve-static")
const app = express()
const indexHtml = path.resolve("./index.html")

if (DEV) {
    const DevMiddleware = require("webpack-dev-middleware")
    const HotMiddleware = require("webpack-hot-middleware")
    const webpackConfig = require("../webpack.config")
    const compiler = require("webpack")(webpackConfig)
    app
        .use(DevMiddleware(compiler, webpackConfig.devServer))
        .use(HotMiddleware(compiler))
}

app
    // .use(compression())
    .use(serveStatic("./static", {
        maxAge: "1d"
    }))
    // .use(bodyParser.json())
    // .use(multer())

app.get("*", (req, res) => {
    res.sendFile(indexHtml)
})

app.use((err, req, res, next) => {
    const {status = 500, message} = err
    
    res.write(`
        <h1>Error ${status} | ${message}</h1>
        `)

    if (DEV) {
        res.write(`<pre>${err.stack}</pre>`)
    }

    res.end()
})

module.exports = app
