//Path Definitions
var publicPath = "public/";
var modulesPath = publicPath + "js/modules/"

//Gulp Modules
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
 

//APP FILES TASKS
gulp.task('concatAppJS',function(){
    //Concat JS files
  return gulp.src([
    /*************************************/
    //Angular Modules Declaration
    modulesPath + 'store/store.js',

    /*************************************/
    //Angular Modules Files
    modulesPath + '**/*.js'
  ])
  .pipe(concat('js/app.js'))
  .pipe(gulp.dest(publicPath));
});

gulp.task('minifyAppJS', ['concatAppJS'], function(){
  gulp.src(publicPath + 'js/app.js')
  //./pipe(uglify())
  .pipe(rename({
      extname: '.min.js'
  }))
  .pipe(gulp.dest(publicPath + 'js'));
});


//VENDOR FILES TASKS
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
  ])
  .pipe(concat('js/vendor.js'))
  .pipe(gulp.dest(publicPath));
});


gulp.task('minifyVendorJS', ['concatVendorJS'], function(){
  gulp.src(publicPath + 'js/vendor.js')
  .pipe(uglify())
  .pipe(rename({
      extname: '.min.js'
  }))
  .pipe(gulp.dest(publicPath + 'js'));
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
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(publicPath + 'css'));

});

//LESS TASKS
gulp.task('concatLESS', function(){
  //Concat LESS files
  return gulp.src([
    /*************************************/
    //App LESS
    publicPath + 'css/style.less'

    /*************************************/
    //Modules LESS
    //modulesPath + '**/*.less'
    ])
  .pipe(concat('css/app.less'))
  .pipe(gulp.dest(publicPath));
});

gulp.task('less', ['concatLESS'], function () {
  return gulp.src(publicPath + 'css/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(publicPath + 'css'));
});


gulp.task('minifyCSS', ['less', 'concatLESS'], function(){
    gulp.src(publicPath + 'css/app.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(publicPath + 'css'));
});



//WATCH TASKS
gulp.task('watch', function() {
  //Watch JS Files
  gulp.watch( modulesPath + '**/*.js', ['minifyAppJS']);
  //Watch Less Files
  gulp.watch( publicPath + 'css/style.less', ['minifyCSS']);
});

gulp.task('default', [
    'minifyVendorJS',
    'minifyAppJS',
    'minifyVendorCSS',
    'minifyCSS',
    'watch'
    ],
    function() {
      console.log('Success');
    }
);  