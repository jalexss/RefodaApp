import React from 'react'
import moment from 'moment'

export const RecetasIndex = ({ title, usuario, ingredients, instructions, step_By_Step, notes, createdAt, updatedAt }) => {

	const dateCreated = moment(createdAt).fromNow();//.format('DD MMM, YYYY');
	const dateUpdated = moment(updatedAt).fromNow();//.format('DD MMM, YYYY');


	return (
		<div className="container ">
			<div className="card mb-5">
				<div className="card text-white bg-dark">
					<div className="card-header">
						<strong> { title } </strong>
						<br/>
						<span> { usuario.username } </span>
						<br/>
						{ 
					
						(ingredients.length > 0) ? (<h1>{ ingredients }</h1>) : (<p>NADA...</p>)
						
						}
					</div>	
					<div className="card-body">
						<h4 className="card-title">{instructions}</h4>
						<p className="card-text">{step_By_Step}</p>
						<p className="card-text">{ notes }</p>
						<h1 className="text-info">{ dateCreated }</h1>
						<h1 className="text-info">{ dateUpdated }</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
