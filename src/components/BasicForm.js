import useInput from '../Hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
	const {
		value: inputFirstName,
		isValid: isInputFirstNameValid,
		hasError: hasInputFirstNameError,
		onInputChangeHandler: onInputFirstNameChangeHandler,
		onInputBlurHandler: onInputFirstNameBlurHandler,
		onInputFocusHandler: onInputFirstNameFocusHandler,
		reset: resetInputFirstName,
	} = useInput(isNotEmpty);

	const {
		value: inputSecondName,
		isValid: isInputSecondNameValid,
		hasError: hasInputSecondNameError,
		onInputChangeHandler: onInputSecondNameChangeHandler,
		onInputBlurHandler: onInputSecondNameBlurHandler,
		onInputFocusHandler: onInputSecondNameFocusHandler,
		reset: resetInputSecondName,
	} = useInput(isNotEmpty);

	const {
		value: inputEmail,
		isValid: isInputEmailValid,
		hasError: hasInputEmailError,
		onInputChangeHandler: onInputEmailChangeHandler,
		onInputBlurHandler: onInputEmailBlurHandler,
		onInputFocusHandler: onInputEmailFocusHandler,
		reset: resetInputEmail,
	} = useInput(isEmail);

	let isFormValid = false;

	if (
		isInputEmailValid &&
		isInputFirstNameValid &&
		isInputSecondNameValid
	)
		isFormValid = true;

	const onFormSubmitHandler = (e) => {
		e.preventDefault();
		if (
			!isInputEmailValid ||
			!isInputFirstNameValid ||
			!isInputSecondNameValid
		)
			return;

		resetInputEmail();
		resetInputFirstName();
		resetInputSecondName();
	};

	const inputFirstNameClasses = !hasInputFirstNameError
		? 'form-control'
		: 'form-control invalid';

	const inputSecondNameClasses = !hasInputSecondNameError
		? 'form-control'
		: 'form-control invalid';

	const inputEmailClasses = !hasInputEmailError
		? 'form-control'
		: 'form-control invalid';

	return (
		<form onSubmit={onFormSubmitHandler}>
			<div className='control-group'>
				<div className={inputFirstNameClasses}>
					<label htmlFor='firstname'>First Name</label>
					<input
						value={inputFirstName}
						onChange={onInputFirstNameChangeHandler}
						onBlur={onInputFirstNameBlurHandler}
						onFocus={onInputFirstNameFocusHandler}
						type='text'
						id='firstname'
					/>
					{hasInputFirstNameError && <p>Unvalid first name</p>}
				</div>
				<div className={inputSecondNameClasses}>
					<label htmlFor='lastname'>Last Name</label>
					<input
						value={inputSecondName}
						onChange={onInputSecondNameChangeHandler}
						onBlur={onInputSecondNameBlurHandler}
						onFocus={onInputSecondNameFocusHandler}
						type='text'
						id='lastname'
					/>
					{hasInputSecondNameError && <p>Unvalid second name</p>}
				</div>
			</div>
			<div className={inputEmailClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					value={inputEmail}
					onChange={onInputEmailChangeHandler}
					onBlur={onInputEmailBlurHandler}
					onFocus={onInputEmailFocusHandler}
					type='email'
					id='email'
				/>
				{hasInputEmailError && <p>Unvalid E-mail</p>}
			</div>
			<div className='form-actions'>
				<button disabled={isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
