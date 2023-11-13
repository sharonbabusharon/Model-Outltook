import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';



global.WEB_APP_LISTENING_PORT = process.env.PORT || 28000;

const is_in_production = process.env.IS_IN_PRODUCTION === '1';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: global.WEB_APP_LISTENING_PORT,
		cors: {
			origin: '*'
		},
		hmr: !is_in_production,
		watch: {
			awaitWriteFinish: {
				stabilityThreshold: 1000,
				pollInterval: 250
			}
		}
	},
});
