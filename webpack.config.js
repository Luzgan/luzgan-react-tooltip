const path = require('path');

module.exports = {
    entry: {
        tooltip: './src/index.tsx'
    },
    output: {
        path: path.resolve('./dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve('./tsconfig.json')
                        }
                    }
                ]
            }
        ]
    },
    externals: [{
        react: 'react',
        'react-dom': 'react-dom'
    }]
}