var gulp = require('gulp');
var Server = require('karma').Server;


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    var server = new Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, function (e) {
        done();
    });
    server.start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('test:watch', function (done) {
    var server = new Server({
        configFile: __dirname + '/../../karma.conf.js',
    }, function (e) {
        done();
    });
    server.start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('test:cover', function (done) {
    karma.start({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true,
        reporters: ['coverage'],
        preprocessors: {
            'src/**/*.spec.js': ['babel'],
            'src/**/*.js': ['babel', 'coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'build/reports/coverage'
        }
    }, function (e) {
        done();
    });
});