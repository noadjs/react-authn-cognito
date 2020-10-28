import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    external: ['aws-amplify'],
    input: 'src/index.js',
    output: {
        file: 'lib/index.js',
        format: 'es'
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};
