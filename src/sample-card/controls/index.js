import { BlockControls, InspectorControls } from '@wordpress/block-editor';

import TextAlignControl from './TextAlignControl';
import VariantControl from './VariantControl';
import ButtonControl from './ButtonControl';

// All controls of the Sample Card block: one toolbar control and two sidebar panels.
// Add new controls as separate files in this folder and render them here.
export default function Controls( { attributes, setAttributes } ) {
	return (
		<>
			<BlockControls group="block">
				<TextAlignControl
					value={ attributes.textAlign }
					onChange={ ( textAlign ) => setAttributes( { textAlign } ) }
				/>
			</BlockControls>
			<InspectorControls>
				<VariantControl
					value={ attributes.variant }
					onChange={ ( variant ) => setAttributes( { variant } ) }
				/>
				<ButtonControl
					showButton={ attributes.showButton }
					buttonUrl={ attributes.buttonUrl }
					onChange={ setAttributes }
				/>
			</InspectorControls>
		</>
	);
}
