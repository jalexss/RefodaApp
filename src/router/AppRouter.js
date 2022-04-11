import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//screens imports 

import { RefodaScreen } from '../components/refoda/RefodaScreen';

import { ConfirmEmailScreen } from '../components/auth/ConfirmEmailScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResetPasswordScreen } from '../components/auth/ResetPasswordScreen';





//
// ruta /CES Y /RPS TEMPORALES HASTA QUE SEPA COMO ANIDAR RUTAS
export const AppRouter = () => {
	return (
	
			<BrowserRouter>
				<div>
					<Routes>
						<Route path="/" element={<RefodaScreen />}  />
						
						<Route path="/login" element={<LoginScreen />}  />
						<Route path="/register" element={<RegisterScreen />}  />


						
						<Route path="/RPS" element={<ResetPasswordScreen />}  />
						<Route path="/CES" element={<ConfirmEmailScreen />}  />



						<Route path="/*" element={<RefodaScreen />}  />

					</Routes>
				</div>
			</BrowserRouter>

		
	)
}

