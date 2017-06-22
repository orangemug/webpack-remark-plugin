# webpack-remark-plugin
Loader for markdown via remark

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/webpack-remark-plugin.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/webpack-remark-plugin.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/webpack-remark-plugin/dev-status.svg)][dm-dev]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/webpack-remark-plugin
[dm-prod]:     https://david-dm.org/orangemug/webpack-remark-plugin
[dm-dev]:      https://david-dm.org/orangemug/webpack-remark-plugin#info=devDependencies



## Install
To install

```
npm install orangemug/webpack-remark-plugin --save-dev
```

## Usage
Fist off you'll need to install `remark` and any plugins you plan to use.


## HTML
To load markdown as html

Install the following

```
npm install remark remark-html --save-dev
```

Then add the following to your webpack config

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "raw-loader"
          },
          {
            loader: "webpack-remark-plugin",
            options: {
              use: [
                {
                  module: require("remark-html")
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```



## React
To load markdown as react, first off install

```
npm install remark remark-react --save-dev
```

Then add the following to your webpack config

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "webpack-react-node-plugin",
            options: {
            }
          },
          {
            loader: "webpack-remark-plugin",
            options: {
              use: [
                {
                  module: require("remark-react")
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```


## License
[MIT](LICENSE)

