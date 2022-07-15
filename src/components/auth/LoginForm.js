/*
	REACT -> Resource import
*/
import React from 'react'
import { useDispatch } from 'react-redux'

/*
	MUI -> Resource import
*/
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

/* 
	CUSTOM-> Resource import
*/
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { Copyright } from '../ui/Copyright'

export const LoginForm = () => {

	const dispatch = useDispatch();

	const [ formLoginValues, handleLoginInputChange ] = useForm({

        username: 'jalexss',
        password: 'Password1',
    });

    const { username, password } = formLoginValues;

	const [values, setValues] = React.useState({

    	showPassword: false,
  	});

	const handleLogin = ( event ) => {
        event.preventDefault();

        console.log(event.currentTarget)
       	dispatch( startLogin( username, password ) );
        //navigate("../dashboard")
        const data = new FormData(event.currentTarget);
	    console.log({
	      	username: data.get('username'),
	     	password: data.get('password'),
	    });
    }

    const handleClickShowPassword = () => {

    	setValues({
      		...values,
      		showPassword: !values.showPassword,
    	});
    };

	const handleMouseDownPassword = (event) => {
    	
    	event.preventDefault();
  	};

	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            	<LockOutlinedIcon />
          	</Avatar>
	      	<Typography component="h1" variant="h5">
	       		Sign in
	      	</Typography>
			<Box
				component="form"
				noValidate
	  			autoComplete="off"
	  			onSubmit={ handleLogin }
	  			sx={{
	   				mt: 1
	 			}}
			>
				<TextField
					margin="normal"
					fullWidth
		          	id="username"
		          	label="Username"
		          	name="username"
					value={ username }
					onChange={ handleLoginInputChange }
		    	/>
			   
				<TextField
					margin="normal"
					fullWidth
					id="password"
					type={ values.showPassword ? 'text' : 'password' }
	      			label="Password"
					name="password"
					value={ password }
					onChange={ handleLoginInputChange }
					InputProps={{
			        	endAdornment: 
			        		<IconButton 
			        			position="end"
			        			onClick={handleClickShowPassword}
			        			onMouseDown={handleMouseDownPassword}
			        		>
			        			{ values.showPassword ? <VisibilityOff /> : <Visibility /> }
			        		</IconButton>,
			        }}
			        edge="end"
				/>

				<Button 
	            	type="submit"
	          		fullWidth
	         		variant="contained"
	                value="Login"
	                color="primary"
	                sx={{ mt: 3, mb: 2 }} 
	            >
	            	Sign in
	            </Button>
	            <Grid container >
	            	<Grid item xs>
	            		<Link href="reset-password" variant="body2">
	            			{"Forgot password?"}
	            		</Link>
	            	</Grid>
	            	<Grid item xs>
	            		<Link href="register" variant="body2">
	            			{"Don't have an account? Sign up"}
	            		</Link>
	            	</Grid>
	            </Grid>
	            <Copyright sx={{ mt: 5 }} />
	        </Box>
		</>
	)
}
