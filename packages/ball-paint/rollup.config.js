import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'esm',
	},
	plugins: [
		livereload({ watch: 'dist' }),
		serve({
			open: true,
			contentBase: 'dist',
			host: 'localhost',
			port: 10001,
		}),
	],
};
