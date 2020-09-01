import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Palette } from '../custom';

const WelcomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Palette.background,
		paddingHorizontal: 30,
	},
	box: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Palette.onBackground,
	},
});

export const Welcome = () => {
	return (
		<View style={WelcomeStyles.container}>
			<View style={WelcomeStyles.box}>
				<Text>Hello world</Text>
			</View>
		</View>
	);
};

export default Welcome;