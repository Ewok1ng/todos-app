module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
		'@feature-sliced',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			arrowFunction: true
		}
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'import',
		'react-refresh'
	],
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src']
			},
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'comma-dangle': ['error', 'never'],
		'function-paren-newline': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-no-useless-fragment': 'error',
		'no-unused-expressions': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type'
				],
				'newlines-between': 'always-and-inside-groups'
			}
		]
	}
};
