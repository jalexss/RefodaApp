import { types } from '../types/types'

const initialState = {
	recetas: [],
}

export const recetaReducer = ( state = initialState, action ) => {
	
	switch ( action.type ) {

		case types.recetaLoaded:
			return {
				...state,
				recetas: [ ...action.payload ]
			}

		case types.recetaAddNew:
			return {
				...state,
				receta: [
					action.payload
				]
			}

		default:
			return state;
	}
}

