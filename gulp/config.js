'use strict';

const config = {
  filenames: {
    bundle: 'bundle',
  },
  paths: {
    compile: 'compile/',
    dist: 'www/js',
    entries: ['compile/main.js'],
    source: 'src',
  },
  serve: {
    port: 8080,
    startPage: 'main.html',
  },
};

config.globs = {
  compileables: `${config.paths.source}/**/*.{ts,js}`,
};

module.exports = config;
