//载入插件
var gulp = require('gulp'),
sftp = require('gulp-sftp');


//定义部署路径
var dist = './dist/**/*.*';


gulp.task('sftp', function() {
  var config = require('./sftpConfig')
  return gulp.src(dist)
    .pipe(sftp(config))
});


gulp.task('default', ['sftp']);



