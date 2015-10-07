/*
* grunt-fest
* Grunt Fest Render to HTML Task
*
* Copyright (c) 2013 Pavel Mineev
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {

	var fest = require('fest');

	grunt.registerMultiTask('festRender', 'Compile fest templates to static html', function() {
		var options = this.options();

		this.files.forEach(function (file) {
			var html = '',
				paths = file.src.filter(function (filepath) {
					if (!grunt.file.exists(filepath)) {
						grunt.log.warn('Source file "' + filepath + '" not found.');
						return false;
					}
					return true;
				});


			for (var i in paths) {
				html += fest.render(paths[i], options.data);
			}

			grunt.file.write(file.dest, html);
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});
};
