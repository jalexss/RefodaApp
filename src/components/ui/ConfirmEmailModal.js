import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { uiCloseModal } from '../../actions/ui';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ConfirmEmailModal = () => {

	const dispatch = useDispatch();
	const { modalOpen } = useSelector( state => state.ui );

	const closeModal = () => {

		dispatch( uiCloseModal() );
	}

	return (
		<Modal
			open={modalOpen}
  			onClose={closeModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
    			<Typography id="modal-modal-title" variant="h6" component="h2">
      				Text in a modal
    			</Typography>
    			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
      				Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    			</Typography>
  			</Box>
		</Modal>
	)
}
