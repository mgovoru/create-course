// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest.setup.ts',
		exclude: [
			'node_modules',
			'.next',
			'coverage',
			'src/tests/**',
			'src/tests/somefile.spec.ts'],
		coverage: {
			all: true,
			include: ['src/**/*.{ts,tsx}'],
			exclude: ['node_modules', 'dist'],
		},
	}
})
