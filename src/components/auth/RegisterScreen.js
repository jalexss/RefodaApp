import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {
	
	const dispatch = useDispatch();

	const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        username: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { username, email, password1, password2 } = formRegisterValues;

	const handleRegister = ( e ) => {
        e.preventDefault();

        if ( password1 !== password2 ) {
            return Swal.fire('Error', 'The passwords have to be the same', 'error');
        }

        dispatch( startRegister( email, password1, username ) );
    }

	return (
		<div>
			<h1>RegisterScreen</h1>
			<form onSubmit={ handleRegister }>
				<input 
					type="text"
					className="none" //cambiar!
					placeholder="Username"
					name="username"
					value={ username }
					onChange={ handleRegisterInputChange }
				/>
				<input 
					type="text"
					className="none" //cambiar!
					placeholder="Email"
					name="email"
					value={ email }
					onChange={ handleRegisterInputChange }
				/>
				<input 
					type="password"
					className="none" //cambiar!
					placeholder="Password"
					name="password1"
					value={ password1 }
					onChange={ handleRegisterInputChange }
				/>
				<input 
					type="password"
					className="none" //cambiar!
					placeholder="Rewrite-Password"
					name="password2"
					value={ password2 }
					onChange={ handleRegisterInputChange }
				/>
				<input 
					type="submit"
					className="none" //cambiar!
					value="Create Account"
				/>
			</form>
		</div>
	)
}
