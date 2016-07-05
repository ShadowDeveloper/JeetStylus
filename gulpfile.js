var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', ['one']);

// Get one .styl file and render
gulp.task('one', function () {
  return gulp.src('assets/LojaSite.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});
