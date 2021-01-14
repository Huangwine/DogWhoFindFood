/*
    commentJs规范
*/
const { dest } = require("gulp");
const gulp = require("gulp");
/**
 * 编写任务
 * 第一个参数：任务名（自定义）
 * 第二个参数：回调函数（任务要执行的功能）
 */
//整理HTML文件
gulp.task("copy-html",function(){
    return gulp.src("*.html").pipe(gulp.dest("dist/"));
})
//整理image文件
gulp.task("images",function(){
    return gulp.src("images/**/*").pipe(gulp.dest("dist/images"));
})
//整理数据文件
gulp.task("data",function(){
    return gulp.src(["json/*.json","xml/*.xml"])
    .pipe(gulp.dest("dist/data"));
})
//整理js文件
const concat =require("gulp-concat");//合并文件
const uglify=require("gulp-uglify");//压缩js文件
const rename =require("gulp-rename");//重命名

gulp.task("script",function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(uglify())
    .pipe(rename("*.min.js"))
    .pipe(gulp.dest("dist/js"));
})

//整理css文件
const scss=require("gulp-scss");
const minifyCss=require("gulp-minify-css");

gulp.task("scss",function(){
    gulp.src(["css/*.css","bootstrap-4.5.2/css"])
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("*.min.css"))
    .pipe(gulp.dest("dist/css"));
})
//启动服务器
const connect =require("gulp-connect");
gulp.task("server",function(cb){
    connect.server({
        root:"dist",//根目录
        port:8888,//端口号
        livereload:true//启用实时刷新
    });
    gulp.pipe(cb());
})
//监听  如果发生改变，自动执行任务
gulp.task("watch",function(cb){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch(["css/*.css","bootstrap-4.5.2/css"],["scss"]);
    gulp.watch(["json/*.json","xml/*.xml"],["data"]);
    gulp.watch("js/*.js",["script"]);
    gulp.pipe(cb());
})

