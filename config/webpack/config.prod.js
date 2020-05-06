const webpack = require("webpack");

module.exports = ({ sourceDir, distDir }) => ({
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URL: "http://http://intelligencealley.com",
            })
    ]
});