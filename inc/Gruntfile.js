/* jshint esversion: 6 */
/*global module:false*/

const _ = require('lodash');
const fs = require('fs');
const util = require('util');
const path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    'babel': {
      options: {
        sourceMap: true,
        minified: true,
        comments: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/js',
          src: ['*.js'],
          dest: 'assets/build',
          ext: '.js'      
        },{
          expand: true,
          cwd: 'build/js',
          src: ['*.js'],
          dest: 'dist/js/',
          ext: '.js'
        },{
          expand: true,
          cwd: 'build/js',
          src: ['*.js'],
          dest: 'demo/js/',
          ext: '.js'
        }]
      }
    },
    browserify: {
      bot: {
        files: {
          'assets/build/bot.js': 'assets/js/bot.js'
        },
        options: {
          transform: [['babelify', { presets: "es2015" }]],
          browserifyOptions: {
            debug: true
          }
        }
      },
      botInit: {
        files: {
          'assets/build/bot-init.js': 'assets/js/bot-init.js'
        },
        options: {
          transform: [['babelify', { presets: "es2015" }]],
          browserifyOptions: {
            debug: true
          }
        }
      },
      botMain: {
        files: {
          'assets/build/bot-main.js': 'assets/js/bot-main.js'
        },
        options: {
          transform: [['babelify', { presets: "es2015" }]],
          browserifyOptions: {
            debug: true
          }
        }
      },
      theme: {
        files: {
          'assets/build/theme-script.js': 'assets/js/theme-script.js'
        },
        options: {
          transform: [['babelify', { presets: "es2015" }]],
          browserifyOptions: {
            debug: true
          }
        }
      }
    }
  });
  
  grunt.registerTask('default', ['browserify:bot', 'browserify:botInit', 'browserify:botMain', 'browserify:theme']);
};