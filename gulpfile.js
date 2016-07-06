'use strict';

var gulp = require('gulp'),
  //sass = require('gulp-sass');
  stylus = require('gulp-stylus'),
  prefixer = require('gulp-autoprefixer'),
  rupture = require('rupture'),
  jeet = require('jeet'),
  browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['stylus'], function() {

    browserSync.init({
      // Serve files from the app directory with directory listing
      server: {
          baseDir: "./",
          index: 'rodrigo1.html'
      }

    });

    gulp.watch("dist/*.styl", ['stylus']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('stylus', function() {
    return gulp.src("dist/*.styl")
        .pipe(stylus({
          use:[jeet()],
          compress: false
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
