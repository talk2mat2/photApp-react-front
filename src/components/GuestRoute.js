import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './Layout'

function GuestRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => (
				<>
					<Component {...props} />
				</>
			)}
		/>
	)
}

export default GuestRoute
