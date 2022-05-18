import { useState } from 'react';

const loginForms = ( callbackAdd, callbackEditSubmit ) => {
	const [client, setClient] = useState({ name: '', password: '', confirmPassword: ''});

	// HANDLE ADD CLIENT
	const handleChange = (e) => {
		// console.log(e.target.value);
		const { name, value } = e.target;

		setClient({
			...client,
			[name]: value
		})
	} 

	const handleSubmit = (e) => {
		// e.preventDefault();
		callbackAdd()	
	};

	return {
		handleChange,
		handleSubmit,
		client
	}
};

export default loginForms;