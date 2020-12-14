module.exports = function (api) {
    api.cache(true);
    const presets = [
        ["@babel/preset-env", {
            modules: 'cjs'
        }],
        "@babel/preset-react"
    ];

    const plugins = [
        "@babel/plugin-proposal-class-properties"
    ];

    return {
        presets,
        plugins
    }
}