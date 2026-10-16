import { AlignmentControl } from '@wordpress/block-editor';

// Toolbar control: text (and button) alignment of the card.
export default function TextAlignControl( { value, onChange } ) {
	return <AlignmentControl value={ value } onChange={ onChange } />;
}
