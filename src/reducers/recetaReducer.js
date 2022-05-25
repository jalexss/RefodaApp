import { types } from '../types/types'

const initialState = {
	recetas: [],
	activeReceta: null
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

		case types.recetaUpdated:
			return {
				...state,
				receta: state.recetas.map(
					e=> ( e.id === action.payload.id ) ? action.payload :e
				)
			}

		case types.recetaSetActive:
			return {
				...state,
				activeReceta: action.payload
			}

		case types.recetaClearActiveReceta:
        return {
            ...state,
            activeReceta: null
        }

		default:
			return state;
	}
}

