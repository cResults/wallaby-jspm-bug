var gulp = require('gulp');
var runSequence = require('run-sequence');
//var source = require('vinyl-source-stream');
//var fs = require('fs');
//var bump = require('gulp-bump');

//var paths = require('../paths');
//var compilerOptions = require('../babel-options');
//var pkg = require('../../package.json');


////TODO: Unfinished
//gulp.task('prepare-about', function(){


//    try {
//        fs.statSync(paths.webRoot + 'about.json').isFile(); //File Exists
//        // return gulp.src(filepath)
//        //     .pipe()
//    } catch(e){
//        //File doesn't exist
//        var stream = source('about.json');
//        stream.end('{}');
//        return stream.pipe(gulp.dest(paths.webRoot));
//    }


//});


// gulp.task('bump-build-version', function() {
//   return gulp.src(['./package.json'])
//     .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
//     .pipe(gulp.dest('./'));
// });


gulp.task('release', function (callback) {
    return runSequence(
        //'jspm:install',
        //'build',
        //'unbundle',
        'bundle',
        callback
    );

});
