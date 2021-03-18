import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
		width: 192,
		height: 192,
	},
}))

const ErrorPage = (props) => {
	const classes = useStyles()

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<img src='/media/ogaphotos_favicon.png' alt='Logo' />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Page Not Found
				</Typography>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					component={Link}
					to='/'
				>
					Go back home
				</Button>
			</div>
			{/* <AlertDialog open={auth.error.flag} onClose={handleClose}>{languageJson.sign_in_error}</AlertDialog> */}
		</Container>
	)
}

export default ErrorPage
