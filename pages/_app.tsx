import App from 'next/app';
import { JssProvider } from 'react-jss';
import { Sheets, SheetsId } from '../custom/styles';

function MyApp({ Component, pageProps }) {
	return (
		<JssProvider registry={Sheets} generateId={SheetsId}>
			<Component {...pageProps} />
		</JssProvider>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
}


export default MyApp;