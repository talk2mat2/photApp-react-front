import React, { useState, useEffect } from 'react'
import { Paper, Typography } from '@material-ui/core'
import Map from '../../components/Map'
import languageJson from '../../config/language'
const Dashboard = () => {
	const [mylocation, setMylocation] = useState(null)
	const [locations] = useState([])
	useEffect(() => {
		if (mylocation == null) {
			navigator.geolocation.getCurrentPosition(
				(position) =>
					setMylocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					}),
				(err) => console.log(err)
			)
		}
		document.title = 'Dashboard'
	}, [mylocation])

	return (
		<div>
			{mylocation ? (
				<Paper>
					<Map
						mapcenter={mylocation}
						locations={locations}
						googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCJMOf24QZuH0yO64jYsiEC2s0eDLE7-ic&v=3.exp&libraries=geometry,drawing,places'
						loadingElement={<div style={{ height: `480px` }} />}
						containerElement={<div style={{ height: `480px` }} />}
						mapElement={<div style={{ height: `480px` }} />}
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

export default Dashboard
