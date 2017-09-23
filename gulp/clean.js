const config = require('./config');

const clean = require('gulp-clean');
const gulp = require('gulp');

const distGlob = `${config.paths.dist}/**/*`;
const bundleGlob = `${config.paths.dist}/${config.filenames.bundle}.{js,js.map}`;
const othersSelector = [distGlob, `!${bundleGlob}`];

gulp.task('clean', ['clean:dist']);

gulp.task('clean:dist', () =>
  gulp.src(distGlob, { read: false })
    .pipe(clean()));

gulp.task('clean:others', () =>
  gulp.src(othersSelector, { read: false })
    .pipe(clean()));

gulp.task('clean:bundle', () =>
  gulp.src(bundleGlob, { read: false })
    .pipe(clean()));
