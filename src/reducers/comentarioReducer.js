import { types } from '../types/types'

const initialState = {
	comentarios: [],
	activeComentario: null
}

export const comentarioReducer = ( state = initialState, action ) => {

	switch ( action.type ) {

		case types.comentarioLoaded:
			return {
				...state,
				comentarios: [ ...action.payload ]
			}

		default:
			return state;
	}
}