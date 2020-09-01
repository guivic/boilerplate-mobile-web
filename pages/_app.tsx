import App from 'next/app';

function MyApp({ Component, pageProps }: any) {
	return (
		<Component {...pageProps} />
	);
}

MyApp.getInitialProps = async (appContext: any) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;