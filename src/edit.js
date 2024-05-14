/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes }) {
	const { post_title, post_date, post_author, post_category, post_description } = attributes;

	return (
		<div { ...useBlockProps() }>
			<figure className="epfg_post__featured-img">
				<img src="https://placehold.co/600x600" alt="" />
			</figure>

			<div className="epfg_post--contents">
				<h2 className="epfg_post__title">{ post_title }</h2>

				<ul className="epfg_post__meta">
					<li><strong>{ __('Date:', 'embed-posts-for-gutenberg') }</strong> { post_date }</li>
					<li><strong>{ __('Author:', 'embed-posts-for-gutenberg') }</strong> { post_author }</li>
					<li><strong>{ __('Category:', 'embed-posts-for-gutenberg') }</strong> { post_category }</li>
				</ul>

				<div className="epfg_post__desc">
					<p>{ post_description }</p>
				</div>
			</div>

			<a href="https://placehold.co/600x600" target="_blank" className="epfg_post__link"></a>
		</div>
	);
}
