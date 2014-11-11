var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var child_process = require('child_process');

var paths = {
  sass: ['./client/www/lib/scss/**/*.scss','!**/bower_components'],
  css: ['./client/www/app/**/*.css','!**/bower_components']
};

gulp.task('default', [
  // 'db',
  'scss and css',
  'serve',
  'open']);

gulp.task('scss and css', function(done) {
  gulp.src(['./client/www/lib/ionic/scss/ionic.app.scss','./client/www/lib/ionic/scss/ionic.scss'])
    .pipe(sass())
    .pipe(concat('ionic.css'))
    .pipe(rename({ extname: '.cat.css' }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./client/www/lib/css/'))

  gulp.src('./client/www/app/**/*.css')
    .pipe(concat('app.css'))
    .pipe(rename({ extname: '.cat.css' }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./client/www/lib/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(
    ['client/www/app/**/*css',
    './client/www/lib/ionic/scss/ionic.app.scss',
    './client/www/lib/ionic/scss/ionic.scss'],
    ['scss and css']);
});

gulp.task('db', function() {
  child_process.exec('mongod', function(err,stdout,stderr){
    console.log(stdout);
  });
});

gulp.task('serve', function() {
  child_process.exec('nodemon server/app.js', function(err,stdout,stderr){
    console.log(stdout);
  });
});

gulp.task('open', function() {
  child_process.exec('open http://localhost:9000/', function(err,stdout,stderr){
    console.log(stdout);
  });
});


// gulp.task('install', ['git-check'], function() {
//   return bower.commands.install()
//     .on('log', function(data) {
//       gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//     });
// });

// gulp.task('git-check', function(done) {
//   if (!sh.which('git')) {
//     console.log(
//       '  ' + gutil.colors.red('Git is not installed.'),
//       '\n  Git, the version control system, is required to download Ionic.',
//       '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//       '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//     );
//     process.exit(1);
//   }
//   done();
// });
