import path from "path";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [sveltekit(),
		Icons({
			compiler: 'svelte',
		})
	],
	
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	},
});
