var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () { 
    gulp.src('./styles/**/*.sass')
        .pipe(sass({
        	errLogToConsole: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function(){
	gulp.watch('./styles/**.sass', ['sass'])	
});