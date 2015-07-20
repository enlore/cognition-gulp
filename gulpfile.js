require("colors");
var gulp      = require("gulp");
var gFilter   = require("gulp-filter");
var gChmod    = require("gulp-chmod");
var gConcat   = require("gulp-concat");

var gWeb      = require("gulp-webserver");
var gJade     = require("gulp-jade");
var gStylus   = require("gulp-stylus");
var gMd       = require("gulp-markdown");

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

gulp.task("vendorCss", function () {
  gulp.src("vendor/css/**/*.css")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/css/vendor"));
});

gulp.task("layouts", function () {
  gulp.src("src/layouts/**/*.jade")
  .pipe(gFilter(["*", "!**/base.jade"]))
    .pipe(gJade())
    .pipe(gulp.dest("dist"));
});

/**
 * Styles are pulled from throughout the apps src tree (anything in src/app/)
 * and bundled into one file to be served with the app's assets
 */
gulp.task("styles", function () {
  glup.src("src/app/**/*.styl")
    .pipe(gStylus())
    .pipe(gConcat("app.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("docs", function () {
  gulp.src("README.md")
    .pipe(gMd())
    .pipe(gulp.dest("dist"));
});

gulp.task("app", function () {
  gulp.src("src/app/**/*.jade")
    .pipe(gJade())
    .pipe(gulp.dest("dist/app"));

  gulp.src("/src/app/**/*.html")
    .pipe(gulp.dest("dist/app"));
});

gulp.task("default", ["serve", "vendorJs", "vendorCss", "layouts", "app", "docs"], function () {
    gulp.watch("README.md", ["docs"]);
    gulp.watch("src/layouts/**/*.jade", ["layouts"]);
    gulp.watch("vendor/js/**/*.js", ["vendorJs"]);
    gulp.watch("vendor/css/**/*.css", ["vendorCss"]);
    gulp.watch("src/app/**/*.jade", ["app"]);
});
