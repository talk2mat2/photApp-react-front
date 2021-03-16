import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = (props) => {
	return (
		<div className='page-wrapper'>
			{/* <!-- Preloader --> */}
			<div className='preloader'></div>

			{/* <!-- Main Header--> */}
			<Header />

			{props.children}

			<Footer />
		</div>
	)
}

Layout.propTypes = {
	container: PropTypes.instanceOf(
		typeof Element === 'undefined' ? Object : Element
	),
}

export default Layout
