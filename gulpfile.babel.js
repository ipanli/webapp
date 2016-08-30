/**
 * webapp
 * By Julian
 * @ zanjser@163.com
 * 2016年06月12日16:44:43
 */
import pkg          from './package.json';
import conf         from './config.json';
import gulp         from 'gulp';
import sass         from 'gulp-sass';
import concat       from 'gulp-concat';
import minifycss    from 'gulp-minify-css';
import uglify       from 'gulp-uglify';
import rename       from 'gulp-rename';
import notify       from 'gulp-notify';
import imagemin     from 'gulp-imagemin';
import header       from 'gulp-header';
import autoprefixer from 'gulp-autoprefixer';
import px2rem       from 'gulp-pxrem';



const day = '20160809', mincss = 'app.css', minjs = 'app.js',desc = '拼邮分享H5';


const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    `(c) ${new Date()} <%= pkg.author %> |`,
    ' <%= pkg.homepage %> ',
    ' <%= pkg.description %>',
  ' */',
  '\n'
].join('');

//编译Sass，Autoprefix及缩小化
gulp.task('sass', () => gulp.src(`./${day}/src/scss/main.scss`)
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest(`./${day}/.tmp/css`))
    .pipe(autoprefixer({
			browsers: ['> 1%', 'IE 8','Firefox >= 20'],
			cascade: false
	 }))
    .pipe(px2rem())
    .pipe(rename(mincss))
    .pipe(gulp.dest(`./${day}/.tmp/`))
    .pipe(minifycss())
    
    .pipe(header(banner, { pkg }))
    .pipe(gulp.dest(`./${day}/build/css/`))
    .pipe(reload({stream: true}))
    .pipe(notify({ message: 'Styles  task complete' })));



gulp.task('scripts',() => gulp.src(`./${day}/src/js/*.js`)
    .pipe(concat(minjs))
    .pipe(gulp.dest(`./${day}/.tmp/js`))
    .pipe(uglify())
    .pipe(header(banner, { pkg }))
    .pipe(gulp.dest(`./${day}/build/js/`))
    .pipe(reload({stream: true}))
    .pipe(notify({ message: 'Scripts task complete' })));


gulp.task('images', () => {
	return gulp.src(`./${day}/src/images/*`)
		.pipe(imagemin())
		.pipe(gulp.dest(`./${day}/build/images`));
});


gulp.task('html',() => {
    gulp.src(`./${day}/*.html`)
        .pipe(reload({stream: true}))
});

    // 静态服务器 + 监听 scss/html 文件
gulp.task('dev', ['sass','scripts'], () => {

    browserSync.init({
        server: `./${day}/`
    });

    // 看守.scss 档
    gulp.watch(`./${day}/src/scss/*.scss`, ['sass']);
    gulp.watch('./home/scss/*.scss', ['home']);
    // 看守所有.js档
    gulp.watch(`./${day}/*.js`, ['scripts']);
    gulp.watch(`./${day}/src/js/*.js`, ['html','scripts']);
    gulp.watch(`./${day}/src/images/*`, ['images']);

    // 看守所有.html
    gulp.watch(`./${day}/*.html`).on('change', reload);;
    gulp.watch('./*.html').on('change', reload);;

});





gulp.task('default', ['dev']);