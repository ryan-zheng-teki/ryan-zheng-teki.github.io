const webpack = require("webpack");

module.exports = ({ sourceDir, distDir }) => ({
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URI: "https://intelligencealley.com",
            })
    ]
});