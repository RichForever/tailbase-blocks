/**
 * Tailwind classes used by this block.
 *
 * Tailwind finds classes by scanning source files, so always write them as complete
 * strings (never build them like `'tbb:bg-' + color`). Every class has the `tbb:` prefix.
 */

export const BLOCK = 'tbb:flex tbb:flex-col tbb:gap-4 tbb:p-8';

export const TITLE = 'tbb:m-0 tbb:text-3xl tbb:leading-tight';

export const TEXT = 'tbb:m-0 tbb:text-base tbb:leading-relaxed';

export const BUTTON =
	'tbb:inline-block tbb:px-5 tbb:py-2.5 tbb:font-semibold tbb:no-underline tbb:transition-colors';

export const VARIANTS = {
	primary: 'tbb:bg-primary tbb:text-primary-contrast',
	accent: 'tbb:bg-accent tbb:text-accent-contrast',
	neutral: 'tbb:bg-neutral tbb:text-neutral-contrast',
};

export const BUTTON_VARIANTS = {
	primary: 'tbb:bg-accent tbb:text-accent-contrast tbb:hover:bg-accent-hover',
	accent: 'tbb:bg-primary tbb:text-primary-contrast tbb:hover:bg-primary-hover',
	neutral:
		'tbb:bg-primary tbb:text-primary-contrast tbb:hover:bg-primary-hover',
};

export const ALIGNMENTS = {
	left: 'tbb:items-start tbb:text-left',
	center: 'tbb:items-center tbb:text-center',
	right: 'tbb:items-end tbb:text-right',
};
