import Swal from 'sweetalert2'


export const showDeleteAlert = (
	title = 'Are you sure this?',
	text = "You won't be able to revert this!",
	confirmButtonText = 'Yes, delete it!'
) => { 
	return Swal.fire({
		title,
		text,
		confirmButtonText,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33'
	})
};

export const showDeleteSuccessAlert = ( 

	title = 'Has Been Deleted Successfully',
) => {
	Swal.fire({
		title,
		icon: 'success',
		confirmButtonColor: '#3085d6'
	})
}
