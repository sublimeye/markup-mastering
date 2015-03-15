var gulp = require('gulp'),
    live = require('live-server'),
    forever = require('forever-monitor');

gulp.task('server', function () {

    live.start({
        root: 'public'
    });
});

//var connect = require('gulp-connect');
/*

exports = module.exports = {
    connect: connect
};

gulp.task('server', function () {

    connect.server({
        root: 'public',
        host: 'localhost'
    });

});
*/

/*
gulp.task('node-server-watch', function() {
  var child = new (forever.Monitor)('server.js', {
    max: 1,
    sourceDir: 'server/',
    env: {'NODE_ENV': 'development'},
    watch: true,
    watchDirectory: 'server/'
  });

  child.on('exit', function () {
    console.log('server/server.js has exited');
  });

  child.start();
});*/
