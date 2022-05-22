import React from 'react'
import { useDispatch } from 'react-redux'
//import { useNavigate } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

	const dispatch = useDispatch();
	//let navigate = useNavigate();

	const [ formLoginValues, handleLoginInputChange ] = useForm({
        username: 'jalexss',
        password: 'Password1'
    });

    const { username, password } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();

        dispatch( startLogin( username, password ) );
        //navigate("../dashboard")
    }

	return (
		<div>
			<h1>LoginScreen</h1>
			<br/>

			<form onSubmit={ handleLogin } >
				
				<input
					type="text"
					className="none" // cambiar!
					placeholder="Username"
					name="username"
					value={ username }
					onChange={ handleLoginInputChange }
				/>

				<input
					type="password"
					className="none" // cambiar!
					placeholder="Password"
					name="password"
					value={ password }
					onChange={ handleLoginInputChange }
				/>

				<input 
                	type="submit"
                    className="none" // cambiar!
                    value="Login" 
                />

			</form>
		</div>
	)
}

