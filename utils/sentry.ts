import * as Sentry from '@sentry/browser';
import environment from '../env';

export const initSentry = () => {
	if (environment.SENTRY_DSN) {
		Sentry.init({
			dsn: environment.SENTRY_DSN,
			debug: true,
		});
		console.log('Sentry has been initialized');

		Sentry.configureScope((scope: any) => {
			scope.setTag('environment', environment.RELEASE_CHANNEL);
			scope.setTag('entity', environment.SENTRY_ENTITY);
		});
	}
};

export const captureException = (error: Error, extras?: Record<string, any>) => {
	if (environment.SENTRY_DSN) {
		Sentry.withScope((scope: any) => {
			if (extras) {
				Object.keys(extras).forEach((key) => {
					scope.setExtra(key, extras[key]);
				});
			}

			if (error.message) {
				scope.setFingerprint([error.message]);
			}

			Sentry.captureException(error);
		});

		if (process.env.NODE_ENV !== 'production') {
			// @ts-ignore
			console.log(error && error.request ? error.request.responseURL : error);
			// @ts-ignore
			console.log(error && error.response ? error.response.data : error);
		}
	}
};
