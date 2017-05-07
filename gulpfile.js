// @ts-check;
const gulp = require('gulp');
const execSync = require('child_process').execSync;

gulp.task('move', () => {
    gulp.src([
        './src/**/*.html',
        './src/**/*.gif',
        './src/**/*.png',
        './src/**/*.ico'
    ]).pipe(gulp.dest('./dist'));
});

gulp.task('build', (done) => {
    execSync('tsc');
    done();
});

gulp.task('default', ['move', 'build'], () => {});