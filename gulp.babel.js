/**
 * Created by santosh on 2/25/17.
 */
var gulp = require('gulp');
var pump = require('pump');
var babel = require('gulp-babel');


// task handle exception
gulp.task('gulp-babel-he', function(cb) {
    pump([gulp.src('src/**/*.js'),
        babel({
            presets: ['es2015'],
            "sourceMaps": "both"
        }),
        gulp.dest('dist')
    ], cb);
});


gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['gulp-babel-he'])
});


gulp.task('default', ['gulp-babel-he', 'watch']);