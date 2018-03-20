var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

gulp.task('build', function () {
  gulp.src(['src/datetime-range.js', 'src/date-range.js', 'src/time-range.js'])
    .pipe(embedTemplates())
    .pipe(uglify())
    .pipe(concat('datetime-range.min.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src(['src/datetime-range.css', 'src/date-range.css', 'src/time-range.css'])
    .pipe(cssnano())
    .pipe(concat('datetime-range.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.+(js|html|css)', ['build']);
});
