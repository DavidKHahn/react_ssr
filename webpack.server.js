const path = require(`path`);
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test:/\.jsjs$/,
                loader: 'babel-loader',
                exlude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: { browsers: ['last 2 versions']}
                        }]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}