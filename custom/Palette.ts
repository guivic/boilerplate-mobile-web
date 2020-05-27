/**
 * @name Palette
 * @description Generic colors from designers
 */
export const Palette = {

	/**
	* @name Colors
	* @description Primary, secondary, and primary color variants
	*/
	primary: '#BB86FC',
	primaryVariant: '#3700B3',
	secondary: '#03DAC6',
	tertiary: '#f6b93b',

	/**
	* @name Surfaces
	* @description backgrounds and components
	*/
	background: '#121212',
	surface: '#121212',

	/**
	* @name States
	* @description such as error and success states
	*/
	error: '#CF6679',
	success: '#48c774',

	/**
	* @name Content
	* @description typography and iconography
	*/
	onPrimary: '#000000',
	onSecondary: '#000000',
	onBackground: '#FFFFFF',
	onSurface: '#FFFFFF',
	onError: '#000000',

	/**
	 * @name withOpacity
	 * @description add opacity to hexcolor
	 * @param {string} hexColor - the hexColor to convert
	 * @param {float} opacity - the opacity to apply
	 */
	withOpacity(hexColor: string, opacity: number): string {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

		if (result) {
			return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`;
		}

		return '';
	},

};