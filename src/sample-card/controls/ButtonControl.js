import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

// Sidebar panel: show or hide the button and set its link.
// The label is edited directly on the canvas.
export default function ButtonControl( { showButton, buttonUrl, onChange } ) {
	return (
		<PanelBody title={ __( 'Button', 'tailbase-blocks' ) }>
			<ToggleControl
				__nextHasNoMarginBottom
				label={ __( 'Show button', 'tailbase-blocks' ) }
				checked={ showButton }
				onChange={ ( value ) => onChange( { showButton: value } ) }
			/>
			{ showButton && (
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					type="url"
					label={ __( 'Button link', 'tailbase-blocks' ) }
					value={ buttonUrl || '' }
					onChange={ ( value ) => onChange( { buttonUrl: value } ) }
				/>
			) }
		</PanelBody>
	);
}
