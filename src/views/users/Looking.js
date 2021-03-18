import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Avatar, Paper, Typography } from '@material-ui/core'
import MapWithAMarker from '../../components/MapWithAMarker'
import languageJson from '../../config/language'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ListItemText from '@material-ui/core/ListItemText'
import {
	Restaurant,
	ExpandMore,
	Place,
	DirectionsCar,
} from '@material-ui/icons'
import { Divider, MenuList, MenuItem } from '@material-ui/core'
import cities from 'cities.json'
const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: '#312d2d',
	},
	floatingCard: {
		maxWidth: 345,
		position: 'absolute',
		top: '90px',
		zIndex: '999',
		minWidth: '330px',
		maxHeight: '500px',
	},
	selectDest: {
		backgroundColor: '#276EF1',
		color: '#fff',
	},
	root: {
		'& > *': {
			margin: '25px',
			width: '40ch',
		},
	},
	selectDestBtn: {
		border: 0,
		borderRadius: 3,
		color: 'white',
		height: 48,
		padding: '0 10px',
		fontSize: '30px',
	},
}))

const Looking = () => {
	const [mylocation, setMylocation] = useState(null)
	const [locations, setLocations] = useState([])
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')
	const [address1, setAddress1] = useState('')
	const [address2, setAddress2] = useState('')
	const [filteredFromCities, setFilteredFromCities] = useState([])
	const [filteredToCities, setFilteredToCities] = useState([])
	const [ui1, setUi1] = useState(true)
	const option = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}

	useEffect(() => {
		const abortController = new AbortController()
		// const signal = abortController.signal
		if (mylocation == null) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setMylocation({
						name: 'My Location',
						locations: {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						},
					})
					alert(position.coords.latitude)
				},
				(err) => console.log(err),
				option
			)
		}
		document.title = 'Higher a photographer | Ogaphotos'

		return function cleanup() {
			abortController.abort()
		}
	})

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleFromChange = (e) => {
		let value = e.target.value

		setFrom(value)
		const regEx = new RegExp(`^${value}`, 'gi')
		// eslint-disable-next-line array-callback-return
		let newfilteredFromCities = cities.filter((cities) => {
			if (regEx.test(cities.name) || regEx.test(cities.country)) {
				return cities
			}
		})

		setFilteredFromCities(newfilteredFromCities.slice(0, 10))
	}

	const handleToChange = (e) => {
		let value = e.target.value

		setTo(value)
		const regEx = new RegExp(`^${value}`, 'gi')
		// eslint-disable-next-line array-callback-return
		let newfilteredToCities = cities.filter((cities) => {
			if (regEx.test(cities.name) || regEx.test(cities.country)) {
				return cities
			}
		})
		setFilteredToCities(newfilteredToCities.slice(0, 10))
	}

	const handleFromClick = (long, lat, name) => {
		return function () {
			setLocations([
				{
					name: name,
					locations: {
						lat: parseFloat(lat),
						lng: parseFloat(long),
					},
				},
			])
			// history.push
			setUi1(!ui1)
			setAddress1(name)
			console.log(mylocation)
			window.history.replaceState(
				null,
				null,
				'?pickup=' +
					encodeURIComponent(
						'{' + name + ',"latitude":' + lat + ',"longitude":' + long + '}'
					)
			)
		}
	}
	const handleToClick = (long, lat, name) => {
		return function () {
			setLocations([
				{
					name: name,
					locations: {
						lat: parseFloat(lat),
						lng: parseFloat(long),
					},
				},
			])

			setAddress2(name)
			window.history.replaceState(
				null,
				null,
				'&drop=' +
					encodeURIComponent(
						'{' + name + ',"latitude":' + lat + ',"longitude":' + long + '}'
					)
			)
		}
	}
	const handleClick = (marker, event) => {
		// console.log({ marker })
		// this.setState({ selectedMarker: marker })
		setAddress2(marker)
	}

	const driverPlaces = [
		{ lat: parseFloat(5.4474), long: parseFloat(4.3903) },
		{ lat: parseFloat(4.4474), long: parseFloat(5.3903) },
		{ lat: parseFloat(3.4474), long: parseFloat(6.3903) },
	]
	const classes = useStyles()
	return (
		<div>
			{ui1 ? (
				<Card className={classes.floatingCard}>
					<CardContent className={classes.selectDest}>
						<Grid container spacing={2}>
							<Grid item>
								<ListItemIcon>
									<PhotoCameraIcon />
								</ListItemIcon>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item container direction='column' spacing={2}>
									<Grid item xs>
										<Typography variant='h5'>Session Location?</Typography>
										<Button
											onClick={() => setUi1(!ui1)}
											className={classes.selectDestBtn}
											// color='light'
										>
											To {address2} <ExpandMore />
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
					<form
						noValidate
						onSubmit={handleSubmit}
						autoComplete='off'
						className={classes.root}
					>
						<TextField
							className='standard-basic'
							onChange={handleToChange}
							label='Add a pick-up location'
							name='search_to'
							value={to}
						/>
					</form>
					<MenuList
						component='nav'
						aria-label='contacts'
						style={{ height: '100vh', marginBottom: '10px', overflow: 'auto' }}
					>
						{filteredToCities &&
							filteredToCities.map((city, index) => (
								<MenuItem
									button
									key={index}
									onClick={handleToClick(city.lat, city.lng, city.name)}
								>
									<ListItemIcon>
										<Avatar>
											<Place />
										</Avatar>
									</ListItemIcon>
									<ListItemText primary={city.name} />
								</MenuItem>
							))}
					</MenuList>
				</Card>
			) : (
				<Card className={classes.floatingCard}>
					<CardContent className={classes.selectDest}>
						<Grid container spacing={2}>
							<Grid item>
								<ListItemIcon>
									<PhotoCameraIcon />
								</ListItemIcon>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item container direction='column' spacing={2}>
									<Grid item xs>
										<Button
											onClick={() => setUi1(!ui1)}
											className={classes.selectDestBtn}
											// color='light'
										>
											From {address1} <ExpandMore />
										</Button>
										<Typography variant='h5'>Where to?</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
					<form
						noValidate
						onSubmit={handleSubmit}
						autoComplete='off'
						className={classes.root}
					>
						<TextField
							id='standard-basic'
							onChange={handleFromChange}
							label='Enter your Destination'
							name='search_from'
							value={from}
						/>
					</form>
					<MenuList
						component='nav'
						aria-label='contacts'
						style={{ height: '100vh', marginBottom: '10px', overflow: 'auto' }}
					>
						{filteredFromCities &&
							filteredFromCities.map((city, index) => (
								<MenuItem
									button
									key={index}
									onClick={handleFromClick(city.lat, city.lng, city.name)}
								>
									<ListItemIcon>
										<Avatar>
											<Place />
										</Avatar>
									</ListItemIcon>
									<ListItemText primary={city.name} />
								</MenuItem>
							))}
					</MenuList>
					<Button
						variant='contained'
						// color='primary'
						size='large'
						className={classes.button}
						startIcon={<DirectionsCar />}
					>
						Request Ride
					</Button>
				</Card>
			)}
			{mylocation ? (
				<Paper>
					{/* <Map
						mapcenter={mylocation}
						locations={locations}
						googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCJMOf24QZuH0yO64jYsiEC2s0eDLE7-ic&v=3.exp&libraries=geometry,drawing,places'
						loadingElement={<div style={{ height: `480px` }} />}
						containerElement={<div style={{ height: `480px` }} />}
						mapElement={<div style={{ height: `480px` }} />}
					/> */}
					<MapWithAMarker
						selectedMarker={mylocation}
						markers={locations}
						drivers={driverPlaces}
						onClick={handleClick}
						googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCJMOf24QZuH0yO64jYsiEC2s0eDLE7-ic&v=3.exp&libraries=geometry,drawing,places'
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</Paper>
			) : (
				<Typography
					variant='h4'
					style={{ margin: '20px 0 0 15px', color: '#FF0000' }}
				>
					{languageJson.allow_location}
				</Typography>
			)}
		</div>
	)
}

export default Looking
