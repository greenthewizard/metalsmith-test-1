const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build/')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[a|c]ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: { baseDir: ['build'] },
            files: [
                'src/**/*'
            ]
        })
    ]
}