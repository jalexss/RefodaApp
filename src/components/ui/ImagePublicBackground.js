import React from 'react'

/*
	MUI -> Resource import
*/
import Grid from '@mui/material/Grid';

export const ImagePublicBackground = () => {
	return (
		<Grid
			item 
			xs={false}
			sm={4}
			md={7}
			sx={{
				backgroundImage: 'url(https://source.unsplash.com/random)',
				backgroundRepeat: 'no-repeat',
   				backgroundColor: (t) =>
      				t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    			backgroundSize: 'cover',
    			backgroundPosition: 'center',
			}}
		>
		</Grid>
	)
}