'use strict';

const config = require('./config');

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json', { outDir: config.paths.compile });

const compile = () =>
  gulp.src(config.globs.compileables)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.compile));

gulp.task('compile', ['clean:compile'], () => compile());

gulp.task('compile:watch', ['clean:compile'], () => {
  gulp.watch(config.globs.compileables, () => compile());

  return compile();
});
