import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ResponsiveDrawer from './ResponsiveDrawer'

function ProtectedRoute({ component: Component, ...rest }) {
	const auth = useSelector((state) => state.auth)
	const CurrentUser = useSelector((state) => state.user.currentUser)
	return (
		<Route
			{...rest}
			render={(props) =>
				// auth.info
				CurrentUser ? (
					<ResponsiveDrawer>
						<Component {...props} />
					</ResponsiveDrawer>
				) : (
					<Redirect to='SignUp' />
				)
			}
		/>
	)
}

export default ProtectedRoute
