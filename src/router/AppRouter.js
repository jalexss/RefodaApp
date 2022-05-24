import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

//screens imports 
import { Home } from '../components/refoda/Home'
import { RefodaScreen } from '../components/refoda/RefodaScreen';
import { ConfirmEmailScreen } from '../components/auth/ConfirmEmailScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResetPasswordScreen } from '../components/auth/ResetPasswordScreen';
import { startChecking } from '../actions/auth' 
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RecetaForm } from '../components/receta/RecetaForm';

//
// ruta /CES Y /RPS TEMPORALES HASTA QUE SEPA COMO ANIDAR RUTAS
export const AppRouter = () => {

	const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth );

  useEffect(() => {

		dispatch( startChecking() );
	}, [dispatch])

  if ( checking ) {
    return (<h5>Espere... </h5>); // se puede poner un componente tambien
  }

	return (
		<BrowserRouter>
			<div>
				<Routes>

					{/* RUTAS PUBLICAS*/}

					<Route 
						path="/welcome" element={
							<PublicRoute uid={uid} >
									<RefodaScreen />
							</PublicRoute>
						}  
					/>

					<Route 
						path="/login" 
						element={
								<PublicRoute uid={uid} >
									<LoginScreen />
								</PublicRoute>
							}  
						/>

					<Route 
						path="/register" 
						element={
							<PublicRoute uid={uid} >
								<RegisterScreen />
							</PublicRoute>
						}  
					/>

					<Route 
						path="/reset-password" 
						element={
							<PublicRoute uid={uid} >
								<ResetPasswordScreen />
							</PublicRoute>
						}  
					/>

					{/*RUTAS PRIVADAS*/}

					<Route 
						path="/" 
						element={
							<PrivateRoute uid={uid} >
								<Home />
							</PrivateRoute>
						}
					/>			

					<Route 
						path="/confirm/:uid" 
						element={
							<PrivateRoute uid={uid} >
								<ConfirmEmailScreen />
							</PrivateRoute>
						} 
					/>

					<Route 
						path="/create-receta" 
						element={
							<PrivateRoute uid={uid} >
								<RecetaForm />
							</PrivateRoute>
						} 
					/>

					{/*Redireccionamiento de rutas inexistentes*/}
					<Route path="/*" element={<RefodaScreen />}  />
				</Routes>
			</div>
		</BrowserRouter>		
	)
}

