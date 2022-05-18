import { clientFormContainer, clientForm, closeBtn, submitBtn } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';

const schema = yup.object().shape({
  name: yup.string().max(10).required(),
  age: yup.number().positive().integer().required(),
});

const Form = ({ addClients, handleFormSubmit, handleChange, clientName, clientAge, editClient, closeModal }) => {

  const [client, setClient] = useState({ name: '', age: '', });

  // const [editClient, setEditClient] = useState(false);

	const [showModal, setShowModal] = useState(true);

	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data, e) => {
    
    console.log(data)
    setClient(data)
    addClients()
    e.target.reset();
  };

  const handleGetEdit = (client) => {

		// setEditClient(true);
	
		setClient({
			name: client.name,
			age: client.age,
			_id: client._id
		})
	}

	return (
    <div className={clientFormContainer({ showModal })}>
      <form 
        className={clientForm} 
        onSubmit={ handleSubmit(onSubmit)}
      >
        <h2>form</h2> 
        <a className={closeBtn}>close</a>

        <input 
          name="name" 
          type="text" 
          placeholder="name" 
          // value={clientName} 
          // onChange={handleChange}
					{...register('name')}
        />
				{errors.name?.message}
        <input 
          name="age" 
          type="text" 
          placeholder="age" 
          // value={clientAge} 
          // onChange={handleChange}
					{...register('age')}
        />
				{errors.age?.message}

        {/* submit btn */}
        <input 
          type="submit" 
          className={submitBtn}
          placeholder="submit"
        />
      </form>
    </div>
	)

}

export default Form