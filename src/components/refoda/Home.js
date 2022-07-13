import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import { Navbar } from '../ui/Navbar'
import { PrimarySearchAppBar } from '../ui/NavbarMUI'
import { RecetasIndex } from '../receta/RecetasIndex'
import { recetasStartLoading } from '../../actions/recetas'
//import { RecetaModal } from '../receta/RecetaModal'
import { RecetaCreateModal } from '../ui/RecetaCreateModal'
import { uiOpenModal } from '../../actions/ui'
//import { comentarioStartLoading } from '../../actions/comentarios'

export const Home = () => {

	const dispatch = useDispatch();
	const { recetas, activeReceta } = useSelector( state => state.recetas );
	const { modalOpen } = useSelector( state => state.ui );

	useEffect(() => {
		
		dispatch( recetasStartLoading() );
		//console.log(dispatch(recetasStartLoading))
		//dispatch( comentarioStartLoading() );
	}, [dispatch]);

	const ClickNewReceta = ( e ) => {
		e.preventDefault();

		dispatch( uiOpenModal(modalOpen) );
	}

	return (
		<>
			<PrimarySearchAppBar />

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

			{/*<RecetaModal />*/}
			<RecetaCreateModal />

		</>
	)
}

