var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var paths = require('../paths');

var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
    gulp.src(paths.sass)
      .pipe(changed(paths.output, {extension: '.scss'}))
      //.pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'expanded'
      }).on('error', sass.logError))
      //.pipe(sourcemaps.write())
      .pipe(concatCss('styles/styles.css'))
      .pipe(gulp.dest('./wwwroot/dist'));
});

gulp.task('sass:watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']);
});
