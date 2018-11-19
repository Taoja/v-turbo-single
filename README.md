# vue-split

单页面分包

# 全局依赖

- webpack^4.20.0
- webpack-cli^3.1.1
- webpack-dev-server^3.1.9

# 目录结构

```c
|-- /
    |-- .babelrc
    |-- .gitignore
    |-- README.md
    |-- index.html //html入口
    |-- package.json  //依赖表
    |-- webpack.config.js //项目配置文件
    |-- dist //build输出目录
    |-- src //业务逻辑目录
    |   |-- App.vue //项目入口页面，包含页面跳转、页面栈重构代码
    |   |-- index.js //项目入口js，引入依赖
    |   |-- assets //其他资源，引入方式：import '@a'
    |   |   |-- image
    |   |-- common //公共方法及样式
    |   |   |-- js //公共方法目录，引入方法: import '@j'
    |   |   |-- scss //公共样式，引入方法：import '@s'
    |   |       |-- functions.scss
    |   |       |-- index.scss
    |   |       |-- mixin.scss
    |   |       |-- reset.scss
    |   |       |-- vars.scss
    |   |-- components //公用组件目录，引入方法：import '@c'
    |   |   |-- index.js //分包组件入口，！重要必须存在即使是空文件
    |   |   |-- extend //扩展公共组件目录
    |   |   |-- base //全局公共组件目录
    |   |-- modules //业务逻辑页面目录
    |   |   |-- base //模块包目录，！不能取名entry或components
    |   |   |   |-- index.js //模块关联页面列表 ！重要必须存在，为列出的页面不会被打包
    |   |   |   |-- home //页面目录
    |   |   |       |-- index.js //分包入口，！重要必须存在，否则打包报错
    |   |   |       |-- index.vue //页面
    |   |-- router // 路由目录
    |   |   |-- index.js // 路由配置，！重要只需要且必须指定初始化页面
    |   |-- store //vuex目录
    |       |-- index.js
    |       |-- module
    |           |-- black.js
    |-- static //静态文件
        |-- animation.min.css
        |-- bScroll.min.js
        |-- iconfont.css
        |-- iconfont.eot
        |-- iconfont.js
        |-- iconfont.svg
        |-- iconfont.ttf
        |-- iconfont.woff
        |-- vue.min.js // 单页面推荐使用静态文件方式引入，否则每个页面都会打包一份vue进代码中
        |-- vuex.min.js // 单页面推荐使用静态文件方式引入，否则每个页面都会打包一份vuex进代码中
```

# 模块名对应的目录

```
entry => ./static + ./index.html + ./src/App.vue + ./src/index.js + ./src/store/ + ./src/router

components => ./src/components/index.js

${name} => ./src/components/modules/${name}/
```

# 使用方式

## 安装依赖

```
$ npm run install
```

## 本地调试

- 调试全部

```
$ npm run dev
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：
output: entry + components + modules/*
```

- 调试单独模块

```
$ npm run dev
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：base
output: entry + components + modules/base/
```

- 调试多个模块

```
$ npm run dev
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：base demo test
output: entry + components + modules/base/ + modules/demo/ + modules/test/
```

## 本地构建

- 构建全部

```
$ npm run build
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：
output: entry + components + modules/*
```

- 构建入口

```
$ npm run build
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：entry
output: entry
```

- 构建分包组件

```
$ npm run build
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：components
output: components
```

- 构建单独模块

```
$ npm run build
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：base
output: modules/base/
```

- 构建多个模块

```
$ npm run build
请输入需要打包的模块名，以空格分隔（不输入则全部打包）：base demo test
output: modules/base/ + modules/demo/ + modules/test/
```