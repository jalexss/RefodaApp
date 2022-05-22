import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

//screens imports 
import { Dashboard } from '../components/refoda/Dashboard'
import { RefodaScreen } from '../components/refoda/RefodaScreen';
import { ConfirmEmailScreen } from '../components/auth/ConfirmEmailScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResetPasswordScreen } from '../components/auth/ResetPasswordScreen';
import { startChecking } from '../actions/auth' 
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//
// ruta /CES Y /RPS TEMPORALES HASTA QUE SEPA COMO ANIDAR RUTAS
export const AppRouter = () => {

	const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth );
  console.log('uid en app router -->', uid);
  
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
						<Route path="/" element={<RefodaScreen />}  />
						
						{/* RUTAS PUBLICAS*/}

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
							path="/dashboard" 
							element={
								<PrivateRoute uid={uid} >
									<Dashboard />
								</PrivateRoute>
							}
						/>			

						<Route 
							path="/confirm/:id" 
							element={
								<PrivateRoute uid={uid} >
									<ConfirmEmailScreen />
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

