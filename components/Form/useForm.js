import { useState } from 'react';

const useForms = ( callbackAdd, callbackEditSubmit ) => {
	const [client, setClient] = useState({ name: '', age: '',  gender: 'male'});
	const [editClient, setEditClient] = useState(false);


	// HANDLE ADD CLIENT
	const handleChange = (e) => {
		const { name, value } = e.target;
		
		setClient({
			...client,
			[name]: value
		})
	} 

	const handleSubmit = (e) => {
		// e.preventDefault();
		editClient ? callbackEditSubmit() : callbackAdd()

		setEditClient(false);
		// reset form
		resetForm()
	};

	const handleGetEdit = (client) => {
		setEditClient(true);
	
		setClient({
			name: client.name,
			age: client.age,
			gender: client.gender,
			_id: client._id
		})
	}

	const resetForm = () => {
		setEditClient(false);
		setClient({
			name: '', age: '', gender: 'male',
		})
	}

	return {
		handleChange,
		handleSubmit,
		client,
		handleGetEdit,
		editClient,
		resetForm
	}
};

export default useForms;