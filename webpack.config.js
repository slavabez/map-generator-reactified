const path = require('path');

module.exports = {

    entry: './src/index.tsx',

    devtool: "source-map",

    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.ts$|.tsx$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/

    devServer: {
        contentBase: path.resolve(__dirname, './docs')
    }
};