var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching HTML files
gulp.task('browser-sync', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});