import React from 'react'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps'

const Map = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap defaultZoom={10} defaultCenter={props.mapcenter}>
			<Marker
				position={props.mapcenter}
				// key={props.locations.name}
				icon={{
					url: '../assets/car.png',
				}}
				// options={{
				// 	icon: require('../assets/car.png'),
				// 	size: { width: 32, height: 32 },
				// }}
			>
				<InfoWindow>
					<div>{props.locations.name}</div>
				</InfoWindow>
			</Marker>
		</GoogleMap>
	))
)

export default Map
