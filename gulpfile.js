'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var del = require('del');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');

// IMAGES - Minify PNG, JPEG, GIF and SVG images
gulp.task('images', function() {
	return gulp.src('source/images/*')
  	.pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: true}
          ]
      })
    ]))
	.pipe(gulp.dest('build/images/'))
});

// CSS
gulp.task('sass', function() {
  return gulp.src('source/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('source/stylesheets/'))
});

gulp.task('sass:build', function() {
  return gulp.src('source/stylesheets/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('build/stylesheets/'))
});

// ES6 JS - converts ES6 code into vanilla ES5 with Babel JS
gulp.task('babel:build', function() {
  return gulp.src('source/javascripts/**/*')
    .pipe(babel())
    .pipe(jsmin())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/javascripts/'));
});

// CONCAT JS
gulp.task('scripts', function() {
  return gulp.src('source/javascripts/**/*')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/javascripts/'));
});

// CLEANING FILES
gulp.task('clean:build', function() {
  return del.sync('build');
});

// WATCH
gulp.task('watch', function() {
  gulp.watch('source/stylesheets/**/*.scss', ['sass']);
});

// BUILD
gulp.task('build', ['clean:build', 'sass:build', 'babel:build', 'images'], function() {
  console.log('Building files');
});
