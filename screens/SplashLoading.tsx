import React, { useContext } from 'react';
import { AppLoading, SplashScreen } from 'expo';
import { NavigationContainerRef } from '@react-navigation/native';

import { NavigateService } from '../services';
import { prepareAssets } from '../custom';

interface SplashLoadingProps {
	navigation: NavigationContainerRef;
}

export const SplashLoading = ({
	navigation,
}: SplashLoadingProps) => {
	const { to, setNavigator } = useContext(NavigateService);

	return (
		<AppLoading
			startAsync={async () => {
				setNavigator(navigation)
				await prepareAssets();
				return Promise.resolve();
			}}
			onFinish={() => {
				SplashScreen.hide();
				to('Welcome');
			}}
			onError={console.warn}
		/>
	);
};

export default SplashLoading;
