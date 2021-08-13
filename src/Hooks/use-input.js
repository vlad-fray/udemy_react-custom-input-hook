import { useState } from 'react';

const useInput = (validateValue) => {
	const [inputValue, setInputValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const isValid = validateValue(inputValue);
	const hasError = !isValid && isTouched;

	const onInputChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const onInputBlurHandler = () => {
		setIsTouched(true);
	};

	const onInputFocusHandler = () => {
		setIsTouched(false);
	};

	const reset = () => {
		setInputValue('');
		setIsTouched(false);
	};

	return {
		value: inputValue,
		isValid,
		hasError,
		onInputChangeHandler,
		onInputBlurHandler,
		onInputFocusHandler,
		reset,
	};
};

export default useInput;
