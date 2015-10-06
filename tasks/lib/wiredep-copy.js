'use strict';

var _ = require('lodash'),
    wirdep = require('wiredep'),
    fs = require('fs');

module.exports = {
  collate: function(opts) {
    return _.chain(wirdep(opts))
      .omit('packages')
      .values()
      .flatten()
      .value();
  },
  rename: function(file, options) {
    var src = fs.realpathSync(options.src);
    var dest = fs.realpathSync(options.dest);
    return file.replace(src, dest);
  }
};
