'use strict';
// 教程  https://segmentfault.com/a/1190000000372547#articleHeader0
// 		https://segmentfault.com/a/1190000002768534
// 月影  https://www.h5jun.com/post/gulp-build.html
// 		http://www.ydcss.com/archives/424

// 插件

/*
 引入gulp
var gulp = require('gulp');
编译 : gulp
gulp 任务名 

task,run,watch,src,dest

gulp.task(name, fn)这个你应经见过了

gulp.run(tasks...)尽可能多的并行运行多个task

gulp.watch(glob, fn)当glob内容发生改变时，执行fn

gulp.src(glob)返回一个可读的stream

gulp.dest(glob)返回一个可写的stream


// 一、引入gulp的依赖组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


二、创建任务并进行处理
lint 任务会检测
gulp.task('lint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

简单用法就是 
	 1.定义一个task任务，
	 2.src读取文件，
	 3.使用插件进行处理, 
	 4.dest返回处理后的文件流，


gulp.task(name[, deps], fn)
- 定义一个 task,声明它的名称, 任务依赖, 和任务内容.

gulp.src(globs[, options])
- 读取文件,参数为文件路径字符串或数组, 支持通配符.

gulp.dest(path[, options])
- 写入文件, 作为pipe的一个流程.文件夹不存在时会被自动创建.

gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb])
- 监控文件,执行任务.


三、运行gulp默认运行default任务，也可以gulp + 任务名手动加上
*/

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

// 基于输入输出流
// 代码压缩

gulp.task('default', function() {
  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
  console.log(1);
});


// gulp.tash('sassBuild',function() {
// 	gulp.src('sass/*.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('build/css'));
// });

