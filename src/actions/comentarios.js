import { types } from '../types/types'

import { fetchConToken } from '../helpers/fetch'

export const comentarioStartLoading = (recetasId) => {
	return async (dispatch) => {
		// accion disparada desde actions/recetas/recetasStartLoading -> function(dispatch)
		try{
			console.log(recetasId);

			const resp = await fetchConToken( `comments/${ recetasId }` );
			const body = await resp.json();
			console.log(body);

			dispatch( comentarioLoaded( body.comentarios ) );
		} catch (error) {

			console.log(error);
		}
	}
}


const comentarioLoaded = (comentarios) => ({

	type: types.comentarioLoaded,
	payload: comentarios
})
