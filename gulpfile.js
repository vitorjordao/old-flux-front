var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// Minify an Concat home CSS
gulp.task('home-minify-css', function () {
    return gulp.src([
        "./Design_Thinking/css/basics.css",
        "./Design_Thinking/css/buttons.css",
        "./Design_Thinking/css/header.css",
        "./Design_Thinking/css/cards.css",
        "./Design_Thinking/css/forms.css",
        "./Design_Thinking/css/footer.css",
        "./Screens/Home/*.css",
    ])
        .pipe(plumber())
        .pipe(minifyCss())
        .pipe(concat("style.css"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("./Screens/Home/prod/css/"));
});

// Minify an Concat home JS
gulp.task('home-minify-js', function () {
    return gulp.src([
        "./Design_Thinking/js/menu.js",
        "./Design_Thinking/js/auth.js",
    ])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("./Screens/Home/prod/js/"));
});

// Minify an Concat auth CSS
gulp.task('auth-minify-css', function () {
    return gulp.src([
        "./Design_Thinking/css/basics.css",
        "./Design_Thinking/css/buttons.css",
        "./Design_Thinking/css/header.css",
        "./Design_Thinking/css/cards.css",
        "./Design_Thinking/css/forms.css",
        "./Design_Thinking/css/footer.css",
        "./Screens/Auth/*.css",
    ])
        .pipe(plumber())
        .pipe(minifyCss())
        .pipe(concat("style.css"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("./Screens/Auth/prod/css/"));
});

// Minify an Concat auth JS
gulp.task('auth-minify-js', function () {
    return gulp.src([
        "./Design_Thinking/js/menu.js",
        "./Design_Thinking/js/auth.js",
    ])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("./Screens/Auth/prod/js/"));
});

// Watch
gulp.task('watch', function () {
    gulp.watch([cssSrc], ['home-minify-css', 'home-minify-js', 'auth-minify-css', 'auth-minify-js']);
});

// Default
gulp.task('default', gulp.series(['home-minify-css', 'home-minify-js', 'auth-minify-css', 'auth-minify-js']));