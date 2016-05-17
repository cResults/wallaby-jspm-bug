var gulp = require('gulp');
var hologram = require('gulp-hologram');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');

var del = require('del');

gulp.task('docs:clean', function (finished) {
    return del(['./documentation/docs/**/*'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
        if (err) {
            console.log('Error while deleting files');
        }
        finished();
    });
});


gulp.task('docs:styles', ['docs:clean'], function () {
    gulp.src('./documentation/doc_assets/sass/**/*.{css,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concatCss('styles/styleguide.css'))
        .pipe(gulp.dest('./documentation/doc_assets'));
});


gulp.task('docs', ['docs:styles', 'sass'], function() {
    gulp.src('hologram_config.yml')
            .pipe(hologram({
                logging: true
            }));
});

gulp.task('docs:watch', ['sass', 'docs'], function () {
    gulp.watch('./scss/**/*.{scss, css}', ['sass', 'docs']);
    gulp.watch('./documentation/doc_assets/**/*.{html,scss}', ['docs']);
});
