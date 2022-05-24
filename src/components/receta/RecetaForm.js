import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForm';
import { recetaStartAddNew } from '../../actions/recetas'

export const RecetaForm = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [ formRecetaValues, handleRecetaInputChange ] = useForm({
        title: '',
        ingredients: '',
        instructions: '',
        step_By_Step: '',
        notes: ''
    });

	const { title, ingredients, instructions, step_By_Step, notes } = formRecetaValues;

	const handleNewReceta = ( e ) => {
		
		e.preventDefault();

		//TODO HACER QUE SE ESPERE A QUE SE HAYA GUARDADO LOS DATOS 
		//PARA PODER CAMBIAR LA VISTA

		dispatch( recetaStartAddNew( formRecetaValues ) ) 
		navigate('/');
	}

	return (
		<>
			<form className="container mt-5">
				<h1 className="text-info">Create Your Receta!</h1>
			 	
			 	<div className="mb-3">
				    
				    <label className="form-label">Title</label>
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	name="title"
				    	value={ title }
				    	onChange={ handleRecetaInputChange }
				    />
			    	<div id="titleHelp" className="form-text">Let a creative title for you Receta!</div>
		
			  	</div>

			  	<div className="mb-3">

			    	<label className="form-label">Ingredients</label>
			    	<input 
			    		type="text" 
			    		className="form-control"
			    		name="ingredients"
			    		value={ ingredients }
			    		onChange={ handleRecetaInputChange }
			    	/>
			    	<div id="ingredientsHelp" className="form-text">What ingredients you choices?</div>
			  	
			  	</div>

			  	<div className="mb-3">

			    	<label className="form-label">instructions</label>
			    	<textarea
			    		className="form-control"
			    		name="instructions"
			    		value={ instructions }
			    		onChange={ handleRecetaInputChange }
			    	/>
			    	<div id="instructionsHelp" className="form-text">How do you prepare?</div>
			  	
			  	</div>

			  	<div className="mb-3">

			    	<label className="form-label">Step by Step</label>
			    	<textarea
			    		className="form-control"
			    		name="step_By_Step"
			    		value={ step_By_Step }
			    		onChange={ handleRecetaInputChange }
			    	/>
			    	<div id="stepsHelp" className="form-text">What ingredients you choices?</div>
			  	
			  	</div>

			  	<div className="mb-3">

			    	<label className="form-label">Notes</label>
			    	<textarea
			    		className="form-control"
			    		name="notes"
			    		value={ notes }
			    		onChange={ handleRecetaInputChange }
			    	/>
			    	<div id="notesHelp" className="form-text">Something that you say?</div>
			  	
			  	</div>


				<button 
                	type="submit"
                    className="btnPrimary" // cambiar!
                    onClick={ handleNewReceta } 
                >
                	submit
                </button>
			</form>
		</>
	)
}

