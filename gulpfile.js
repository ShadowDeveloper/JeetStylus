'use strict';

var gulp = require('gulp'),
  //sass = require('gulp-sass');
  stylus = require('gulp-stylus'),
  browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['stylus'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("dist/*.styl", ['stylus']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("dist/*.scss")
//         .pipe(sass({
//           use:jeet()
//         }))
//         .pipe(gulp.dest("css"))
//         .pipe(browserSync.stream());
// });

gulp.task('stylus', function() {
    return gulp.src("dist/*.styl")
        .pipe(stylus())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
