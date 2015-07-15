require("colors");
var gulp      = require("gulp");
var gFilter   = require("gulp-filter");
var gChmod    = require("gulp-chmod");

var gWeb      = require("gulp-webserver");
var gJade     = require("gulp-jade");
var gStylus   = require("gulp-stylus");

var webServerConfig = {
  livereload: true,
  port: process.env.PORT || 3000
  //host: "localhost",
  //path: "/",
  //directoryListing: false,
  //fallback: "", is this my index?
  //open: false,
  //https: false,
  //middleware: function () {} | [] (connect style)
  //proxies: []
};

gulp.task("serve", function () {
  gulp.src("dist")
    .pipe(gWeb(webServerConfig));
});

gulp.task("vendorJs", function () {
  gulp.src("vendor/js/**/*.js")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/js/vendor"));
});

gulp.task("layout", function () {
  gulp.src("src/layouts/**/*.jade")
  .pipe(gFilter(["*", "!**/base.jade"]))
    .pipe(gJade())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["serve", "vendorJs", "layout"], function () {
    gulp.watch("src/layouts/**/*.jade", ["layout"]);
    gulp.watch("vendor/**/*.js", ["vendorJs"]);
});
