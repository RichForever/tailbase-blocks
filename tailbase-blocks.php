<?php
/**
 * Plugin Name:       Tailbase Blocks
 * Description:       Gutenberg blocks for the Tailbase theme. Ships its own prefixed Tailwind CSS build, so it never conflicts with the theme's styles.
 * Version:           1.9.2
 * Requires at least: 6.5
 * Requires PHP:      8.0
 * Author:            MM
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tailbase-blocks
 *
 * @package TailbaseBlocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers every block found in build/<block>/block.json.
 */
function tailbase_blocks_register_blocks() {
	foreach ( glob( __DIR__ . '/build/*/block.json' ) as $block_json ) {
		register_block_type( dirname( $block_json ) );
	}
}
add_action( 'init', 'tailbase_blocks_register_blocks' );

/**
 * Adds the "Tailbase" block category (first in the inserter).
 *
 * @param array $categories Existing block categories.
 * @return array
 */
function tailbase_blocks_register_category( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'tailbase',
				'title' => __( 'Tailbase', 'tailbase-blocks' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'tailbase_blocks_register_category' );
