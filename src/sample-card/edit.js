import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import Controls from './controls';
import {
	ALIGNMENTS,
	BLOCK,
	BUTTON,
	BUTTON_VARIANTS,
	TEXT,
	TITLE,
	VARIANTS,
} from './classes';

export default function Edit( { attributes, setAttributes } ) {
	const { title, text, variant, textAlign, showButton, buttonLabel } =
		attributes;

	const blockProps = useBlockProps( {
		className: [ BLOCK, VARIANTS[ variant ], ALIGNMENTS[ textAlign ] ].join(
			' '
		),
	} );

	return (
		<>
			<Controls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...blockProps }>
				<RichText
					tagName="h3"
					className={ TITLE }
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					placeholder={ __( 'Card title…', 'tailbase-blocks' ) }
					allowedFormats={ [] }
				/>
				<RichText
					tagName="p"
					className={ TEXT }
					value={ text }
					onChange={ ( value ) => setAttributes( { text: value } ) }
					placeholder={ __( 'Card text…', 'tailbase-blocks' ) }
				/>
				{ showButton && (
					<RichText
						tagName="a"
						className={ [ BUTTON, BUTTON_VARIANTS[ variant ] ].join(
							' '
						) }
						value={ buttonLabel }
						onChange={ ( value ) =>
							setAttributes( { buttonLabel: value } )
						}
						placeholder={ __( 'Button label…', 'tailbase-blocks' ) }
						allowedFormats={ [] }
					/>
				) }
			</div>
		</>
	);
}
