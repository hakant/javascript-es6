var gulp = require('gulp');
var lrserver = require('tiny-lr');
var livereload = require('gulp-livereload');
var connect = require('connect');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var WEB_PORT = 9000;
var lrs = lrserver();

gulp.task('lr-server', function() {
  lrs.listen(35729, function(err) {
    if (err) return console.log(err);
  });
});

gulp.task('http-server', function() {
  connect()
    .use(require('connect-livereload')())
    .use(connect.static('app'))
    .use(connect.static('bower_components'))
    .listen(WEB_PORT);
  console.log('Server listening on http://localhost:' + WEB_PORT);
});

gulp.task('babel', function() {
  return gulp.src('app/es6/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('app/es5'));
});

gulp.task('server', function() {
  gulp.run('lr-server');

  var babelFiles = ['app/es6/**/*.js'];
  gulp.watch(babelFiles, function() {
    gulp.run('babel');
  });

  var browserFiles = ['app/**/*.html', 'app/es5/**/*.js'];
  gulp.watch(browserFiles, function() {
    console.log('Files changed. Reloading...');
    gulp.src(browserFiles)
      .pipe(livereload(lrs));
  });

  gulp.run('http-server');
});

gulp.task('default', function() {
  gulp.run('server');
});
