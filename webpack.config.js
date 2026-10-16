const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		// One entry per block (found through block.json) ...
		...defaultConfig.entry(),
		// ... plus the single stylesheet with every Tailwind utility.
		'global-styles': path.resolve(
			__dirname,
			'src/styles/global-styles.css'
		),
	},
};
