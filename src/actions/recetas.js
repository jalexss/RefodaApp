import { types } from '../types/types'
import Swal from 'sweetalert2'

import { fetchConToken } from '../helpers/fetch'
import { prepareRecetas } from '../helpers/prepareRecetas'

export const recetasStartLoading = () => {
	return async (dispatch) => {

		try{
			const resp = await fetchConToken( 'recetas' );
			const body = await resp.json();
			//const recetas = prepareRecetas( body.recetas );

			//recetas.ingredients ? [...recetas.ingredients] : 'empty!';
			//console.log('estas son las recetas', recetas);

			//if( !recetas.ingredients ) {
			//	recetas.ingredients = 'empty';
			//}

			dispatch( recetaLoaded( body.recetas ) );
		} catch (error) {

			console.log(error);
		}
	}
}

const recetaLoaded = (recetas) => ({

	type: types.recetaLoaded,
	payload: recetas
})