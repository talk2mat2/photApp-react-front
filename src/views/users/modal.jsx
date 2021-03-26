import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

const Buttons = Styled(Button)`
&& {
align-self:center;
background-color:#ffff;
font-size:13px;
margin-top:8px;
width:50px;
min-height:20px;
//   color: rgb(190, 10, 10);
  border-color: rgb(190, 10, 10);
  &:focus {
outline:none;
  }
  // @media (max-width: 1100px) {
  //   display: none;
  // }
}
`
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		display: 'flex',
		flexDirection: 'column',
	},
}))

export default function TransitionsModal(props) {
	const classes = useStyles()
	const { open, setOpen, handleClose, priceTag, setPricetag } = props
	const [loading, setLoading] = React.useState(false)

	const CurrentUser = useSelector((state) => state.user.currentUser)
	const token = CurrentUser && CurrentUser.token
	const handleSetPrice = async () => {
		setLoading(true)
		//axiosrequest "/CreatePriceTag
		await axios
			.post(
				`${process.env.REACT_APP_API_URL}/users/CreatePriceTag`,
				{ price: priceTag },

				{
					headers: { authorization: token },
				}
			)
			.then((res) => {
				setLoading(false)
				setPricetag(parseInt(res.data.userData))
				console.log(res.data)
				setOpen(false)
				// setIsregistered(true)
				// history.push('/dashboard')
			})
			.catch((err) => {
				if (err.response) {
					setLoading(false)
					alert('an error occured unable to perfom the requested operation')
					console.log(err.response.data.message)
					// err.response.data.message &&

					// err.response.data.error && setIsregistered(false)
				}
				console.log(err)
			})
	}
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						{!loading ? (
							<>
								<TextField
									type='number'
									value={priceTag}
									onChange={(e) => setPricetag(parseInt(e.target.value))}
									id='searchusers'
									label='Set price per min in NGN'
								/>
								<Buttons onClick={handleSetPrice}>
									<small>set</small>
								</Buttons>
							</>
						) : (
							<>
								<h2 id='transition-modal-title'>loading..</h2>
								<CircularProgress style={{ fontSize: '30px' }} />
							</>
						)}
					</div>
				</Fade>
			</Modal>
		</div>
	)
}
