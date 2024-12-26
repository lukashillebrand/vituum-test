import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';
import { resolve } from 'path';

export default {
    base: '',
	server: {
		port: 8080,
	},
    build: {
        emptyOutDir: true,
        outDir: 'dist/',
    },
	plugins: [
        vituum({}),
        twig({
            root: './src'
        })
    ]
}
