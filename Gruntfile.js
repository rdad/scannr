
module.exports = function(grunt) {
  var bannerContent = '... banner template ...';

  grunt.initConfig({
    //pkg : grunt.file.readJSON('package.json'),

    // concat configuration
    concat: {
      global: {
        src : ['src/raf.js', 'src/app.js','src/scan.js','src/analysis.js','src/footprint.js','src/display.js','src/close.js'],
        dest : 'dist/scannr.js'
      },
      footprint: {
        options: {
          banner: 'scannr.footprint = {',
          footer: '};',
        },
        src: ['src/footprint/*.js'],
        dest : 'src/footprint.js'
      }
    },
    // uglify configuration
    uglify: {
      target : {
        src : ['dist/scannr.js'],
        dest : 'dist/scannr.min.js'
      },
      options: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('footprint', ['concat:footprint', 'default']);
  grunt.registerTask('default', ['concat:global', 'uglify']);
};