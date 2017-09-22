'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('serve', ['build'],
    shell.task('".\\node_modules\\.bin\\reload" -d target\\dist -s main.html -p 8080 -b')
);
