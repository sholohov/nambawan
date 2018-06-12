const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const handlebars = require('gulp-compile-handlebars');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');

const path = {
	res: './res/**/*.*',
	handlebars: './src/**/*.hbs',
	scripts: './src/js/**/*.js',
	libs: './lib/**/*.js',
	styles: './src/css/**/*.less',
};

const entryFile = './src/js/index.js';

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('res', function() {
	return gulp
		.src(path.res)
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return browserify({
			paths: [path.libs, path.scripts],
			entries: entryFile,
			debug: true,
			transform: [
				[
					babelify,
					{
						presets: ['es2015'],
						plugins: ['transform-class-properties']
					}
				]
			]
		})
		.transform(babelify)
		.bundle()
		.on('error', function(error) {
			gutil.log(gutil.colors.red('[Build Error]', error.message));
			//browserSync.notify(error.message, 3000);
			this.emit('end');
		})
		.pipe(source('script.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(browserSync.stream());
});

gulp.task('styles', function() {
	return gulp
		.src(path.styles)
		.pipe(less())
		.pipe(concat('style.css'))
		.pipe(
			autoprefixer({
				browsers: ['last 20 versions']
			})
		)
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream())
		.on('error', console.error.bind(console));
});

gulp.task('handlebars', function() {
	let templateData = {
			firstName: 'Kaanon'
		},
		options = {
			ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
			partials: {
				// footer: '<footer>the end</footer>'
			},
			batch: ['./src/partials'],
			helpers: {
				for (n, block) {
					var accum = '',
						i = -1;
					while (++i < n) {
						accum += block.fn(i);
					}
					return accum;
				}
			}
		};

	return gulp
		.src('src/index.hbs')
		.pipe(handlebars(templateData, options))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream());
});

gulp.task('server', function(done) {
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});
	done();
});

gulp.task('watch', function() {
	gulp.watch(path.res, gulp.series('res'));
	gulp.watch(path.styles, gulp.series('styles'));
	gulp.watch(path.scripts, gulp.series('scripts'));
	gulp.watch(path.handlebars, gulp.series('handlebars'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts', 'res'), 'handlebars'));

gulp.task('debug', gulp.series('default', 'server', 'watch'));