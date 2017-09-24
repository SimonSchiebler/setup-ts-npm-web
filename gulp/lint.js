const gulp = require('gulp');
const shell = require('gulp-shell');

const tsBinPath = '".\\node_modules\\.bin\\tslint"';
const tsConfigPath = 'tslint.json';
const tsProjectPath = 'tsconfig.json';
const tsCommand = `${tsBinPath} -c ${tsConfigPath} -p ${tsProjectPath}`;

const esBinPath = '".\\node_modules\\.bin\\eslint"';
const esConfigPath = '".\\.eslintrc.json"';
const esCommand = `${esBinPath} -c ${esConfigPath} .`;

gulp.task('lint:ts', shell.task(tsCommand));
gulp.task('lint:es', shell.task(esCommand));
gulp.task('lint', ['lint:ts', 'lint:es']);
