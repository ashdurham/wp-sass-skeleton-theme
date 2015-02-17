'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/*.js',
        '!js/main.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          // Source maps are available, but require Sass 3.3.0 to be installed
          // https://github.com/gruntjs/grunt-contrib-sass#sourcemap
          sourcemap: 'none'
        },
        files: {
          'css/screen.css': [
            'sass/screen.scss'
          ],
          'css/print.css': [
            'sass/print.scss'
          ],
          'css/ie.css': [
            'sass/ie.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/main.min.js': [
            'js/_*.js',
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/js/scripts.min.js.map'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'sass/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: [ 'uglify']
        // 'jshint',
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/main.min.css',
          'js/scripts.min.js',
          'page-templates/*.php',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'css/main.min.css',
        'js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify',
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
