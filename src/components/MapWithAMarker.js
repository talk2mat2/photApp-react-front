import React, { useEffect, useState } from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import { useSelector } from 'react-redux'
import { compose } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
	Polygon,
} from 'react-google-maps'
import CameraIcon from '../assets/cameraIcon.png'
const triangleCoords = [
	{ lng: 3.3374639999999998, lat: 6.5997214 },
	{ lng: 3.4374639999999998, lat: 6.2997214 },
]
const baseIcon = 'https://i.imgur.com/u5Wy1dx.png'
const iconBase =
	'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
const iconBase2 =
	'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImageBackgrounds/v1.1/imageBackground_3x_v1.png'
const MapWithAMarker = compose(
	withScriptjs,
	withGoogleMap
)((props) => {
	// const sessionVenue = useSelector((state) => state.sessionVenue)
	const refs = {}
	const [state, setState] = useState({ bounds: null })
	const CloserPhotoGrapher = (photographers) => {
		const CloserPhotoGrapher = photographers.reduce(function (prev, curr) {
			return prev.distance < curr.distance ? prev : curr
		})
		return CloserPhotoGrapher
	}
	const onMapMounted = (ref) => {
		refs.map = ref
	}
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={
				props.sessionVenue.lat
					? props.sessionVenue
					: props.selectedMarker.locations
			}
		>
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

			{props.photographers.map((item) => (
				<Marker
					position={{ lat: item.lat, lng: item.lng }}
					color='blue'
					label='S'
					icon={CameraIcon}
				>
					<InfoWindow>
						<>
							<small>{item.fname}</small>
							<small>
								<br />
								{typeof item.distance !== 'undefined'
									? (item.distance / 1000).toFixed(1)
									: 0}
								km
							</small>
						</>
					</InfoWindow>
				</Marker>
			))}
			{props.sessionVenue && props.photographers.length > 0 && (
				<Polygon
					path={[props.sessionVenue, CloserPhotoGrapher(props.photographers)]}
					key={1}
					editable={true}
					options={{
						strokeColor: '#FF0000',
						strokeOpacity: 0.8,
						strokeWeight: 2,
						fillColor: '#FF0000',
						fillOpacity: 0.35,
					}}
				/>
			)}
			{props.sessionVenue.lat ? (
				<Marker
					position={{
						lat: props.sessionVenue.lat,
						lng: props.sessionVenue.lng,
					}}
					color='blue'
					label='me'
				/>
			) : null}
		</GoogleMap>
	)
})

export default MapWithAMarker
