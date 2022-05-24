import React from 'react'

export const RecetasIndex = ({ title, usuario, ingredients, instructions, step_By_Step, notes, createdAt, updatedAt }) => {

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
						<h1 className="text-info">{ createdAt }</h1>
						<h1 className="text-info">{ updatedAt }</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
