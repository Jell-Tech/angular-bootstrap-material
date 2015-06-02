module.exports = (grunt) -> 
  grunt.initConfig
    jshint:
      files: ['*.js', '!*.min.js']
    uglify:
      default:
        files: 
          'angular-bootstrap-material.min.js': ['angular-bootstrap-material.js']
      

  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.registerTask 'default', ['jshint', 'uglify:default']
