var gulp = require('gulp');
var checker = require('license-checker');
var source = require('vinyl-source-stream');
var del = require('del');

var paths = require('../paths');

gulp.task('clean:licenses', function (finished) {
    return del([paths.webRoot+'licenses.json'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
        if (err) {
            console.log('Error while deleting files');
        }
        finished();
    });
});

gulp.task('prepare-licenses', ['clean:licenses'], function(){
    checker.init({
        start: './',
        relativeLicensePath: true
    }, function(output, err){
        if(err){
            console.log(err);
        } else {
            var stream = source('licenses.json');
            stream.end(JSON.stringify(output));
            return stream.pipe(gulp.dest(paths.webRoot));
        }
    });

});
