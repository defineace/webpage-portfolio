const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('./public/scss/layer-4-page/*.scss')
        .pipe(sass())
        .pipe(dest('./public/css'))
}

function watchTask(){
    watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask);