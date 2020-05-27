import { createUseStyles } from 'react-jss';
import { Palette } from '../Palette';

export const globalStyles = createUseStyles({
	'@global': {
		body: {
			margin: 0,
			height: '100%',
		},
		html: {
			height: '100%',
		},
		'#__next': {
			height: '100%',
		},
	},
	container: {
		height: '100%',
		'background-color': Palette.background,
	},
}, { name: 'global-styles' });

export default globalStyles;
