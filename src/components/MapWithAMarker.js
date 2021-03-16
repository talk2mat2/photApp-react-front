import React from 'react'
import { compose } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps'

const baseIcon = 'https://i.imgur.com/u5Wy1dx.png'
const iconBase =
	'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
const iconBase2 =
	'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImageBackgrounds/v1.1/imageBackground_3x_v1.png'
const MapWithAMarker = compose(
	withScriptjs,
	withGoogleMap
)((props) => {
	return (
		<GoogleMap defaultZoom={8} defaultCenter={props.selectedMarker.locations}>
			{props.markers &&
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
				})}
			{props.drivers &&
				props.drivers.map((marker, index) => {
					return (
						<Marker
							key={index}
							// onClick=
							position={{
								lat: marker.lat,
								lng: marker.long,
							}}
							icon={baseIcon}
						>
							{/* <InfoWindow>
								<div>{marker.name}</div>
							</InfoWindow> */}
						</Marker>
					)
				})}
			{props.selectedMarker && (
				<Marker
					// onClick=
					position={{
						lat: props.selectedMarker.locations.lat,
						lng: props.selectedMarker.locations.lng,
					}}
					color='blue'
					label='S'
					// icon={baseIcon}
				>
					{/* <InfoWindow>
						<div>{props.selectedMarker.name}</div>
					</InfoWindow> */}
				</Marker>
			)}
		</GoogleMap>
	)
})

export default MapWithAMarker
