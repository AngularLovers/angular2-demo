# angular-esson

## 一、目录
- dist 编译目录
- src   
 -- images      图片   
 -- ts          源码   
 -- index.html  入口html   
- typings typescript d.ts
- .babelrc babel编译环境
- package.json 包管理
- tsconfig.json typescript包管理
- tslint.json typescript代码检测
- vendor.ts 基础依赖
- webpack.config.js  webpack配置

## 二、 说明

index.html中会把所有示例的组件加入并显示效果

## 三、 运行方法
### 1. 设置镜像
`npm config set registry https://registry.npm.taobao.org `  淘宝的镜像,比国外的快n倍
### 2. 安装typescript编译工具
`npm install -g typings`
### 3.  安装依赖
`npm install && typings install`
#### 3.1. 如果发现node-sass安装失败 再执行一次 `npm install node-sass`，不报错就可以了。这源自于天朝的牛逼墙
### 4. 运行项目
`npm run start`
### 5. 访问项目
`http://localhost:8080`
