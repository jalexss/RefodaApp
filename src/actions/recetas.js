import { types } from '../types/types'
import Swal from 'sweetalert2'

import { fetchConToken } from '../helpers/fetch'

export const recetasStartLoading = () => {
	return async (dispatch) => {

		try{
			const resp = await fetchConToken( 'recetas' );
			const body = await resp.json();

			console.log(body)

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


export const recetaStartAddNew = ( receta ) => {
	return async( dispatch, getState ) => {

		const { uid, username } = getState().auth;

		console.log(username)

		try {

			const resp = await fetchConToken('recetas', receta, 'POST');
            const body = await resp.json(); 
            console.log(body);

            if( body.ok ) {

            	receta.id = body.receta.id;
            	receta.usuario = {
            		_id: uid,
            		username: username
            	}

            	console.log('receta despues', receta)
            	console.log(recetaAddNew(receta))

            	dispatch( recetaAddNew( receta ));
            } else {

            	Swal.fire('Error', body.msg, 'error');
            }
           	
		} catch (error) {

			console.log(error)
		}
	}
}

const recetaAddNew = (receta) => ({
	
	type: types.recetaAddNew,
	payload: receta
})
