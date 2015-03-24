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
    compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
    },
    uglify: {
      dist: {
        files: {
          'js/main.min.js': [
            'js/*.js',
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
      }
    },
    clean: {
      dist: [
        'css/main.min.css',
        'js/main.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  //grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'compass',
    'uglify',
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
