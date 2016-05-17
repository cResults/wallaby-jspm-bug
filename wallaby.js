/* eslint-disable no-var, no-shadow, dot-notation */

module.exports = function (wallaby) {
    var compilerOptions = require('./build/babel-options').wallaby();
    wallaby.defaults.files.load = false;
    wallaby.defaults.tests.load = false;
    console.log("SOURCE MAP " + compilerOptions.sourceMap)
    return {
        files: [
            //pre loaded
            { pattern: 'wwwroot/jspm_packages/system.js', load: true, instrument: false },
            { pattern: 'wwwroot/jspm_packages/system-polyfills.js', load: true, instrument: false },
            { pattern: 'wwwroot/config.js', load: true, instrument: false },

            //excluded (ignore: true)
            '!src/**/*.test.js*',
            '!src/main.js',

            //included
            'src/**/*.js*'
        ],

        tests: [
          //'src/**/*.test.js',
          'src/**/*.test.js',
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel(compilerOptions)
        },

        middleware: (app, express) => {
            var dirPath = express.static(require('path').join(__dirname, 'wwwroot', 'jspm_packages'));
            //console.log(dirPath + '   ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ');
            app.use('/wwwroot/jspm_packages', dirPath);
            app.use('/jspm_packages', dirPath);
        },

        bootstrap: function (wallaby) {
            var promises = [];
            var i = 0;
            var len = wallaby.tests.length;
            console.log("fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
            wallaby.delayStart();

            System.config({
                paths: {
                    "*": "*",

                    'utils/*': 'src/utils/*',
                }
            });
            for (; i < len; i++) {
                promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
            }

            Promise.all(promises).then(function () {
                console.log('ABOUT TO START woo hooo o o o o o oo  o o o o o oo  o o o o o oo  o o o o o oo  o o o o o oo  o o o o o oo  o o o o o oo  o o o o o oo ');
                wallaby.start();
            }).catch(function (e) { setTimeout(function () { throw e; }, 0); });
        },

        debug: true
    };
};
