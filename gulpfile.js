var gulp = require('gulp'),
    asciidoctor = require('gulp-asciidoctor'),
    connect = require('gulp-connect');

gulp.task('adoc', function() {
  gulp.src("docs/*.adoc")
    .pipe(asciidoctor({
      safe: 'unsafe',
      attributes: [
        'stylesdir=resources',
        'source-highlighter=highlightjs',
        'highlightjsdir=resources',
        'hightlightjs-theme=solarized-light',
        'icons=font',
        'linkcss'
      ]
      }))
    .pipe(gulp.dest('docs'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8000
    });
});

gulp.task('watch', function() {
  gulp.watch(['docs/*.adoc', 'Gemfile', 'package.json', 'gulpfile.js'], ['adoc']);
});
