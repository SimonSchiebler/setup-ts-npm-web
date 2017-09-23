
const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const series = require('run-sequence');
const gutil = require('gulp-util');

const log = gutil.log.bind(gutil, 'Browserify:');

const b = browserify({
    debug: true,
    entries: ['src/main.ts']
}).plugin(tsify, { project: './' });

const bundle = bundler => bundler.bundle()
    .on('error', log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('target/dist'));

const build = bundler =>  series('copy:others', () => bundle(bundler));

gulp.task('prepare:others', () => series('clean:others', 'copy:others'));

gulp.task('copy:others', () =>
    gulp.src(['src/**/*', '!src/**/*.{ts,js}'])
        .pipe(gulp.dest('target/dist'))
);

gulp.task('build', () => build(b));

gulp.task('build:watch', ['clean:bundle'], () => {
    gulp.watch(['src/**/*', '!src/**/*.{ts,js}'], ['prepare:others']);

    const w = watchify(b);

    w.on('log', log);
    w.on('update', () => build(w));
    build(w);
});
