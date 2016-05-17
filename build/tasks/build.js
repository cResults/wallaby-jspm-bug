var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require("gulp-notify");

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// // https://www.npmjs.com/package/gulp-plumber
// gulp.task('build-system', function() {
//   return gulp.src(paths.source)
//     .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
//     .pipe(changed(paths.output, {extension: '.js'}))
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(to5(assign({}, compilerOptions, { modules: 'system' })))
//     .pipe(sourcemaps.write({includeContent: true}))
//     .pipe(gulp.dest(paths.output));
// });
gulp.task('build-system', function () {
    return gulp.src(paths.source)
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(changed(paths.output, { extension: '.js' }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(to5(assign({}, compilerOptions.base())))
      .pipe(sourcemaps.write({ includeContent: true, sourceRoot: '/src' }))
      .pipe(gulp.dest(paths.output));
});

gulp.task('build-atalasoft', function () {
    return gulp.src(paths.atalasoft)
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(changed(paths.output, { extension: '.js' }))
      .pipe(gulp.dest(paths.output + 'Atalasoft'));
});

gulp.task('build-formViewer', function () {
    return gulp.src(paths.formViewer)
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(changed(paths.output, { extension: '.js' }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(to5(assign({}, compilerOptions.base())))
      .pipe(sourcemaps.write({ includeContent: true, sourceRoot: '/src' }))
      .pipe(gulp.dest(paths.output + 'form/viewer'));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, { extension: '.html' }))
      .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function () {
    return gulp.src(paths.css)
      .pipe(changed(paths.output, { extension: '.css' }))
      .pipe(gulp.dest(paths.output));
});

// copies changed svg files to the output directory
gulp.task('build-svg', function () {
    return gulp.src(paths.svg)
      .pipe(changed(paths.output, { extension: '.svg' }))
      .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
      'clean',
      ['build-system', 'build-atalasoft', 'build-formViewer', 'build-html', 'build-svg', 'build-css', 'sass'],
      callback
    );
});

gulp.task('default', function (callback) {
    return runSequence(
        'jspm:install',
        'bundle',
        callback
    );
});
