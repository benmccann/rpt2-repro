import * as path from 'path';
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
		typescript({
// Uncomment line below to get a different error message
//			cwd: path.resolve(process.cwd(), '..')
		})
	],
	external: require('module').builtinModules
}];

