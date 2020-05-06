const webpack = require("webpack");

module.exports = ({ sourceDir, distDir }) => ({
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URI: "http://localhost:8080",
            })
    ]
});