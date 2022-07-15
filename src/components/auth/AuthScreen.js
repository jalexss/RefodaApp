/*
	REACT -> Resource import
*/
import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";

/*
	MUI -> Resource import
*/
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

/* 
	CUSTOM-> Resource import
*/
import { theme } from '../../helpers/customThemeMUI';
import { ImagePublicBackground } from '../ui/ImagePublicBackground'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginForm'
import { ConfirmEmail } from './ConfirmEmail'
import { ResetPassword } from './ResetPassword'

export const AuthScreen = ({ component }) => {

	//const usuario = useSelector( state => state.auth );

	return (
		<ThemeProvider theme={ theme } >
			<Grid
				container
				component="main"
				sx={{ height: '100vh' }}
			>
				<CssBaseline />

				<ImagePublicBackground />
				
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box 
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						{ component }
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

