import { AsyncStorage } from 'react-native';
import { http } from './axios';

export const API_FETCH_AUTH_KEY = 'subscribeToken';

export async function apiFetcher<T>(url: string): Promise<T> {
	const { data } = await http.get(url);

	return data;
};

export async function apiAuthFetcher<T>(url: string): Promise<T> {
	const token = await AsyncStorage.getItem(API_FETCH_AUTH_KEY);

	const { data } = await http.get(url, {
		headers: {
			Authorization: `Bearer ${token}`
		},
	});

	return data;
};

export function storageFetcher(key: string) {
	return AsyncStorage.getItem(key);
}