import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import { recetaSetActive, recetaStartDelete, recetaClearActiveReceta } from '../../actions/recetas'
import { uiOpenModal } from '../../actions/ui'
import { showDeleteAlert } from '../../helpers/SweetAlertCustom'

export const RecetasIndex = ({ id, title, usuario, ingredients, instructions, step_By_Step, notes, createdAt, updatedAt }) => {

	const dispatch = useDispatch();
	const { activeReceta:receta } = useSelector( state => state.recetas );

	const dateCreated = moment(createdAt).fromNow();//.format('DD MMM, YYYY');
	const dateUpdated = moment(updatedAt).fromNow();

	const onClickUpdateReceta = () => {

		dispatch( uiOpenModal() );

		dispatch( 

			recetaSetActive({
				id, title, usuario, ingredients, instructions, step_By_Step, notes, createdAt, updatedAt
			}) 
		);
	}

	const onClickDeleteReceta = async(e) => {

		e.preventDefault();

		dispatch( recetaSetActive({ id }) );

		const result = await showDeleteAlert();

		if (result.isConfirmed) { 
			
			dispatch( recetaStartDelete() );
			return dispatch( recetaClearActiveReceta() );
		}

		dispatch( recetaClearActiveReceta() );
	}


	return (
		<div className="container ">
			<div className="card mb-5">
				<div className="card text-white bg-dark">
					<div className="card-header">
						<strong> { title } </strong>
						<br/>
						<span> { usuario.username } </span> {/*TODO: QUE SE PUEDA IR AL PROFILE DEL USUARIO*/}
						<br/>
						{ 
					
							(ingredients.length !== 0) 
								? (<h1 className="card-text">{ ingredients }</h1>) 
								: (<p className="text-info">NADA...</p>)
						
						}
					</div>	
					<div className="card-body">
						<h4 className="card-title">{instructions}</h4>
						<p className="card-text">{step_By_Step}</p>
						<p className="card-text">{ notes }</p>
						<h1 className="text-info">{ dateCreated }</h1>
						<h1 className="text-info">{ dateUpdated }</h1>
					</div>
					<button
						className="btn btn-outline-primary"
						onClick={ onClickUpdateReceta }
					> update </button>
					<button
						className="btn btn-outline-danger"
						onClick={ onClickDeleteReceta }
					> delete </button>
				</div>
			</div>
		</div>
	)
}
