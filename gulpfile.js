var gulp = require('gulp');
var syncy = require('syncy');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

//Sync assets to public folder excluding SASS files
gulp.task('sync:assets', (done) => {
    syncy(['app/assets/**/*', '!app/assets/sass/**'], 'public', {
            ignoreInDest: '**/stylesheets/**',
            base: 'app/assets',
            updateAndDelete: true
        }).then(() => { 
            done();
    }).catch((err) => { done(err);})
});

//Sync lcc_frontend_toolkit to lcc_modules to be used for SASS partial compilation
gulp.task('sync:lcc_frontend_toolkit', (done) => {
    syncy(['node_modules/lcc_frontend_toolkit/**'], 'lcc_modules/lcc_frontend_toolkit', {
            base: 'node_modules/lcc_frontend_toolkit',
            updateAndDelete: true
        }).then(() => { 
            done();
    }).catch((err) => { done(err);})
});

//Sync lcc_templates_nunjucks to lcc_modules
gulp.task('sync:lcc_templates_nunjucks', (done) => {
    syncy(['node_modules/lcc_templates_nunjucks/**'], 'lcc_modules/lcc_templates_nunjucks', {
            base: 'node_modules/lcc_templates_nunjucks',
            update: true
        }).then(() => { 
            done();
    }).catch((err) => { done(err);})
})

//Compile SASS into the respective CSS and copy to public folder
gulp.task('sass', function () {
    return gulp.src('./app/assets/sass/**/*.scss', {base:'./app/assets/sass'})
      .pipe(sass({includePaths: ['./app/assets/sass',
            'lcc_modules/lcc_frontend_toolkit/stylesheets/']}).on('error', function (err) {
          notify({ title: 'SASS Task' }).write(err.line + ': ' + err.message);
          this.emit('end');
      }))
      .pipe(gulp.dest('./public/stylesheets/'))
});

gulp.task('watch', function () {
    gulp.watch('app/assets/sass/**/*.scss', ['sass']);
    gulp.watch(['app/assets/**/*', '!app/assets/sass/**'], ['sync:assets']);
})

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js',
        ignore: ['node_modules/**', 'app/assets/**', 'public/**'],
        ext: 'js json',
        env: { 'NODE_ENV': 'development' }
    })
});
 
gulp.task('generate-assets',  ['sync:assets', 'sync:lcc_frontend_toolkit', 'sync:lcc_templates_nunjucks', 'sass']);
gulp.task('default', ['generate-assets', 'watch', 'nodemon']);