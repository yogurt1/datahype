global.DEV = process.env.NODE_ENV !== "production"
const app = require("./app")
const config = require("./app/config")
const PORT = config.app.port

app.listen(3000, () =>
        console.log(`Express listening on port ${PORT}`))
