var gulp = require('gulp');
var jspm = require('jspm');
var runSequence = require('run-sequence');


gulp.task('jspm:install', function () {
    return jspm.install(true);
});
