import Constants from 'expo-constants';
import { devEnv } from './development';

const channel = Constants.manifest.releaseChannel || 'development';

interface SharedEnv {
	RELEASE_CHANNEL: string,
	OFFICIAL_TIMEZONE: string,
	SENTRY_DSN: string,
	SENTRY_ENTITY: string,
}

const shared = {
	RELEASE_CHANNEL: channel,
	OFFICIAL_TIMEZONE: 'Europe/Paris',
	SENTRY_DSN: 'https://9a09bcb197e943d1beaeb880581e2ef5@sentry.guivic.io//9',
	SENTRY_ENTITY: 'mobile',
};

const environments: Record<string, any> = {
	development: devEnv,
};

type environment = SharedEnv;

export const current: environment = { ...shared, ...environments[channel] };

export default current;

console.log(`Current release channel is : ${channel}`);
