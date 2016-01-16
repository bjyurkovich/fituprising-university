module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      app: {
        files: {
          'styles/css/common.css': 'styles/less/common.less',
          'styles/css/page.css': 'styles/less/page.less',
          'styles/css/header.css': 'styles/less/header.less',
          'styles/css/landing.css': 'styles/less/landing.less',
          'styles/css/details.css': 'styles/less/details.less'          
        }
      }
    },

    watch: {
      less: {
        files: 'styles/less/*.less',
        tasks: ['css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('css', ['less']);
  grunt.registerTask('default', ['css']);

};
