'use strict';

const config = require('./config');

const clean = require('gulp-clean');
const gulp = require('gulp');

const compileGlob = `${config.paths.compile}/**/*`;
const distGlob = `${config.paths.dist}/**/*`;
const bundleGlob = `${config.paths.dist}/${config.filenames.bundle}.{js,js.map}`;

const getCleanStream = glob => () =>
  gulp.src(glob, { read: false })
    .pipe(clean());

gulp.task('clean', ['clean:dist', 'clean:compile']);
gulp.task('clean:compile', getCleanStream(compileGlob));
gulp.task('clean:dist', getCleanStream(distGlob));
gulp.task('clean:bundle', getCleanStream(bundleGlob));
