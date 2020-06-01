var gulp = require('gulp');
var plumber = require('gulp-plumber');
// var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// Minify an Concat home CSS
gulp.task('home-minify-css', function () {
    return gulp.src([
        "./Design_Thinking/css/basics.css",
        "./Design_Thinking/css/buttons.css",
        "./Design_Thinking/css/cards.css",
        "./Screens/Home/*.css",
    ])
        .pipe(plumber())
        .pipe(minifyCss())
        .pipe(concat("style.css"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("./Screens/Home/prod/css/"));
});

// Watch
gulp.task('watch', function () {
    gulp.watch([cssSrc], ['home-minify-css']);
});

// // Default
gulp.task('default', gulp.series(['home-minify-css']));