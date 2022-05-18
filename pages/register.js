import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import loginForms from '../components/Form/loginForm';

const Register = () => {

	const router = useRouter()
	
	const [user, setUser] = useState({ name: '', password: '', confirmPassword: ''});

	const url = process.env.SERVER_SITE;

	const handleChange = (e) => {
		// console.log(e.target.value);
		const { name, value } = e.target;

		setUser({
			...user,
			[name]: value
		})
	} 

	const handleSubmit = (e) => {
		e.preventDefault();
		addUser()	

	};

	const addUser = async () => {
		await axios.post(`${url}/api/auth/register/`, user)
		  .then(res => {
			// fetchData();
			const result = res?.data.result;
			const token = res?.data.token;
			const data = { result: result, token: token }
			localStorage.setItem('profile', JSON.stringify(data));
		  })
		  .catch(err => console.log(err));
	  }

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" 
					value={user.name} 
					onChange={handleChange}
				/>
				<input type="password" name="password" 
					value={user.password} 
					onChange={handleChange}
				/>
                <input type="password" name="confirmPassword" 
					value={user.confirmPassword} 
					onChange={handleChange}
				/>
				  <input 
          type="submit" 
          placeholder="submit"
        />
      </form>
		</div>
	)
}

export default Register
