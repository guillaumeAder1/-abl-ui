import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';
const input = './src/index.js';
const name = packageJSON.libName;
const path = 'lib/';
const bundle = 'index';
const minified = process.env.BUILD === 'production' ? '.min' : '';

export default [
	{
		input,
		output: [
			{
				file: `${path}/${bundle}.js`,
				format: 'cjs',
			},
			{
				file: `${path}/${bundle}.cjs${minified}.js`,
				format: 'cjs',
			},
			{
				file: `${path}/${bundle}.esm${minified}.js`,
				format: 'esm',
			},
			{
				file: `${path}/${bundle}.umd${minified}.js`,
				format: 'umd',
				name,
			},
		],
		plugins: [
			babel({
				exclude: /node_modules/,
			}),
			external(),
			resolve(),
			commonjs(),
			process.env.BUILD === 'production' ? terser() : [],
		],
	},
];
