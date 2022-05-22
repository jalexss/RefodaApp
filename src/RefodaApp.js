import React from 'react'
import { Provider } from 'react-redux';

import { AppRouter } from './router/AppRouter';
import { store } from './store/store'

// boostrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export const RefodaApp = () => {
	return (
		<Provider store={ store}>
			<AppRouter />
		</Provider>
	)
}