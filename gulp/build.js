const config = require('./config');

const browserify = require('browserify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const series = require('run-sequence');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const watchify = require('watchify');

const othersSelector = ['src/**/*', '!src/**/*.{ts,js}'];

const log = gutil.log.bind(gutil, 'Browserify:');

const b = browserify({
  debug: true,
  entries: [config.paths.entry],
}).plugin(tsify, { project: './' });

const bundle = bundler => bundler.bundle()
  .on('error', log)
  .pipe(source(`${config.filenames.bundle}.js`))
  .pipe(gulp.dest(config.paths.dist));

const build = bundler => series('copy:others', () => bundle(bundler));

gulp.task('prepare:others', () => series('clean:others', 'copy:others'));

gulp.task('copy:others', () =>
  gulp.src(othersSelector)
    .pipe(gulp.dest(config.paths.dist)));

gulp.task('build', () => build(b));

gulp.task('build:watch', ['clean:bundle'], () => {
  gulp.watch(othersSelector, ['prepare:others']);

  const w = watchify(b);

  w.on('log', log);
  w.on('update', () => build(w));
  build(w);
});
