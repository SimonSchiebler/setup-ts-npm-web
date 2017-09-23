const gulp = require('gulp');
const series = require('run-sequence');

require('./gulp/compile');
require('./gulp/bundle');
require('./gulp/clean');
require('./gulp/serve');

gulp.task('build', done => series('compile', 'bundle', done));
gulp.task('watch', done => series('compile:watch', 'bundle:watch', done));
gulp.task('default', done => series('watch', 'serve', done));
