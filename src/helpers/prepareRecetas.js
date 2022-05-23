
export const prepareRecetas = ( recetas = [] ) => {

	return recetas.map(
		(e) => ({
			...e
		})
	)
}