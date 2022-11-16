'use strict';
const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const sass = require('gulp-sass')(require('sass'));

gulp.task('server', ()=>{
    browserSync.init({
        server:{
            baseDir: './dist'
        }
    });

    gulp.watch('./src/sass/main.scss', gulp.series('sass'));
    gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('sass', ()=>{

    return gulp.src('./src/sass/main.scss')
    .pipe(sass()).pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

})
// serving gulp project

gulp.task('start', gulp.series('server', 'sass'));
