/*
 * grunt-wiredep-copy
 * https://github.com/tlvince/grunt-wiredep-copy
 *
 * Copyright (c) 2014 Tom Vincent
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash'),
    wiredepCopy = require('./lib/wiredep-copy');

module.exports = function (grunt) {
    grunt.registerMultiTask('wiredepCopy', 'Copies dependencies managed by wiredep', function () {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            src: '.',
            dest: '.',
            wiredep: {}
        });

        var dependencies = wiredepCopy.collate(options.wiredep);
        dependencies.forEach(function (dependency) {
            
            if (!grunt.file.exists(options.dest)) {
                grunt.file.mkdir(options.dest);
            }

            var dest = wiredepCopy.rename(dependency, options);
            dest = options.dest + dest.replace(options.src, '');

            grunt.file.copy(dependency, dest);
            grunt.log.writeln(dependency + ' -> ' + dest);
        });
    });
};
