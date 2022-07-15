/*
	REACT -> Resource import
*/
import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'

/*
	MUI -> Resource import
*/
/*import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';*/

/* 
	CUSTOM-> Resource import
*/
import { useForm } from '../../hooks/useForm';
//import { startRegister } from '../../actions/auth';

export const RegisterForm = () => {
	
	const dispatch = useDispatch();
	//const { modalOpen } = useSelector( state => state.ui );

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

        //dispatch( startRegister( email, password1, username ) );
    	//dispatch( uiOpenModal(modalOpen) );
    	console.log('voila!');
    }

	return (
		<>
			<h1>RegisterForm</h1>
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
			
		</>
	)
}
