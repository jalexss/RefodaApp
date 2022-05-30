import { types } from '../types/types'

import { fetchConToken } from '../helpers/fetch'

export const comentarioStartLoading = () => {
	return async (dispatch) => {
		// accion disparada desde actions/recetas/recetasStartLoading -> function(dispatch)
		try{
			const resp = await fetchConToken( 'comments' );
			const body = await resp.json();
			//console.log(body);

			//dispatch( comentarioLoaded( body.co ) );
		} catch (error) {

			console.log(error);
		}
	}
}