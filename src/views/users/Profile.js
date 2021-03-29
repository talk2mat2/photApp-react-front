import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Button, Grid, InputLabel, TextField } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Autocomplete from 'react-google-autocomplete'
import Styled from 'styled-components'
import Select from '@material-ui/core/Select'
import avatar from '../../assets/avatar.jpg'
// import GooglePlacesAutocomplete, {
// 	geocodeByPlaceId,
// } from 'react-google-places-autocomplete'
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
const Buttons = Styled(Button)`
&& {


margin-top:8px;
color: rgb(190, 10, 10);
border-color: rgb(190, 10, 10);
&:focus {
  background-color: white;
}
// @media (max-width: 1100px) {
//   display: none;
// }
}
`
const Profile = (props) => {
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const classes = useStyles()
	const [value, setValue] = React.useState(null)
	const CurrentUser = useSelector((state) => state.user.currentUser)
	const userData = CurrentUser && CurrentUser.userData

	const [age, setAge] = React.useState('')

	const handleChange = (event) => {
		setAge(event.target.value)
	}
	const ButtonsStyle = {
		marginTop: '50px',
		marginLeft: '80px',
	}
	const handleplaces = async (place) => {
		console.log(place.formatted_address)
		console.log(place.geometry.location.lat())
		console.log(place.geometry.location.lng())
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
									{userData.fname + ' ' + userData.lname}
								</Typography>
								<Typography variant='body2'>{userData.mobile}</Typography>
								<Typography variant='body2' gutterBottom>
									{userData.Email}
								</Typography>
								{/* <div style={{ width: '50%' }}>
									<GooglePlacesAutocomplete
										apiKey='AIzaSyAPvhnz2J6HiUuHj41jc5wgT9xpAKZzgOk'
										selectProps={{
											value,
											onChange: (e) => handleplaces(e),
										}}
									/>
								</div> */}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* <Grid container spacing={2} alignItems='flex-end'>
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
				</Grid> */}
				<Autocomplete
					placeholder='enter location'
					apiKey={`${process.env.REACT_APP_API_KEY}`}
					style={{
						width: '300px',
						color: 'grey',
						borderWidth: '1px',
						borderColor: 'silver',
					}}
					onPlaceSelected={(place) => {
						handleplaces(place)
					}}
					types={['address']}
					componentRestrictions={{ country: 'ng' }}
				/>
				<Grid container spacing={2} alignItems='flex-end'>
					<Grid item>
						<LocationCityRounded />
					</Grid>
					<Grid item xs={12} sm container>
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>
								my saved Location
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
							>
								{/* <MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem> */}
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
							{userData.Email}
						</Typography>
						{/* <TextField
							disabled
							id='standard-disabled'
							label='Invite Code'
							defaultValue={auth.info.email}
						/> */}
					</Grid>
				</Grid>
				{/* <Grid container spacing={2} alignItems='flex-end'>
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
				</Grid> */}
				<Buttons
					style={{ ...ButtonsStyle, minWidth: '100px' }}
					variant='outlined'
					color='secondary'
				>
					<small> save Changes</small>
				</Buttons>
			</Paper>
		</div>
	)
}

export default Profile
