var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concatCss 	= require('gulp-concat-css');
var csso        = require('gulp-csso');
var autopref    = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src("src/scss/**/*.scss") 
        .pipe(sass()) 
        .pipe(csso()) 
        .pipe(concatCss('style.css')) 
        
        .pipe(autopref(
      [
        'last 10 versions',
        '>1%'
      ],
      { cascade: true }
    ))
        .pipe(gulp.dest("src/css")) 
        .pipe(browserSync.stream()); 
});


gulp.task('serve', ['sass'], function() {
   
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/scss/**/*.scss", ['sass']); 
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']); 
