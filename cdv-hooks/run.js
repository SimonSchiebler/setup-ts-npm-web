

'use strict';

const spawn = require('cross-spawn');

module.exports = (context) => {
  console.log('[CDV Hook] Building Webapp');

  const options = context.cmdLine.match(/--\w+=\w+/g);
  const deferral = context.requireCordovaModule('q').defer();
  const params = ['build', 'test'].concat(options || []);
  const gulp = spawn('gulp', params, {
    // attach child process gulp to stdin, stdout and stderr
    stdio: [0, 1, 2],

    // run child process in a shell; needed for windows
    shell: true,
  });

  gulp.on('exit', (code) => {
    if (code > 0) {
      deferral.reject(`[CDV Hook] Building Webapp failed; code ${code}`);
    } else {
      deferral.resolve();
    }
  });

  return deferral.promise;
};
