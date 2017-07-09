var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

gulp.task('build', function () {
  gulp.src('src/*.js')
    .pipe(embedTemplates())
    .pipe(uglify())
    .pipe(concat('datetime-range.min.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src('src/*.css')
    .pipe(cssnano())
    .pipe(concat('datetime-range.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.+(js|html|css)', ['build']);
});
