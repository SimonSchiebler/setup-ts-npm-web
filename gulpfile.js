'use strict';

const gulp = require('gulp');
const series = require('run-sequence');

require('./gulp/bundle');
require('./gulp/clean');
require('./gulp/compile');
require('./gulp/lint');
require('./gulp/serve');

gulp.task('build', done => series('compile', 'bundle', done));
gulp.task('build:watch', done => series('compile:watch', 'bundle:watch', done));
gulp.task('watch', ['build:watch']);
gulp.task('default', done => series('watch', 'serve', done));
