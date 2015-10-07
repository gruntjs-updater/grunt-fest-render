/*
 * grunt-fest-render
 * Grunt Fest Task
 *
 * Copyright (c) 2013 Pavel Mineev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    version: {
      up: ['package.json'],
    },
  });

  grunt.loadNpmTasks('grunt-version');
  grunt.registerTask('default', ['version']);

};
