var gulp = require('gulp'),
    rigger = require('gulp-rigger');


gulp.task('default', function () {
    gulp.src('presentation/index.md')
        .pipe(rigger())
        .pipe(gulp.dest('./'));
});
