const gulp = require('gulp');

require('./gulp/build');
require('./gulp/clean');
require('./gulp/serve');

gulp.task('default', ['build:watch']);
