import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashLoading } from '../screens/SplashLoading';
import { Welcome } from '../screens/Welcome';

const Stack = createStackNavigator();

export const Navigation = () => (
	<Stack.Navigator initialRouteName="SplashLoading" headerMode="none">
		<Stack.Screen name="SplashLoading" component={SplashLoading} />

		<Stack.Screen name="Welcome" component={Welcome} />
	</Stack.Navigator>
);

export default Navigation;
