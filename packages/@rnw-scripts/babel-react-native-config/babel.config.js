/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * @format
 * @ts-check
 */

module.exports = () => ({
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    "babel-plugin-syntax-hermes-parser",
    "babel-plugin-transform-flow-enums",
  ]
});
