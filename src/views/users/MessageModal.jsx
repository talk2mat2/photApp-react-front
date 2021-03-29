import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import './message.css'

const BigText = Styled.p`
font-size:14px;
color:#fff;
width:100%;
background-color:#696969;
text-align:center;
font-weight:500;

`
const Listing = Styled.ul`
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0px;
width:95%;
li{
	list-style:none;
	font-size:18px;
	color:grey;
}
`
const MessageContainer = Styled.div`
width:300px;
height:400px;
`
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
	const { open, handleClose, data } = props
	const [loading, setLoading] = React.useState(false)
	const [MsgTitle, setMsgTitle] = React.useState('')
	const [MsgBody, setMsgBody] = React.useState('')

	const CurrentUser = useSelector((state) => state.user.currentUser)
	const token = CurrentUser && CurrentUser.token
	const handleSendMessage = async () => {
		setLoading(true)
		// /sendMessages
		await axios
			.post(
				`${process.env.REACT_APP_API_URL}/users/sendMessages`,
				{ title: MsgTitle, body: MsgBody, receiver: data._id },

				{
					headers: { authorization: token },
				}
			)
			.then((res) => {
				setLoading(false)
				alert('message sent')
				handleClose()
			})
			.catch((err) => {
				if (err.response) {
					setLoading(false)
					alert('an error occured unable to perfom the requested operation')
					console.log(err.response.data.message)
					// err.response.data.message &&
					handleClose()
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
							// <>
							// 	<TextField
							// 		type='number'
							// 		value={priceTag}
							// 		onChange={(e) => setPricetag(parseInt(e.target.value))}
							// 		id='searchusers'
							// 		label='Set price per min in NGN'
							// 	/>
							// 	<Buttons onClick={handleSetPrice}>
							// 		<small>set</small>
							// 	</Buttons>
							// </>
							<MessageContainer>
								<BigText>New Message</BigText>
								<Listing>
									<li>
										<small>
											to: {data.fname} {data.lname}
										</small>
									</li>
									<li>
										title:{' '}
										<input
											className='glowing-border'
											id='title'
											value={MsgTitle}
											onChange={(e) => setMsgTitle(e.target.value)}
										/>
									</li>
									<li>
										<textarea
											id='Textarea'
											className='glowing-border'
											name='w3review'
											rows='20'
											cols='50'
											onChange={(e) => setMsgBody(e.target.value)}
										>
											{MsgBody}
										</textarea>
									</li>
									<li>
										<Buttons disabled={!MsgBody} onClick={handleSendMessage}>
											<small>send</small>
											<SendIcon
												fontSize='small'
												style={{
													color: !MsgBody ? 'white' : '#4c8bf5',
													marginLeft: '3px',
												}}
											/>
										</Buttons>
									</li>
								</Listing>
							</MessageContainer>
						) : (
							<MessageContainer>
								<h2 id='transition-modal-title'>sending..</h2>
								<CircularProgress style={{ fontSize: '30px' }} />
							</MessageContainer>
						)}
					</div>
				</Fade>
			</Modal>
		</div>
	)
}
