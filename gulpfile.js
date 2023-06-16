const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", compileSass);
}

exports.default = gulp.series(compileSass, watch);
