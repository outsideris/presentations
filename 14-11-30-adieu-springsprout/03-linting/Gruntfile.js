/*jshint node:true */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
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
        files: ['css/**/*.css'],
        tasks: ['recess:dev']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint:dev', 'flow:dev']
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
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('lint', ['recess:dev', 'jshint:dev', 'flow:dev']);
};
