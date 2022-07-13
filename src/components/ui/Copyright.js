import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const url = process.env.REACT_APP_URL;

console.log(url)


export const Copyright = (props) => {
	return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    	{'Copyright © '}
    	<Link color="inherit" href={url}>
        	RefodaApp
      	</Link>{' '}
      	{new Date().getFullYear()}
     	{'.'}
    </Typography>
  );
}

