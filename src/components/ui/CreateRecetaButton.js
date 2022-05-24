import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateRecetaButton = () => {

	let navigate = useNavigate();

	const handleOnClick = (e) => {

		e.preventDefault();
		navigate('../create-receta');
	} 

	return (
		<button 
			className="btn btn-primary" 
			onClick={ handleOnClick }
		>
			Create a Receta Here!
		</button>
	)
}

