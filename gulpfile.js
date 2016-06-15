var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
 
gulp.task('build', function () {
  gulp.src('src/*.js')
    .pipe(embedTemplates())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
  gulp.src('src/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'));
});
