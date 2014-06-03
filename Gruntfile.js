/*
 * grunt-wiredep-copy
 * https://github.com/tlvince/grunt-wiredep-copy
 *
 * Copyright (c) 2014 Tom Vincent
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    wiredepCopy: {
      test: {
        options: {
          src: 'test/fixtures',
          dest: 'tmp',
          wiredep: {
            cwd: 'test/fixtures',
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'wiredepCopy', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
