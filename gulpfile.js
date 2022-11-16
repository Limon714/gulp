'use strict';
const gulp = require('gulp');

const browserSync = require('browser-sync')

const sass = require('gulp-sass')(require('sass'));

gulp.task('hello', ()=>{
   
    return gulp.src('./src/sass/main.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('server', ()=>{
    browserSync.init({
        server:{
            baseDir: './dist'
        }
    });
})