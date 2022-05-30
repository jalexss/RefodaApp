import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal';
//import Swal from 'sweetalert2'

import { uiCloseModal } from '../../actions/ui';
import { recetaStartAddNew, recetaClearActiveReceta, recetaStartUpdate } from '../../actions/recetas'
import { recetasStartLoading } from '../../actions/recetas'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

//propiedades del formulario receta inicial (campos vacios)
const initReceta = {
	title: '',
    ingredients: '',
    instructions: '',
    step_By_Step: '',
    notes: ''
}

export const RecetaModal = () => {

	const dispatch = useDispatch();

	// Seleccionando states
	const { modalOpen } = useSelector( state => state.ui );
	const { activeReceta } = useSelector( state => state.recetas );

	// useState  -> post/updated form
	const [formValues, setFormValues] = useState( initReceta );

	const { 
		title,
		ingredients,
		instructions,
		step_By_Step, 
		notes 
	} = formValues

	useEffect( () => {

  	if ( activeReceta ) {
    	setFormValues( activeReceta );
  	} else {
    	setFormValues( initReceta );
  	}
  	
	}, [ activeReceta, setFormValues])

	const handleInputChange = ({ target }) => {

    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }
	const closeModal = () => {

    dispatch( uiCloseModal() );
    dispatch( recetaClearActiveReceta() );
    setFormValues( initReceta );
	}

	const handleSubmitForm = ( e ) => {

		e.preventDefault();

		if ( activeReceta ) {

			dispatch ( recetaStartUpdate( formValues ));
		} else {

			dispatch ( recetaStartAddNew( formValues ));
		}

		closeModal();
	}

	return (

		<Modal
			isOpen={ modalOpen }
			onRequestClose={ closeModal }
			style={ customStyles }
 			contentLabel="Minimal Modal"
		>

			<h1> { (activeReceta)? 'New Receta' : 'Edit Receta' } </h1>
	  		<hr />
			<form 
				className="container row"
				onSubmit={ handleSubmitForm }
			>
				<h1 className="text-info">Create Your Receta!</h1>
			 	
			 	<div className="mb-3 col-2">
				    
				    <label className="form-label">Title</label>
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	name="title"
				    	value={ title }
				    	onChange={ handleInputChange }
				    />
			    	<div id="titleHelp" className="form-text">Let a creative title for you Receta!</div>
		
			  	</div>

			  	<div className="mb-3 col-2">

			    	<label className="form-label">Ingredients</label>
			    	<input 
			    		type="text" 
			    		className="form-control"
			    		name="ingredients"
			    		value={ ingredients }
			    		onChange={ handleInputChange }
			    	/>
			    	<div id="ingredientsHelp" className="form-text">What ingredients you choices?</div>
			  	
			  	</div>

			  	<div className="mb-3 col-2">

			    	<label className="form-label">instructions</label>
			    	<textarea
			    		className="form-control"
			    		name="instructions"
			    		value={ instructions }
			    		onChange={ handleInputChange }
			    	/>
			    	<div id="instructionsHelp" className="form-text">How do you prepare?</div>
			  	
			  	</div>

			  	<div className="mb-3 col-2">

			    	<label className="form-label">Step by Step</label>
			    	<textarea
			    		className="form-control"
			    		name="step_By_Step"
			    		value={ step_By_Step }
			    		onChange={ handleInputChange }
			    	/>
			    	<div id="stepsHelp" className="form-text">What ingredients you choices?</div>
			  	
			  	</div>

			  	<div className="mb-3 col-2">

			    	<label className="form-label">Notes</label>
			    	<textarea
			    		className="form-control"
			    		name="notes"
			    		value={ notes }
			    		onChange={ handleInputChange }
			    	/>
			    	<div id="notesHelp" className="form-text">Something that you say?</div>
			  	
			  	</div>

				<button 
        	type="submit"
          className="btnPrimary" // cambiar 
        >
        	submit
        </button>
			</form>
		</Modal>
	)
}

