import useInput from '../Hooks/use-input';

const SimpleForm = (props) => {
	const {
		value: inputName,
		isValid: isInputNameValid,
		hasError: hasInputNameError,
		onInputChangeHandler: onInputNameChangeHandler,
		onInputBlurHandler: onInputNameBlurHandler,
		onInputFocusHandler: onInputNameFocusHandler,
		reset: resetInputName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: inputEmail,
		isValid: isInputEmailValid,
		hasError: hasInputEmailError,
		onInputChangeHandler: onInputEmailChangeHandler,
		onInputBlurHandler: onInputEmailBlurHandler,
		onInputFocusHandler: onInputEmailFocusHandler,
		reset: resetInputEmail,
	} = useInput((value) => value.trim() !== '');

	let isFormValid = false;

	if (isInputNameValid && isInputEmailValid) {
		isFormValid = true;
	}

	const onFormSubmitHandler = (e) => {
		e.preventDefault();

		if (!isInputNameValid || !isInputEmailValid) return;

		resetInputName();
		resetInputEmail();
	};

	const inputNameClasses = !hasInputNameError
		? 'form-control'
		: 'form-control invalid';

	const inputEmailClasses = !hasInputEmailError
		? 'form-control'
		: 'form-control invalid';

	return (
		<form onSubmit={onFormSubmitHandler}>
			<div className={inputNameClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					value={inputName}
					onChange={onInputNameChangeHandler}
					onBlur={onInputNameBlurHandler}
					onFocus={onInputNameFocusHandler}
					type='text'
					id='name'
				/>
				{hasInputNameError ? (
					<p className='error-text'>Name must be not empty</p>
				) : (
					''
				)}
			</div>
			<div className={inputEmailClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					value={inputEmail}
					onChange={onInputEmailChangeHandler}
					onBlur={onInputEmailBlurHandler}
					onFocus={onInputEmailFocusHandler}
					type='email'
					id='email'
				/>
				{hasInputEmailError ? (
					<p className='error-text'>Email must be not empty</p>
				) : (
					''
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleForm;

// The alternative way without custom hook

/* const inputReducer = (state, action) => {
	if (action.type === 'CHANGE-VALUE') {
		return {
			...state,
			value: action.value,
		};
	}
	if (action.type === 'SET-IS-TOUCHED') {
		return {
			...state,
			isTouched: action.isTouched,
		};
	}
	return state;
};

const SimpleForm = (props) => {
	const [inputNameState, dispatchInputNameState] = useReducer(
		inputReducer,
		{ value: '', isTouched: false }
	);
	const [inputEmailState, dispatchInputEmailState] = useReducer(
		inputReducer,
		{ value: '', isTouched: false }
	);
	const [isFormValid, setIsFormValid] = useState(false);

	const isValidName = checkIsValid(inputNameState.value);
	const isValidEmail = checkIsValid(inputEmailState.value);
	const inputNameIsInvalid = !isValidName && inputNameState.isTouched;
	const inputEmailIsUnvalid =
		!isValidEmail && inputEmailState.isTouched;

	useEffect(() => {
		if (isValidName && isValidEmail) setIsFormValid(true);
		else setIsFormValid(false);
	}, [isValidName, isValidEmail]);

	const onChangeInputHandler = (e) => {
		const actionCreator = {
			type: 'CHANGE-VALUE',
			value: e.target.value,
		};
		if (e.target.id === 'name') {
			dispatchInputNameState(actionCreator);
		}
		if (e.target.id === 'email') {
			dispatchInputEmailState(actionCreator);
		}
	};

	const onBlurInputHandler = (e) => {
		const actionCreator = {
			type: 'SET-IS-TOUCHED',
			isTouched: true,
		};
		if (e.target.id === 'name') {
			dispatchInputNameState(actionCreator);
		}
		if (e.target.id === 'email') {
			dispatchInputEmailState(actionCreator);
		}
	};

	const onFocusInputHandler = (e) => {
		const actionCreator = {
			type: 'SET-IS-TOUCHED',
			isTouched: false,
		};
		if (e.target.id === 'name') {
			dispatchInputNameState(actionCreator);
		}
		if (e.target.id === 'email') {
			dispatchInputEmailState(actionCreator);
		}
	};

	const onFormSubmitHandler = (e) => {
		e.preventDefault();
		dispatchInputNameState({
			type: 'SET-IS-TOUCHED',
			isTouched: true,
		});
		dispatchInputEmailState({
			type: 'SET-IS-TOUCHED',
			isTouched: true,
		});

		if (!isValidName || !isValidEmail) return;
		dispatchInputNameState({
			type: 'SET-IS-TOUCHED',
			isTouched: false,
		});
		dispatchInputEmailState({
			type: 'SET-IS-TOUCHED',
			isTouched: false,
		});

		dispatchInputNameState({
			type: 'CHANGE-VALUE',
			value: '',
		});
		dispatchInputEmailState({
			type: 'CHANGE-VALUE',
			value: '',
		});
	};

	const inputNameClasses = !inputNameIsInvalid
		? 'form-control'
		: 'form-control invalid';

	const inputEmailClasses = !inputEmailIsUnvalid
		? 'form-control'
		: 'form-control invalid';

	return (
		<form onSubmit={onFormSubmitHandler}>
			<div className={inputNameClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					value={inputNameState.value}
					onChange={onChangeInputHandler}
					onBlur={onBlurInputHandler}
					onFocus={onFocusInputHandler}
					type='text'
					id='name'
				/>
				{inputNameIsInvalid ? (
					<p className='error-text'>Name must be not empty</p>
				) : (
					''
				)}
			</div>
			<div className={inputEmailClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					value={inputEmailState.value}
					onChange={onChangeInputHandler}
					onBlur={onBlurInputHandler}
					onFocus={onFocusInputHandler}
					type='email'
					id='email'
				/>
				{inputEmailIsUnvalid ? (
					<p className='error-text'>Email must be not empty</p>
				) : (
					''
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleForm;
 */
