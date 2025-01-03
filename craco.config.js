const path = require("path")

const resolve = (dir) => path.resolve(__dirname, dir)

const CracoLessPlugin = require("craco-less")

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        },
    },

    plugins: [{ plugin: CracoLessPlugin }],
}
