import { Asset } from 'expo-asset';

export type Ressource = {
	path: string;
	source: 'web' | 'local';
	loaded?: Asset
}