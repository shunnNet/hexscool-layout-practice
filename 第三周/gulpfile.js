
var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var fs = require("fs")
const autoprefixer = require('autoprefixer');
var { env } = require('./envOpts.js');


gulp.task('pug', compilePug);
gulp.task('style', scss)
gulp.task('watch', watch)
gulp.task('copyAsset', copyFile)

// call cb if you didn't return something in task function
// in gulp , all function is async , no support to sync function

function watch(cb) {
    //const series = gulp.series(copyHTML,compilePug,scss);
    const template = gulp.series(compilePug);
    const style = gulp.series(scss)

    gulp.watch(env.template.watch, template);
    gulp.watch(env.style.watch, style);
    // watch second param need task function or function list generate by series() or parellel()
}

function copyFile(cb) {
    return gulp.src("./src/assets/img/*")
        .pipe(gulp.dest('./public/img/'))
}

function scss() {
    const plugins = [
        autoprefixer(),
    ];
    return gulp.src(env.style.src)
        .pipe($.sourcemaps.init())
        .pipe($.sass({ precision: 10 }).on('error', $.sass.logError))
        .pipe($.postcss(plugins))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(env.style.path))
    //   .pipe(
    //     browserSync.reload({
    //       stream: true,
    //     }),
    //   );
}


function compilePug(cb) {
    return gulp.src(env.template.src)
        //.pipe($.plumber())
        .pipe($.data(function (file) {
            return JSON.parse(fs.readFileSync('./model/data.json')); //fs.readFileSync('./examples/' + path.basename(file.path) + '.json')
        }))
        .pipe($.pug({
             pretty: false // [Deprecated]
            // true to compile no minify html  , other option : https://pugjs.org/api/reference.html && https://www.npmjs.com/package/gulp-pug
        }))
        .pipe(gulp.dest(env.template.path))

}