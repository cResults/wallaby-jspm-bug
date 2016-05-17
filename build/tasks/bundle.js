var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles');
var runSequence = require('run-sequence');


var config = {
  force: true,
  baseURL: './wwwroot',
  configPath: './wwwroot/config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', ['unbundle', 'build'], function (callback) {
    return bundler.bundle(config);
});

gulp.task('unbundle', function() {
 return bundler.unbundle(config);
});
