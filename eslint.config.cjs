const wpScriptsConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...wpScriptsConfig,
	{
		rules: {
			// @wordpress/* packages are provided by WordPress at runtime (webpack
			// externals), so they are not installed in node_modules.
			'import/no-unresolved': [ 'error', { ignore: [ '^@wordpress/' ] } ],
			'import/no-extraneous-dependencies': 'off',
			// Components are documented with a plain comment, not full JSDoc.
			'jsdoc/require-param': 'off',
			'jsdoc/require-param-type': 'off',
			'@wordpress/i18n-text-domain': [
				'error',
				{ allowedTextDomain: 'tailbase-blocks' },
			],
		},
	},
];
