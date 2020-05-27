/**
 * @name FlexBox
 * @description Generic Flexbox styling
 */
export const FlexBox: Record<string, any> = {
	row: {
		flexDirection: 'row',
	},
	column: {
		flexDirection: 'column',
	},

	alignItemsStart: {
		alignItems: 'flex-start',
	},
	alignItemsEnd: {
		alignItems: 'flex-end',
	},
	alignItemsCenter: {
		alignItems: 'center',
	},

	justifyContentStart: {
		justifyContent: 'flex-start',
	},
	justifyContentEnd: {
		justifyContent: 'flex-end',
	},
	justifyContentCenter: {
		justifyContent: 'center',
	},
	justifyContentSpaceBetween: {
		justifyContent: 'space-between',
	},

	/**
	 * @name flex
	 * @description return a flex size
	 * @param {number} size - the flex size you want
	 */
	flex: (size: number): Record<string, any> => {
		return { flex: size };
	},
};