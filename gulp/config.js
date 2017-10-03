'use strict';

module.exports = {
  filenames: {
    bundle: 'bundle',
  },
  paths: {
    compile: 'target/compile',
    dist: 'target/dist',
    entries: ['target/compile/main.js'],
  },
  serve: {
    port: 8080,
    startPage: 'main.html',
  },
};
