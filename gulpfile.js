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
  sass: ['./client/lib/scss/**/*.scss'],
  css: ['./client/app/**/*.css']
};

gulp.task('default', [
  // 'db',
  'scss',
  'serve',
  'open']);

gulp.task('scss', function(done) {
  gulp.src(['./client/lib/ionic/scss/ionic.app.scss','./client/lib/ionic/scss/ionic.scss'])
    .pipe(sass())
    .pipe(concat('ionic.css'))
    .pipe(rename({ extname: '.cat.css' }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./client/lib/css/'))

  gulp.src('./client/app/**/*.css')
    .pipe(concat('app.css'))
    .pipe(rename({ extname: '.cat.css' }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./client/lib/css/'))
    .on('end', done);
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
