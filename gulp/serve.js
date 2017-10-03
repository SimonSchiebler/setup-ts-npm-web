'use strict';

const config = require('./config');

const gulp = require('gulp');
const shell = require('gulp-shell');

const binPath = '".\\node_modules\\.bin\\reload"';
const servePath = config.paths.dist.replace('/', '\\');
const command = `${binPath} -d ${servePath} -s ${config.serve.startPage} -p ${config.serve.port} -b`;

gulp.task('serve', shell.task(command));
