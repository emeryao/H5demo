// @ts-check;
const gulp = require('gulp');
const execSync = require('child_process').execSync;
const webserver = require('gulp-webserver');
const opn = require('opn');

gulp.task('move', () => {
    gulp.src([
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.gif',
        './src/**/*.png',
        './src/**/*.ico'
    ]).pipe(gulp.dest('./dist'));
});

gulp.task('build', (done) => {
    execSync('tsc');
    done();
});

gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(webserver({
            livereload: true,
            port: 5555,
            open: false
        }));
});

gulp.task('openbrowser', (done) => {
    opn('http://localhost:5555', {
        app: 'chrome'
    });
    done();
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.ts', ['build']);
    gulp.watch([
        './src/**/*.html',
        './src/**/*.gif',
        './src/**/*.png',
        './src/**/*.ico'
    ], ['move']);
});

gulp.task('default', ['move', 'build', 'webserver', 'openbrowser', 'watch'], () => {});