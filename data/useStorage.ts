import useSWR from 'swr';
import { storageFetcher } from '../utils';

export const useStorage = (key: string) => {
	const {
		data,
		error,
		revalidate,
		mutate,
		isValidating
	} = useSWR(`${key}`, storageFetcher);

	return {
		data,
		error,
		revalidate,
		mutate,
		isValidating,
	};
};