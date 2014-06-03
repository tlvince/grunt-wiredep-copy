'use strict';

var fs = require('fs'),
    wiredepCopy = require('../tasks/lib/wiredep-copy');

var options = {
  src: 'test/fixtures',
  dest: 'tmp',
  wiredep: {
    cwd: 'test/fixtures'
  }
};

exports.wiredepCopy = {
  collate: function(test) {
    var actual = wiredepCopy.collate(options.wiredep);
    var expected = [
      'test/fixtures/bower_components/angular/angular.js',
      'test/fixtures/bower_components/font-awesome/css/font-awesome.css'
    ];

    test.deepEqual(actual, expected, 'should collate bower dependencies');
    test.done();
  },

  rename: function(test) {
    var dependency = 'test/fixtures/bower_components/angular/angular.js';
    var actual = wiredepCopy.rename(dependency, options);
    var expected = 'tmp/bower_components/angular/angular.js';

    test.strictEqual(actual, expected, 'should strip cwd');
    test.done();
  },

  copy: function(test) {
    var copy = function() {
      var expecteds = [
        'tmp/bower_components/angular/angular.js',
        'tmp/bower_components/font-awesome/css/font-awesome.css'
      ];
      expecteds.forEach(function(expected) {
        fs.openSync(expected, 'r');
      });
    };

    test.doesNotThrow(copy, 'should copy all files to dest');
    test.done();
  }
};
