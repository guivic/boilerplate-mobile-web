import React, { useEffect } from 'react';
import { ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

export const SplashLoading = () => {
	const navigation = useNavigation();

	const initData = async () => {
		await navigation.navigate('Welcome');
	};

	useEffect(initData, []);

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
