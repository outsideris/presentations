/*jshint node:true */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-flow-type-check');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          base: ''
        }
      }
    },
    watch: {
      css: {
        files: ['css/**/*.less'],
        tasks: ['less:dev'],
        options: { livereload: true }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint:dev', 'flow:dev'],
        options: { livereload: true }
      }
    },
    recess: {
      dev: {
        src: ['css/**/*.css']
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      dev: {
        src: ['js/**/*.js']
      }
    },
    flow: {
      options: {
        configFile: '.'
      },
      dev: {
        options: {}
      }
    },
    less: {
      dev: {
        files: {
          "css/style.css": "css/main.less"
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('lint', ['recess:dev', 'jshint:dev', 'flow:dev']);
};
