import { Ressource } from '../@types';

/**
 * @name Assets
 * @description Generic fonts from designers
 */
export const Assets: Record<string, Ressource> = {
	undraw_investing: {
		path: '../assets/svg/investing.svg',
		source: 'local',
	},
};

/**
 * @name prepareAssets
 * @description Prepare all assets by downloading them
 */
export const prepareAssets = (): Promise<void[]> => {
	return Promise.all(Object.keys(Assets).map(async (key) => {
		if (Assets[key].source === 'local') {
		}
		// else {
		// 	Assets[key].loaded = await AssetHelper.downloadAsync(Assets[key].path);
		// }
	}));
};