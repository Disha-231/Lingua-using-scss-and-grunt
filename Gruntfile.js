module.exports = function (grunt) {
  // Grunt configuration file - Grunt ko kaise kaam karna hai yeh batata hai
  // Grunt ka configuration initialize karo
  grunt.initConfig({
    // Grunt ka configuration initialize karo

    pkg: grunt.file.readJSON("package.json"), // package.json file se project ki information read karo

    // Concat Task: Multiple files ko ek saath merge karega
    concat: {
      options: {
        stripBanners: false, // File ke top par jo comments hain unko na hatao
      },
      // JavaScript files ko merge karega
      MargeJs: {
        src: [
          // Jin files ko merge karna hai
          "assets/js/vendors/jquery.min.js",
          "assets/js/vendors/bootstrap.min.js",
          "assets/js/vendors/aos.js",
          "assets/js/vendors/slick-slider.js",
          "assets/js/vendors/slick.min.js",
          "assets/js/vendors/swiper-js.js",
        ],
        // Output file - package.json ke name se file banayega
        dest: "assets/js/<%= pkg.name %>-compress.js",
      },
      // CSS files ko merge karega
      MargeCSS: {
        src: [
          "assets/css/vendors/bootstrap.min.css",
          "assets/css/vendors/aos.css",
          "assets/css/vendors/slick.min.css",
          "assets/css/vendors/slick-theme.css",
          "assets/css/vendors/swiper-slider.css",
        ],
        dest: "assets/css/<%= pkg.name %>-compress.css",
      },
    },

    // Uglify Task: JavaScript ko compress/minify karega (size chota karega)
    uglify: {
      MinJs: {
        src: "<%= concat.MargeJs.dest %>", // Concat wali output file ko input lega
        dest: "assets/js/<%= pkg.name %>-compress.min.js", // .min.js file banayega
      },
    },

    // Sass Task: SCSS files ko CSS mein convert karega
    sass: {
      dist: {
        files: [
          {
            src: "assets/scss/style.scss", // Input SCSS file
            dest: "assets/css/style.css", // Output CSS file
          },
        ],
      },
    },

    // CSSMin Task: CSS files ko compress karega
    cssmin: {
      options: {
        compatibility: "ie8", // Internet Explorer 8 compatible CSS banayega
        keepSpecialComments: 0, // Special comments ko hata dega
        advanced: false, // Advanced optimizations off rakhega
      },
      // Vendor CSS files ko minify karega
      MinCss: {
        src: "<%= concat.MargeCSS.dest %>", // Concat wali CSS file ko input lega
        dest: "assets/css/<%= pkg.name %>-compress.min.css",
      },
      // Hamari custom CSS ko minify karega
      ThemesCss: {
        src: "assets/css/style.css", // Original CSS file
        dest: "assets/css/style.min.css", // Minified version
      },
    },

    // Watch Task: Files mein changes dekhega aur automatically tasks run karega
    watch: {
      sass: {
        files: [
          // Jin files par nazar rakni hai
          "<%= concat.MargeJs.src %>", // JS source files
          "<%= concat.MargeCSS.src %>", // CSS source files
          "assets/scss/**/*.scss", // All SCSS files
          "cssmin",
          "Gruntfile.js", // Khud Gruntfile bhi
        ],
        // Jab bhi changes aaye, yeh tasks run honge
        tasks: ["sass", "concat", "cssmin", "uglify"],
        options: {
          livereload: true, // Browser ko auto refresh karne ke liye
        },
      },
    },
  });

  // Grunt plugins ko load karo
  grunt.loadNpmTasks("grunt-contrib-sass"); // Sass compiler
  grunt.loadNpmTasks("grunt-contrib-concat"); // File concatenation
  grunt.loadNpmTasks("grunt-contrib-uglify"); // JS minification
  grunt.loadNpmTasks("grunt-contrib-watch"); // File watching
  grunt.loadNpmTasks("grunt-contrib-cssmin"); // CSS minification
  grunt.loadNpmTasks("grunt-autoprefixer"); // CSS vendor prefixes

  // Custom Tasks Register karo:

  // Default task - 'grunt' command se yeh run hoga
  grunt.registerTask("default", ["sass", "concat", "cssmin", "uglify"]);
  /* Steps:
     1. SCSS -> CSS compile
     2. JS/CSS files merge
     3. CSS compress
     4. JS compress
  */

  // Development task - 'grunt dev' se yeh run hoga
  grunt.registerTask("dev", ["watch"]);
  /* Yeh watch mode start karega jo files mein changes
     aane par automatically sab tasks run karega */
};
