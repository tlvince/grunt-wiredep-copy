'use strict';

var _ = require('lodash'),
    wirdep = require('wiredep');

module.exports = {
  collate: function(opts) {
    return _.chain(wirdep(opts))
      .omit('packages')
      .values()
      .flatten()
      .value();
  },
  rename: function(file, options) {
    return file.replace(options.src, options.dest);
  }
};
