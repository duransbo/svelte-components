import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		{
			name: 'demo',
			enforce: 'pre',
			transform: (code, id) => {
				const rgx = /<Stage[^>]*>(?<source>.*)<\/Stage>/gs

				if (id.endsWith('.stage.svelte')) {
					const source = rgx.exec(code)?.groups?.source?.trim()
					const stringToInsert = `<p>The source code of this story is:<br />{"${source}"}</p>`;
					const newCode = code.replace('</Stage>', `\n${stringToInsert}\n</Stage>`);

					return { code: newCode };
				}

				return { code };
			}
		},
		sveltekit()
	],
	optimizeDeps: {
		exclude: ['svelte-stage']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
