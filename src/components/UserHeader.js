import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../actions/authactions'

const UserHeader = () => {
	// const auth = useSelector(state => state.auth);
	const dispatch = useDispatch()
	const [mobileOpen, setMobileOpen] = useState(false)

	const LogOut = () => {
		dispatch(signOut())
	}
	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen)
	}
	return (
		<div>
			<header className='main-header header-style-one'>
				{/* <!-- Header Upper --> */}
				<div className='header-upper'>
					<div className='auto-container'>
						<div className='clearfix'>
							<div className='pull-left logo-box'>
								<div className='logo'>
									<Link to='/'>
										<img
											style={{ height: '70px' }}
											src='images/cablogo.png'
											alt=''
											title=''
										/>
									</Link>
								</div>
							</div>

							<div className='nav-outer clearfix'>
								{/* <!-- Mobile Navigation Toggler --> */}
								<div className='mobile-nav-toggler'>
									<span
										className='icon flaticon-menu'
										onClick={handleDrawerToggle}
										aria-label='open drawer'
									></span>
								</div>
								{/* <!-- Main Menu --> */}
								<nav className='main-menu navbar-expand-md'>
									<div className='navbar-header'>
										<button
											className='navbar-toggler'
											type='button'
											data-toggle='collapse'
											data-target='#navbarSupportedContent'
											aria-controls='navbarSupportedContent'
											aria-expanded='false'
											aria-label='Toggle navigation'
										>
											<span className='icon-bar'></span>
											<span className='icon-bar'></span>
											<span className='icon-bar'></span>
										</button>
									</div>

									<div
										className='navbar-collapse show collapse clearfix'
										id='navbarSupportedContent'
									>
										<ul className='navigation clearfix'>
											<li>
												<Link to='/'>Home</Link>
											</li>
											<li>
												<Link to='about'>About Us</Link>
											</li>
											<li>
												<Link to='service'>Services</Link>
											</li>

											<li>
												<Link to='blog'>Blog</Link>
											</li>
											<li>
												<Link to='contact'>Contact us</Link>
											</li>
										</ul>
									</div>
								</nav>

								{/* <!-- Outer Box --> */}
								<div className='outer-box'>
									<button
										onClick={LogOut}
										className='theme-btn btn-style-one logout-btn'
									>
										<span className='txt'>Logout</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--End Header Upper--> */}

				{/* <!-- Mobile Menu  --> */}
				<div className='mobile-menu'>
					<div className='menu-backdrop'></div>
					<div className='close-btn'>
						<span className='icon fa fa-remove'></span>
					</div>

					<nav className='menu-box'>
						<div className='nav-logo'>
							<a href='/'>
								<img
									style={{ height: '70px' }}
									src='images/cablogo.png'
									alt=''
									title=''
								/>
							</a>
						</div>
					</nav>
				</div>
			</header>
			{/* <!--End Main Header --> */}
		</div>
	)
}

export default UserHeader
