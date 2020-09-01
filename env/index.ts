import Constants from 'expo-constants';
import devEnv from './development';
import stagingEnv from './staging';
import productionEnv from './production';

const channel = Constants.manifest.releaseChannel || process.env.EXPO_RELEASE_CHANNEL || 'development';

interface SharedEnv {
	RELEASE_CHANNEL: string,
	OFFICIAL_TIMEZONE: string,
	SENTRY_DSN: string,
	SENTRY_ENTITY: 'mobile' | 'web' | 'unknown',
}

interface ScopedEnv {
	API_URL: string;
}

const shared = {
	RELEASE_CHANNEL: channel,
	OFFICIAL_TIMEZONE: 'Europe/Paris',
	SENTRY_DSN: 'XXXXXXXX',
	SENTRY_ENTITY: process.env.SENTRY_ENTITY || 'unknown',
};

const environments: Record<string, any> = {
	development: devEnv,
	staging: stagingEnv,
	production: productionEnv,
};

export const current: SharedEnv & ScopedEnv = { ...shared, ...environments[channel] };

export default current;

console.log(`Current release channel is : ${channel}`);
