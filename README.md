# 多页面vue项目

src目录下
	components用来存放公用组件
	pages下的每个目录都代表浏览器访问的‘路径.html’，用来存放多页面每个页面的数据，在里面放对应的html，js，vue
	util内存放常用方法js文件
	asset放公用的js和css文件，注意  ！！！  这里不存放图片
static目录下
	存放第三方的js和css文件
	图片也存放在这里
	
注意事项
	1.src/pages/template_copy为页面模板文件，复制改动为新增的多页面即可
	2.每次新增页面需要重启npm run dev
	3.gulp执行发布到测试服务器
	4.npm install *** -S  执行此命令会产生整个项目的公用组件，一般情况不用，会使打包后首页加载白屏越来越久，最后是下载js文件，那个页面需要用放入utils中引入
	
项目用的组件
	[mint-ui](https://mint-ui.github.io/docs/#/)

# xueduoduo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
