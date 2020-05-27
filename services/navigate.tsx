import React, {
	createContext, useCallback, useState,
} from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

interface NavigateServiceProviderProps {
	children: JSX.Element;
}

interface NavigateServiceContext {
	setNavigator(navigation: NavigationContainerRef): void;
	to(screenName: string, params?: Record<string, any>): Promise<void>;
}

export const NavigateService = createContext<NavigateServiceContext>({
	to: (screenName, params = {}) => Promise.resolve(),
	setNavigator: (navigation) => {},
});

export const NavigateServiceProvider = ({
	children,
}: NavigateServiceProviderProps) => {
	const [navigator, setNavigator] = useState<NavigationContainerRef | null>(null)

	const to = useCallback(async (screenName, params = {}): Promise<void> => {
		if (navigator) {
			await navigator.navigate(screenName, params);
		}
	}, [navigator]);

	return (
		<NavigateService.Provider value={{
				setNavigator,

				to,
			}}>
			{children}
		</NavigateService.Provider>
	);
};
