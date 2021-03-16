import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Button, Grid, InputLabel, TextField } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import avatar from '../../assets/avatar.jpg'
import {
	Typography,
	ListItemIcon,
	Divider,
	MenuList,
	MenuItem,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import languageJson from '../../config/language'
import {
	LocationCityRounded,
	PersonOutline,
	PersonPinCircle,
} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
	paper: {
		padding: theme.spacing(4),
		margin: 'auto',
		width: '100%',
	},
	image: {
		width: 70,
		height: 70,
		fontSize: 40,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300,
		maxWidth: 500,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	margin: {
		margin: theme.spacing(1),
	},
}))
const Profile = (props) => {
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const classes = useStyles()

	const [age, setAge] = React.useState('')

	const handleChange = (event) => {
		setAge(event.target.value)
	}
	return (
		<div>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<Avatar className={classes.image} alt='James' src={avatar} />
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant='h5'>
									{auth.info.displayName}
								</Typography>
								<Typography variant='body2'>Phone Number</Typography>
								<Typography variant='body2' gutterBottom>
									{auth.info.email}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<PersonPinCircle />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'
							>
								Location
							</InputLabel>
							<Select
								labelId='demo-simple-select-placeholder-label-label'
								id='demo-simple-select-placeholder-label'
								value={age}
								onChange={handleChange}
								displayEmpty
								className={classes.selectEmpty}
							>
								<MenuItem value=''>
									<em>Nigeria</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<LocationCityRounded />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Location</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<PersonOutline />
					</Grid>
					<Grid item xs={12} sm container>
						<Typography variant='subtitle1' gutterBottom>
							{auth.info.email}
						</Typography>
						{/* <TextField
							disabled
							id='standard-disabled'
							label='Invite Code'
							defaultValue={auth.info.email}
						/> */}
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<LocationCityRounded />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Location</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Button
					variant='contained'
					size='large'
					color='primary'
					className={classes.margin}
				>
					Save Changes
				</Button>
			</Paper>
		</div>
	)
}

export default Profile
