const path = require("path");
const { merge } = require("webpack-merge");

module.exports = envs => {
    return merge(require("./webpack/webpack.common"), require(`./webpack.${envs.env}.js`))
}