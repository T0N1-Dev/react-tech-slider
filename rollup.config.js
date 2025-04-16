import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: {
    index: 'src/Slider.tsx',
    'all-in-one': 'index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
    },
  ],
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
    }),
    postcss({
      extract: 'index.css',
      minimize: true,
    }),
    terser(),
    copy({
      targets: [
        { src: 'dist/Slider.d.ts', dest: 'dist', rename: 'all-in-one.d.ts' }
      ]
    })
  ],
  external: ['react', 'react-dom'],
};
