var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

let tasks = [];

function javascriptOptimizer(name = '', modules = []) {
    const taskName = `JS-${name}`;

    tasks.push(taskName);

    // Minify an Concat JS
    gulp.task(taskName, function () {
        return gulp.src(modules)
            .pipe(plumber())
            .pipe(uglify())
            .pipe(concat("main.js"))
            .pipe(rename({ suffix: '.min' }))
            .pipe(plumber.stop())
            .pipe(gulp.dest(`./Screens/${name}/prod/js/`));
    });
}

function cssOptimizer(name = '', modules = []) {
    const taskName = `CSS-${name}`;

    tasks.push(taskName);

    // Minify an Concat CSS
    gulp.task(taskName, function () {
        return gulp.src(modules)
                .pipe(plumber())
                .pipe(minifyCss())
                .pipe(concat("style.css"))
                .pipe(rename({ suffix: '.min' }))
                .pipe(plumber.stop())
            .pipe(gulp.dest(`./Screens/${name}/prod/css/`));
    });
}

// HOME
javascriptOptimizer('Home', [
    "./Design_Thinking/js/menu.js",
    "./Design_Thinking/js/auth.js",
]);
cssOptimizer('Home', [
    "./Design_Thinking/css/basics.css",
    "./Design_Thinking/css/buttons.css",
    "./Design_Thinking/css/header.css",
    "./Design_Thinking/css/cards.css",
    "./Design_Thinking/css/forms.css",
    "./Design_Thinking/css/plan.css",
    "./Design_Thinking/css/footer.css",
    "./Screens/Home/*.css",
]);

// AUTH
javascriptOptimizer('Auth', [
    "./Design_Thinking/js/menu.js",
    "./Design_Thinking/js/auth.js",
]);
cssOptimizer('Auth', [
    "./Design_Thinking/css/basics.css",
    "./Design_Thinking/css/buttons.css",
    "./Design_Thinking/css/header.css",
    "./Design_Thinking/css/cards.css",
    "./Design_Thinking/css/forms.css",
    "./Design_Thinking/css/footer.css",
    "./Screens/Auth/*.css",
]);

// TERMS
javascriptOptimizer('Terms', [
    "./Design_Thinking/js/menu.js",
]);
cssOptimizer('Terms', [
    "./Design_Thinking/css/basics.css",
    "./Design_Thinking/css/buttons.css",
    "./Design_Thinking/css/header.css",
    "./Design_Thinking/css/cards.css",
    "./Design_Thinking/css/footer.css",
    "./Screens/Terms/*.css",
]);

// WhoWeAre
javascriptOptimizer('WhoWeAre', [
    "./Design_Thinking/js/menu.js",
]);
cssOptimizer('WhoWeAre', [
    "./Design_Thinking/css/basics.css",
    "./Design_Thinking/css/buttons.css",
    "./Design_Thinking/css/header.css",
    "./Design_Thinking/css/cards.css",
    "./Design_Thinking/css/footer.css",
    "./Screens/WhoWeAre/*.css",
]);

// Plans
javascriptOptimizer('Plans', [
    "./Design_Thinking/js/menu.js",
]);
cssOptimizer('Plans', [
    "./Design_Thinking/css/basics.css",
    "./Design_Thinking/css/buttons.css",
    "./Design_Thinking/css/header.css",
    "./Design_Thinking/css/cards.css",
    "./Design_Thinking/css/plan.css",
    "./Design_Thinking/css/footer.css",
    "./Screens/Plans/*.css",
]);

// Watch
gulp.task('watch', function () {
    gulp.watch(['Design_Thinking/**/*.*', 'Screens/**/*.*', '!Screens/**/prod/**/*.*'], gulp.series(tasks));
});

// Default
gulp.task('default', gulp.series(tasks));