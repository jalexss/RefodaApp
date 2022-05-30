import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { recetaReducer } from './recetaReducer'
import { uiReducer } from './uiReducer'
import { comentarioReducer } from './comentarioReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	recetas: recetaReducer,
	ui: uiReducer,
	comentarios: comentarioReducer,
})