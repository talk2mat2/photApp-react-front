import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import logo from '../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import AlertDialog from '../components/AlertDialog'
import languageJson from '../config/language'

import { clearSignupError, signUp } from '../actions/authactions'

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
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
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const Register = (props) => {
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [mobile, setMobile] = useState('')
	const [confpass, setConfPassword] = useState('')

	useEffect(() => {
		if (auth.info) {
			props.history.push('/')
		}
	})

	const handleEmailChange = (e) => setEmail(e.target.value)

	const handleFnameChange = (e) => setFname(e.target.value)
	const handleLnameChange = (e) => setLname(e.target.value)
	const handleMobileChange = (e) => setMobile(e.target.value)

	const handlePasswordChange = (e) => setPassword(e.target.value)
	const handleConfPasswordChange = (e) => setConfPassword(e.target.value)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(signUp(email, password, mobile, fname, lname))
	}

	const handleClose = () => {
		setEmail('')
		setPassword('')
		setConfPassword('')
		setFname('')
		setLname('')
		setMobile('')
		dispatch(clearSignupError())
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<img src={logo} alt='Logo' />
				</Avatar>
				<Typography component='h1' variant='h5'>
					{languageJson.register}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						type='email'
						label={languageJson.email_address}
						name='email'
						autoComplete='email'
						onChange={handleEmailChange}
						value={email}
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='first_name'
						label={languageJson.first_name}
						name='first_name'
						autoComplete='first_name'
						onChange={handleFnameChange}
						value={fname}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='last_name'
						label={languageJson.last_name}
						name='last_name'
						autoComplete='last_name'
						onChange={handleLnameChange}
						value={lname}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='mobile'
						label={languageJson.mobile}
						name='mobile'
						onChange={handleMobileChange}
						value={mobile}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label={languageJson.password}
						type='password'
						id='password'
						value={password}
						onChange={handlePasswordChange}
						autoComplete='current-password'
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='conf_password'
						label={languageJson.conf_password}
						type='password'
						id='conf_password'
						value={confpass}
						onChange={handleConfPasswordChange}
					/>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						{languageJson.sign_up}
					</Button>
				</form>
				<Typography component='p' b={5}>
					{languageJson.have_account}
					<a href='/login'>Login</a>
				</Typography>
			</div>
			<AlertDialog open={auth.error.flag} onClose={handleClose}>
				{auth.error.msg && auth.error.msg.message}
			</AlertDialog>
		</Container>
	)
}

export default Register
