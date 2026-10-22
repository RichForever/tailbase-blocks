const wpConfig = require( '@wordpress/prettier-config' );

module.exports = {
	...wpConfig,
	plugins: [ 'prettier-plugin-tailwindcss' ],
	// Entry stylesheet carrying the `tbb` prefix, so classes are sorted correctly.
	tailwindStylesheet: './src/styles/tailwind.css',
	// Class strings in JS constants are plain strings, not attributes.
	tailwindFunctions: [ 'classnames', 'clsx' ],
};
