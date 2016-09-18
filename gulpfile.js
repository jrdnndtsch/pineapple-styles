var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () { 
    gulp.src('./styles/**/*.sass')
        .pipe(sass({
        	errLogToConsole: true
        }))
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
         }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function(){
	gulp.watch('./styles/**.sass', ['sass'])	
});