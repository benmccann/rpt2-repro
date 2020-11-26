import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default [{
	input: 'index.ts',
	output: {
		file: 'index.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript()
	],
	external: require('module').builtinModules
}];
