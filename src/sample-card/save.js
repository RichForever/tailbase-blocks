import { RichText, useBlockProps } from '@wordpress/block-editor';

import {
	ALIGNMENTS,
	BLOCK,
	BUTTON,
	BUTTON_VARIANTS,
	TEXT,
	TITLE,
	VARIANTS,
} from './classes';

export default function save( { attributes } ) {
	const {
		title,
		text,
		variant,
		textAlign,
		showButton,
		buttonLabel,
		buttonUrl,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: [ BLOCK, VARIANTS[ variant ], ALIGNMENTS[ textAlign ] ].join(
			' '
		),
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="h3"
				className={ TITLE }
				value={ title }
			/>
			<RichText.Content tagName="p" className={ TEXT } value={ text } />
			{ showButton && (
				<RichText.Content
					tagName="a"
					className={ [ BUTTON, BUTTON_VARIANTS[ variant ] ].join(
						' '
					) }
					href={ buttonUrl }
					value={ buttonLabel }
				/>
			) }
		</div>
	);
}
