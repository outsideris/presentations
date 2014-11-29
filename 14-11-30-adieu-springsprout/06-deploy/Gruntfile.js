/*jshint node:true */
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-flow-type-check');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');

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
    },
    karma: {
      options: {
        configFile: './test/karma.conf.js'
      },
      test: { }
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: '.'
      }
    },
    usemin: {
      html: 'index.html'
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('lint', ['recess:dev', 'jshint:dev', 'flow:dev']);
  grunt.registerTask('test', ['karma:test']);
  grunt.registerTask('build', [
    'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'usemin'
  ]);
};
