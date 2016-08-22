module.exports = function(grunt) {

  // project configuration
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/_source/*.js'],
        dest: 'assets/js/all.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/all.js': ['assets/js/all.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/_source/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('dev', ['concat', 'watch']);

};
