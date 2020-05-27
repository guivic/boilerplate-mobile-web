import React, { useContext } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { ImageBackground, Dimensions } from 'react-native';

import { useSetup } from '../hooks';
import { NavigateService } from '../services';
import { prepareAssets } from '../custom';

interface SplashLoadingProps {
	navigation: NavigationContainerRef;
}

const { height, width } = Dimensions.get('window');

export const SplashLoading = ({
	navigation,
}: SplashLoadingProps) => {
	const { to, setNavigator } = useContext(NavigateService);

	const initData = async () => {
		setNavigator(navigation)
		await prepareAssets();
	};

	const isInitialSetupReady = useSetup(initData);

	useSetup(async () => {
		await to('Welcome');
	}, isInitialSetupReady);

	return (
		<ImageBackground
			source={require('../assets/splash.png')}
			style={{
				width,
				height,
			}}
		/>
	);
};

export default SplashLoading;
