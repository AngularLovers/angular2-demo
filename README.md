# angular2-lesson-lib
文件清单：

* index.html - 测试文件
* gulpfile.js - 工程文件
* dist/angular2.beta.stack.min.js - 合并的库文件
* src/angular2-pollyfills.js - 浏览器功能增强库
* src/angular2.dev.js - angular2基础框架
* src/http.dev.js - angular2的HTTP访问库
* src/router.dev.js - angular2的路由库
* src/Rx.js - 反应式计算的JavaScript实现库
* src/typescript.js - TypeScript编译转码库
* src/system.config.js - systemjs配置文件
* src/tsloader.js - 自动编译页面中的typescript脚本

## 使用方法

直接在Html文件中引用angular2.beta.stack.min.js，并将TypeScript代码标注为：`text/typescript`

	<script type="text/javascript" src="dist/angular2.beta.stack.min.js"><script>
	<script type="text/typescript">
		import {Component} from "angular2/core";
		import {bootstrap} from "angular2/platform/browser";
		
		@Component({
			selector : "ez-app",
			template : "<h1>Hello</h1>"
		})
		class EzApp{}
		
		bootstrap(EzApp);
	</script>
	
## 构造

1.安装gulp
	
	~$ npm install -g gulp
	
2.安装gulp-concat和gulp-uglify

	~$ npm install gulp-concat gulp-uglify
	
3.执行gulp，生成dist/angular2-beta-stack.min.js

	~$ cd angular2-beta-stack
	~/angular2/beta-stack$ gulp
	