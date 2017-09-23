
const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', ['clean:dist']);

gulp.task('clean:dist', () =>
    gulp.src(['target/dist/**/*'], { read: false })
        .pipe(clean())
);

gulp.task('clean:others', () =>
    gulp.src(['target/dist/**/*', '!target/dist/bundle.{js,js.map}'], { read: false })
        .pipe(clean())
);

gulp.task('clean:bundle', () =>
    gulp.src('target/dist/bundle.{js,js.map}', { read: false })
        .pipe(clean())
);
