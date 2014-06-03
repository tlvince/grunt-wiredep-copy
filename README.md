# grunt-wiredep-copy

> Copies dependencies managed by wiredep

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-wiredep-copy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wiredep-copy');
```

## The "wiredepCopy" task

### Overview

In your project's Gruntfile, add a section named `wiredepCopy` to the data
object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wiredepCopy: {
    target: {
      options: {
        src: 'app',
        dest: 'dest',
        wiredep: {}
      }
    },
  },
})
```

### Options

#### options.src

Type: `String`
Default value: `.`

The directory containing the wiredep target.

#### options.dest

Type: `String`
Default value: `.`

The destination directory to copy Bower dependencies to.

#### options.wiredep

Type: `Object`
Default value: `{}`

Options passed through to wiredep.

## Usage examples

### Yeoman scaffolded project

```js
wiredepCopy: {
  target: {
    options: {
      src: '<%= yeoman.app %>',
      dest: '<%= yeoman.dist %>',
      wiredep: '<%= wiredep.target %>'
    }
  }
}
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Tom Vincent. Licensed under the MIT license.
