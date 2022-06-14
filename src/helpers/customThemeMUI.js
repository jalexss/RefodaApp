import { createTheme } from '@mui/material/styles';

export const theme = createTheme({ 

	palette: {
		primary: {
			// editable opciones light, dark, contrastText
			// por defecto se ajustan con el main( color )
	     	// light: will be calculated from palette.primary.main,
	     	main: '#00e676',
	     	// dark: will be calculated from palette.primary.main,
	     	// contrastText: will be calculated to contrast with palette.primary.main
	    },
	    secondary: {
	    	// la misma estructura que el primario
	    	main: '#ef5350',
	    },
	    // Used by `getContrastText()` to maximize the contrast between
	    // the background and the text.
	    contrastThreshold: 3,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset: 0.2,
	},
});