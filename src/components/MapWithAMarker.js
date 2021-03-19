import React, { useEffect } from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import { compose } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps'
import CameraIcon from '../assets/cameraIcon.png'

const baseIcon = 'https://i.imgur.com/u5Wy1dx.png'
const iconBase =
	'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
const iconBase2 =
	'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImageBackgrounds/v1.1/imageBackground_3x_v1.png'
const MapWithAMarker = compose(
	withScriptjs,
	withGoogleMap
)((props) => {
	useEffect(() => {
		console.log(props.drivers)
	})
	return (
		<GoogleMap defaultZoom={12} defaultCenter={props.selectedMarker.locations}>
			{/* {props.markers &&
				props.markers.map((marker, index) => {
					return (
						<Marker
							key={index}
							// onClick=
							position={{
								lat: marker.locations.lat,
								lng: marker.locations.lng,
							}}
							// icon={baseIcon}
						>
							<InfoWindow>
								<div>{marker.name}</div>
							</InfoWindow>
						</Marker>
					)
				})} */}

			{props.sessionVenue && (
				<Marker
					// onClick=
					position={{
						lat: props.sessionVenue.locations.lat,
						lng: props.sessionVenue.locations.lng,
					}}
					color='blue'
					label='Me'
					// icon={baseIcon}
				>
					{/* <InfoWindow>
						<div>{props.selectedMarker.name}</div>
					</InfoWindow> */}
				</Marker>
			)}
			{props.photographers.map((item) => (
				<Marker
					position={{ lat: item.lat, lng: item.lng }}
					color='blue'
					label='S'
					icon={CameraIcon}
				>
					<InfoWindow>
						<>
							{' '}
							<PhotoCameraIcon />
							<p>{item.name}</p>
						</>
					</InfoWindow>
				</Marker>
			))}

			{/* <Marker position={{ lat: 6.6138, lng: 3.358 }} color='blue' label='S' /> */}
		</GoogleMap>
	)
})

export default MapWithAMarker
