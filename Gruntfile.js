module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      // config for minify js
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          './build/scripts/index.min.js': [
            // Dictionary of files
            './scripts/index.js' // destination: [source, ...]
          ]
        }
      }
    },
    htmlmin: {
      // config for minify html
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          maxLineLength: 200
        },
        files: {
          // Dictionary of files
          'build/index.html': './index.html' // destination: source
        }
      }
    },
    cssmin: {
      // config for minify css
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: './styles',
          src: ['*.css', '!*.min.css'],
          dest: 'build/styles',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register default task(s).
  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
};
