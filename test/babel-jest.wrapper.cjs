// This wrapper is used to configure the babel-jest transformer to convert typescript and output esm modules
module.exports = require("babel-jest").default.createTransformer({
    "presets": ["@babel/preset-typescript"],
    "targets": {
        "esmodules": true
    }
});
