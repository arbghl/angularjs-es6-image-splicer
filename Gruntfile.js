'use strict';

module.exports = function(grunt) {
	// load all grunt tasks
	require('jit-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dev: {
				options: {
					style: 'expanded',
					lineNumbers: true
				},
				files: [
					{ './dist/style.css': './src/css/style.scss' }
				]
			}
		},
		jshint: {
			options: {
				jshintrc: './jshintrc'
			},
			dev: {
				files: {
					src: [
						'./src/js/**/*.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: [
					'./src/css/*.scss'
				],
				tasks: [
					'sass:dev'
				],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: './src/js/**/*.{js,tpl.html}',
				tasks: [
					'jshint:dev',
					'browserify:dev'
				],
				options: {
					spawn: false
				}
			}
		},
		browserify: {
			dev: {
				options: {
					transform: [
						[
							'babelify',
							{ presets: ['es2015'] }
						],
						['browserify-ng-html2js']
					]
				},
				files: [
					{ './dist/bundle.js': './src/js/app.js' }
				]
			}
		},
		uglify: {
			options: {
				sourceMap: true,
				wrap: true,
				preserveComments: 'some',
				quoteStyle: 1
			},
			bundles: {
				files: [
					{ './dist/bundle.js': './dist/bundle.js' }
				]
			}
		},
		karma: {
			unit: {
				configFile: './karma.conf.js'
			}
		}
	});

	grunt.registerTask('tests', [
		'karma:unit'
	]);

	grunt.registerTask('dev', [
		'jshint:dev',
		'sass:dev',
		'browserify:dev',
		'watch'
	]);

	grunt.registerTask('default', [
		'karma:unit',
		'sass:publish',
		'browserify:dev',
		'uglify:bundles'
	]);
};
