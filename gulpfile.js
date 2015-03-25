var gulp = require('gulp');
var stylus = require('gulp-stylus');
// var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
	gulp.src('scss/style.styl')
	.pipe(stylus())
	.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
	.pipe(gulp.dest('css/style.css'))
});

gulp.task('templates', function() {
	gulp.src('foodsavour.jade')
	.pipe(jade())
	.pipe(gulp.dest('foodsavour.html'))
	});

gulp.task('watch', function(){
	gulp.watch('scss/*.styl', ['styles']);
});