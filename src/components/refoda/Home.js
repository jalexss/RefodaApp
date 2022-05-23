import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from '../ui/Navbar'
import { RecetasIndex } from './RecetasIndex'
import { recetasStartLoading } from '../../actions/recetas'

export const Home = () => {

	const dispatch = useDispatch();
	const { recetas } = useSelector( state => state.recetas );

	useEffect(() => {
		
		dispatch( recetasStartLoading() );
	}, [dispatch])

	return (
		<>
			<Navbar />

			<h1>HomeView</h1>

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
			
		</>
	)
}
