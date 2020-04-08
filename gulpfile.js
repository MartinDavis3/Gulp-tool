// Requirements
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var ts = require( 'gulp-typescript' );
var tsProject = ts.createProject( 'tsconfig.json' );

// SASS compile
gulp.task( 'sass', function() {
    return gulp.src( 'src/scss/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gulp.dest( './css/' ) )
} );

// Typescript compile
gulp.task( 'tsc', function() {
    return tsProject.src()
        .pipe( tsProject() )
        .js.pipe( gulp.dest( './' ) );
} );

// Default (watch) task
gulp.task( 'default', function () {
    gulp.watch(
        [ 'src/scss/**/*.scss', 'src/ts/**/*.ts' ],
        gulp.series( [ 'sass', 'tsc' ] )
    );
} );
