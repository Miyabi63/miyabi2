"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');


gulp.task("sass", function () {
    return gulp.src("assets/sass/**/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("css/"))
});

gulp.task("sassmin", function () {
    return gulp.src("assets/sass/**/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('css/'))
});

gulp.task("js", function () {
    return gulp.src("assets/js/**/*js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
});

//変更を監視
gulp.task('watch', () => {
    gulp.watch("assets/js/**/*.js", gulp.task('js'));
    gulp.watch("assets/sass/**/*.scss", gulp.task('sass'));
    gulp.watch("assets/sass/**/*.scss", gulp.task('sassmin'));
    gulp.watch("**/*.php", gulp.task('php'));
})

// v4
gulp.task("default",
    //gulp.series(
        gulp.parallel("watch"),
        //"done"
    //)
);