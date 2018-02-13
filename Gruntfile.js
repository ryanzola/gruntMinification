module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {																				// config for minify js
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
					'./build/scripts/output.min.js': ['./scripts/server.js', './scripts/index.js']
				}
      }
		},
		htmlmin: {																			// config for minify html
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					maxLineLength: 200
				},
				files: {                                   // Dictionary of files
					'build/index.html': './index.html',      // 'destination': 'source'
					
				}
			}
		},
		cssmin: {																				// config for minify css
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'./build/style/output.css': ['./style/style.css', './style/another.css']
				}
			}
		}
  });

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin')

  // Default task(s).
	grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
};
