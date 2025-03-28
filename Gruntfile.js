module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        stripBanners: false,
      },
      MargeJs: {
        src: [
          "assets/js/vendors/jquery.min.js",
          "assets/js/vendors/bootstrap.min.js",
          "assets/js/vendors/aos.js",
        ],
        dest: "assets/js/<%= pkg.name %>-compress.js",
      },
      MargeCSS: {
        src: [
          "assets/css/vendors/bootstrap.min.css",
          "assets/css/vendors/aos.css",
        ],
        dest: "assets/css/<%= pkg.name %>-compress.css",
      },
    },
    uglify: {
      MinJs: {
        src: "<%= concat.MargeJs.dest %>",
        dest: "assets/js/<%= pkg.name %>-compress.min.js",
      },
    },
    sass: {
      dist: {
        files: [
          {
            src: "assets/scss/style.scss",
            dest: "assets/css/style.css",
          },
        ],
      },
    },
    cssmin: {
      options: {
        compatibility: "ie8",
        keepSpecialComments: 0,
        advanced: false,
      },
      MinCss: {
        src: "<%= concat.MargeCSS.dest %>",
        dest: "assets/css/<%= pkg.name %>-compress.min.css",
      },
      ThemesCss: {
        src: "assets/css/style.css",
        dest: "assets/css/style.min.css",
      },
    },

    // configure the "grunt watch" task
    watch: {
      sass: {
        files: [
          "<%= concat.MargeJs.src %>",
          "<%= concat.MargeCSS.src %>",
		      "assets/scss/**/*.scss",
          "cssmin",
          "Gruntfile.js",
        ],
        tasks: ["sass", "concat", "cssmin", "uglify"],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-autoprefixer");

  // "grunt" is the same as running "grunt sass:dist".
  grunt.registerTask("default", ["sass", "concat", "cssmin", "uglify"]);
  grunt.registerTask("dev", ["watch"]);
};
