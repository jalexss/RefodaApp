import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { recetaReducer } from './recetaReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	recetas: recetaReducer,
	ui: uiReducer
})