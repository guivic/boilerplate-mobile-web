import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FlexBox, Palette } from '../custom';

const WelcomeStyles = StyleSheet.create({
	container: {
		...FlexBox.flex(1),
		...FlexBox.row,
		...FlexBox.alignItemsCenter,
		...FlexBox.justifyContentCenter,
		backgroundColor: Palette.background,
		paddingHorizontal: 30,
	},
	box: {
		...FlexBox.flex(0.5),
		...FlexBox.column,
		...FlexBox.alignItemsCenter,
		...FlexBox.justifyContentCenter,
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