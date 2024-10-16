import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    plugins: [resolve(), commonjs()]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
    plugins: [resolve(), commonjs()]
  }
];
