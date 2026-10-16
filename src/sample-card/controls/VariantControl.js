import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

// Sidebar panel: color variant of the card.
export default function VariantControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Style', 'tailbase-blocks' ) }>
			<SelectControl
				__next40pxDefaultSize
				__nextHasNoMarginBottom
				label={ __( 'Variant', 'tailbase-blocks' ) }
				value={ value }
				options={ [
					{
						label: __( 'Primary', 'tailbase-blocks' ),
						value: 'primary',
					},
					{
						label: __( 'Accent', 'tailbase-blocks' ),
						value: 'accent',
					},
					{
						label: __( 'Neutral', 'tailbase-blocks' ),
						value: 'neutral',
					},
				] }
				onChange={ onChange }
			/>
		</PanelBody>
	);
}
