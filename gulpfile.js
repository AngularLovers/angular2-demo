var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");

gulp.task("default",function(){
	return gulp.src([
			"src/angular2-polyfills.js",
			"src/system.js",
			"src/typescript.js",
			"src/Rx.js",
			"src/angular2.dev.js",
			"src/http.dev.js",
			"src/router.dev.js",
			"src/tsloader.js",
			"src/system.config.js"
		])
    .pipe(concat("angular2.beta.stack.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist"));
});

