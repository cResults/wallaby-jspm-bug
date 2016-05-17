// Karma configuration
// Generated on Tue Oct 13 2015 10:36:06 GMT-0400 (Eastern Daylight Time)

var compilerOptions = require('./build/babel-options').karma();
var assign = Object.assign || require('object.assign');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine-jquery', 'jasmine', 'jasmine-matchers'],

    jspm: {
        config: 'wwwroot/config.js',
        packages: '/wwwroot/jspm_packages/',
        loadFiles: [
          'test/test-main-karma.js',
          'src/**/*.test.js',
        ],
        serveFiles: [
          'src/**/*!(.test).js',
          'src/**/*.html',
          'src/**/*.css',
          'src/**/*.svg',
          'test/**/*.js',
          'test/**/*.svg'
        ],
        paths: {
          "*": "*",
          'testData/*': 'test/data/*',

          //TODO: Not ideal to have to set each path, but necessary to get it to work for now.
          'api/*': 'src/api/*',
          'bindings/*': 'src/bindings/*',
          'cache/*': 'src/cache/*',
          'factories/*': 'src/factories/*',
          'flow/*': 'src/flow/*',
          'form/*': 'src/form/*',
          'models/*': 'src/models/*',
          'resources/*': 'src/resources/*',
          'routeConfigs/*': 'src/routeConfigs/*',
          'selfService/*': 'src/selfService/*',
          'utils/*': 'src/utils/*',
          'workspace/*': 'src/workspace/*',
        }
    },
    proxies: {
        '/src/': '/base/src/',
        '/test/': '/base/test/',
        '/jspm_packages/': '/base/wwwroot/jspm_packages/'
    },

    // list of files / patterns to load in the browser
    files: [
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      //  'babelPreprocessor': {
      //      options: compilerOptions
      //  },
    'babelPreprocessor': {
        options: compilerOptions
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
