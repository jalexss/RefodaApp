import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from '../ui/Navbar'
import { RecetasIndex } from '../receta/RecetasIndex'
import { recetasStartLoading } from '../../actions/recetas'
import { RecetaModal } from '../receta/RecetaModal'
import { uiOpenModal } from '../../actions/ui'
//import { comentarioStartLoading } from '../../actions/comentarios/comentarioStartLoading'

export const Home = () => {

	const dispatch = useDispatch();
	const { recetas, activeReceta } = useSelector( state => state.recetas );
	const { modalOpen } = useSelector( state => state.ui );

	useEffect(() => {
		
		dispatch( recetasStartLoading() );
		//console.log(dispatch(recetasStartLoading))
	}, [dispatch]);

	const ClickNewReceta = ( e ) => {
		e.preventDefault();

		dispatch( uiOpenModal(modalOpen) );
	}

	return (
		<>
			<Navbar />

			<h1>HomeView</h1>
			<button
				className="btn btn-primary"
				onClick={ ClickNewReceta }
			>
				New Receta
			</button>

			<div className="container flex">
				<p className="text">Recetas</p>

				{ 
					recetas.map( receta => (
						<RecetasIndex
							key={ receta.id }
							{ ...receta }
						/>
					))
				}
			</div>

			<RecetaModal />

		</>
	)
}

