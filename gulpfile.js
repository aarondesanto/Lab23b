var gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    browserSync = require("browser-sync").create();

gulp.task("default", ["watch", "styles"] ,function() {
  console.log("__Default complete!");
});

gulp.task("styles", function () {
  gulp.src("./css/styles.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
  console.log("__got styles.styl");
  console.log("__compiling styles.css");
  console.log("__saved to ./css/styles.css");
});

gulp.task("watch", ["styles"], function() {
  browserSync.init({
    server: "."
  });
  gulp.watch("./css/styles.styl", ["styles"]);
  gulp.watch("index.html").on("change", browserSync.reload);
});
