var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./public/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public'));
});

gulp.task('watch-sass', function() {
    gulp.watch(['./public/**/*.scss'], ['sass']);
});
