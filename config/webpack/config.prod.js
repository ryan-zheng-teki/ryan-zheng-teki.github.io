const webpack = require("webpack");

module.exports = ({ sourceDir, distDir }) => ({
    plugins: [
        new webpack.EnvironmentPlugin({
            "BACKEND_URL": "http://localhost:8080/graphql",
            })
    ]
});