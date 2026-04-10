import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
	coverageProvider: 'v8',
	coverageReporters: ['lcov', 'text'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/app/Lalo/**',
	],
	coverageThreshold: {
		global: {
			lines: 80,
			statements: 80,
			functions: 80,
			branches: 80,
		},
	},
};

export default createJestConfig(config);
