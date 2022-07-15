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
import { ConfirmEmail } from '../components/auth/ConfirmEmail';
import { RegisterForm } from '../components/auth/RegisterForm';
import { ResetPassword } from '../components/auth/ResetPassword';
import { AuthScreen } from '../components/auth/AuthScreen'
import { LoginForm } from '../components/auth/LoginForm'
import { startChecking } from '../actions/auth' 
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//
//TODO: ruta /CES Y /RPS TEMPORALES HASTA QUE SEPA COMO ANIDAR RUTAS
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
									<AuthScreen component={<LoginForm />} />
								</PublicRoute>
							}  
						/>

					<Route 
						path="/register" 
						element={
							<PublicRoute uid={uid} >
								<AuthScreen component={<RegisterForm />}/>
							</PublicRoute>
						}  
					/>

					<Route 
						path="/reset-password" 
						element={
							<PublicRoute uid={uid} >
								<AuthScreen component={<ResetPassword />} />
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
								<AuthScreen component={<ConfirmEmail />} />
							</PrivateRoute>
						} 
					/>

					{/*Redireccionamiento de rutas inexistentes*/}
					<Route 
						exact path="*" 
						element={ <RefodaScreen /> }
					/>
				</Routes>
			</div>
		</BrowserRouter>		
	)
}

