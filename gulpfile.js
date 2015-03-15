var gulp = require('gulp');
var connect = require('./gulp-tasks/server');

require('./gulp-tasks/sass');

//Usage
gulp.task('test', ['sass']);
gulp.task('default', [
    'sass',
    'watch-sass',
    'server'
]);
