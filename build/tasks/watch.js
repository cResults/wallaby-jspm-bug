var gulp = require('gulp');
var paths = require('../paths');
var runSequence = require('run-sequence');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task will watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['build'], function() {
    gulp.watch(paths.source, ['build-system']).on('change', reportChange);
    gulp.watch(paths.formViewer, ['build-formViewer']).on('change', reportChange);
  gulp.watch(paths.html, ['build-html']).on('change', reportChange);
  gulp.watch(paths.css, ['build-css']).on('change', reportChange);
  gulp.watch(paths.sass, ['sass']).on('change', reportChange);
  gulp.watch(paths.svg, ['build-svg']).on('change', reportChange);

});

// this task will watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
// Will also start the the gulp webserver
gulp.task('watch:webserver', function(callback) {
  return runSequence(
    'watch',
    ['webserver'],
    callback
  );
});
