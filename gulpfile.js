var gulp = require("gulp");
var stylus = require("gulp-stylus");
var livereload = require("gulp-livereload");

gulp.task("default", ["styles"] ,function() {
  console.log("Default complete!");
});

gulp.task("styles", function () {
  gulp.src("./css/styles.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./css"));
});
