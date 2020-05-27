import { useState } from 'react';

export const useSetup = (
	callback: Function,
	wait?: boolean,
) => {
	const [isAlreadyRunned, setIsAlreadyRunned] = useState(false);
	const [isDone, setIsDone] = useState(false);

	if (wait === undefined || wait) {
		if (!isAlreadyRunned) {
			setIsAlreadyRunned(true);
			callback().then(() => setIsDone(true));
		}
	}

	return isDone;
};

export default useSetup;
