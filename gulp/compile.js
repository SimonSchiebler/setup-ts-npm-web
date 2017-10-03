'use strict';

const config = require('./config');

const gulp = require('gulp');
const series = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json', { outDir: config.paths.compile });

const compilablesGlob = 'src/**/*.{ts,js}';
const othersSelector = ['src/**/*', `!${compilablesGlob}`];

const compile = () =>
  gulp.src(compilablesGlob)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.compile));

gulp.task('prepare:compile', done =>
  series('clean:compile', 'copy:compile', done));

gulp.task('copy:compile', () =>
  gulp.src(othersSelector)
    .pipe(gulp.dest(config.paths.compile)));

gulp.task('compile', ['prepare:compile'], () => compile());

gulp.task('compile:watch', ['prepare:compile'], () => {
  gulp.watch(othersSelector, ['copy:compile']);
  gulp.watch(compilablesGlob, () => compile());

  return compile();
});
