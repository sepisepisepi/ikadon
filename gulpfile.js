var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');

var paths = {
	'scss': 'src/css/',
	'css': 'dist/css/'
}

gulp.task('scss', function() {
	var processors = [
		cssnext()
	];
	return gulp.src([paths.scss + '**/*.scss', !paths.scss + '**/_*.scss'])
	.pipe(sass())
	.pipe(postcss(processors))
	.pipe(gulp.dest(paths.css))
});