const gulp = require('gulp'),
     babel = require('gulp-babel');

gulp.task('babel',()=>{
    return gulp.src("*/*.js")
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('es5/'));
});


gulp.task('gulp-watch',function(){
    gulp.watch('*/*.js',['babel']);
});
gulp.task('default',['gulp-watch']);