//Path Definitions
var modulesPath = "modules/"
var publicPath = "public/";

//Gulp Modules
var gulp = require('gulp');
var uglyfly = require('gulp-uglyfly');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
 
//JAVASCRIPT TASKS
gulp.task('concatVendorJS',function(){
    //Concat JS files
  return gulp.src([
    /*************************************/
    //node_modules
    //Jquery
    "node_modules/jquery/dist/jquery.js",
    //Bootstrap
    "node_modules/bootstrap/dist/js/bootstrap.js",
    //Angular
    "node_modules/angular/angular.js"

    //UI-router
    //"bower_components/angular-ui-router/release/angular-ui-router.js",

    /*************************************/
    //Angular App
    //basePath + 'app.js',

    /*************************************/
    //Angular Modules
    //modulesPath + '**/*.js'
    ])
  .pipe(concat('js/vendor.js'))
  .pipe(gulp.dest(publicPath));
});

gulp.task('minifyVendorJS', ['concatVendorJS'], function(){
  gulp.src(publicPath + 'js/vendor.js')
  .pipe(uglyfly())
  .pipe(gulp.dest(publicPath + 'js/minified'));
});

//CSS TASKS
gulp.task('concatVendorCSS', function(){
  //Concat LESS files
  return gulp.src([
    //node_modules
    "node_modules/bootstrap/dist/css/bootstrap.css"
    ])
  .pipe(concat('css/vendor.css'))
  .pipe(gulp.dest(publicPath));
});

gulp.task('minifyVendorCSS', ['concatVendorCSS'], function(){
    gulp.src(publicPath + 'css/vendor.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(publicPath + 'css/minified'));
});

//LESS TASKS
gulp.task('concatLESS', function(){
  //Concat LESS files
  return gulp.src([
    /*************************************/
    //App LESS
    basePath + 'app.less',

    /*************************************/
    //Modules LESS
    modulesPath + '**/*.less'
    ])
  .pipe(concat('project/all.less'))
  .pipe(gulp.dest(libPath));
});

gulp.task('less', ['concatLESS'], function () {
  return gulp.src(libPath + 'project/all.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(libPath + 'project'));
});


gulp.task('minifyCSS', ['less', 'concatLESS'], function(){
    gulp.src(libPath + 'project/all.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(libPath + 'minified'));
});

//WATCH TASKS
gulp.task('watch', function() {
  //Watch JS Files
  gulp.watch( modulesPath + '**/*.js', ['minifyJS']);
  gulp.watch( basePath + 'app.js', ['minifyJS']);
  //Watch Less Files
  gulp.watch( modulesPath + '**/*.less', ['minifyCSS']);
  gulp.watch( basePath + 'app.less', ['minifyCSS']);
});

gulp.task('default', [
    'minifyVendorJS',
    'minifyVendorCSS'
   // 'minifyCSS',
   // 'watch',
    ],
    function() {
      console.log('Success');
    }
);  