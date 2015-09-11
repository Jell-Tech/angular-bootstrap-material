module.exports = (grunt) -> 
  grunt.initConfig
    coffeelint:
      app: [
        'src/*.coffee'
      ]
      options:
        max_line_length:
          level: 'ignore'

    coffee:
      options:
        sourceMap: true
      compile:
        src: ['src/angular-bootstrap-material.coffee']
        dest: 'dist/angular-bootstrap-material.js'
        ext: '.js'


    uglify:
      default:
        files: 
          'dist/angular-bootstrap-material.min.js': ['dist/angular-bootstrap-material.js']
      

  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', ['coffeelint', 'coffee', 'uglify:default']
