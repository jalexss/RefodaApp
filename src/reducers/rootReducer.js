import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { recetaReducer } from './recetaReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	recetas: recetaReducer
})