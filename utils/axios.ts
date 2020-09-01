import axios from 'axios';
import environment from '../env';
import { captureException } from './sentry';

export const http = axios.create({
	baseURL: environment.API_URL,
	timeout: 100000,
});

http.interceptors.response.use(
	(response) => response,
	(error) => {
		captureException(error);
		return Promise.reject(error);
	},
);