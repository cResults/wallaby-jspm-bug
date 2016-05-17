var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function () {
    gulp.src('wwwroot')
      .pipe(server({
          livereload: false,
          directoryListing: false,
          open: false
      }));
});