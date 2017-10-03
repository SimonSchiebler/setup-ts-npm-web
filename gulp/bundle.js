'use strict';

const config = require('./config');

const browserify = require('browserify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const series = require('run-sequence');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

const othersSelector = [`${config.paths.compile}/**/*`, `!${config.paths.compile}/**/*.js`];

const log = gutil.log.bind(gutil, 'Browserify:');

const b = browserify({
  debug: true,
  entries: config.paths.entries,
});

const bundle = bundler => bundler.bundle()
  .on('error', log)
  .pipe(source(`${config.filenames.bundle}.js`))
  .pipe(gulp.dest(config.paths.dist));

gulp.task('prepare:bundle', done =>
  series('clean:dist', 'copy:bundle', done));

gulp.task('copy:bundle', () =>
  gulp.src(othersSelector)
    .pipe(gulp.dest(config.paths.dist)));

gulp.task('bundle', ['prepare:bundle'], () => bundle(b));

gulp.task('bundle:watch', ['prepare:bundle'], () => {
  gulp.watch(othersSelector, ['copy:bundle']);

  const w = watchify(b);

  w.on('log', log);
  w.on('update', () => bundle(w));

  return bundle(w);
});
