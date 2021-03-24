import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Drawer, Hidden } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppMenu from '../components/AppMenu'
import { useDispatch } from 'react-redux'
import { signOut } from '../actions/authactions'
import { LOGINOUTUSER, SYNCUSERDATA } from '../redux/action'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1),
	},
}))

const MenuIconDiv = Styled.div`

position:fixed;
top:10px;
left:10px;
z-index:1000000000;
@media (min-width: 600px) {
   display:none;
  }

`

function ResponsiveDrawer(props) {
	const { container } = props
	const [mylocation, setMylocation] = useState(null)
	const classes = useStyles()
	const theme = useTheme()
	const [mobileOpen, setMobileOpen] = React.useState(true)
	const [isOpen, setisOpen] = React.useState(false)
	const CurrentUser = useSelector((state) => state.user.currentUser)
	const userData = CurrentUser && CurrentUser.userData
	const token = CurrentUser && CurrentUser.token

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen)
	}
	const dispatch = useDispatch()
	const LogOut = () => {
		dispatch(LOGINOUTUSER())
	}
	const option = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}
	useEffect(() => {
		if (mylocation === null) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setMylocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
					// alert(position.coords.latitude)
				},
				(err) => console.log(err),
				option
			)
		}
	}, [])
	useEffect(() => {
		const updateMyLocation = (values) => {
			axios
				.post(
					`${process.env.REACT_APP_API_URL}/photographer/updateMyLocation`,
					values,
					{
						headers: { authorization: token },
					}
				)
				.then((res) => {
					console.log(res.data)
					// setIsregistered(true)
					dispatch(SYNCUSERDATA(res.data.userData))
					// history.push('/dashboard')
				})
				.catch((err) => {
					if (err.response) {
						console.log(err.response.data.message)
						// err.response.data.message &&

						// err.response.data.error && setIsregistered(false)
					}
					console.log(err)
				})
		}
		const updateClient = () => {
			axios
				.get(`${process.env.REACT_APP_API_URL}/users/updateClient`, {
					headers: { authorization: token },
				})
				.then((res) => {
					console.log(res.data)
					dispatch(SYNCUSERDATA(res.data.userData))
				})
				.catch((err) => {
					if (err.response) {
						console.log(err.response.data.message)
					}
					console.log(err)
				})
		}

		mylocation && userData.isPhotographer
			? updateMyLocation({ lat: mylocation.lat, lng: mylocation.lng })
			: updateClient()
	}, [mylocation])
	return (
		<div className={classes.root}>
			<CssBaseline />

			{/* <AppBar position='fixed' className={classes.appBar}>
				<header className='main-header header-style-one'>
					<div className='header-upper'>
						<div className='auto-container'>
							<div className='clearfix'>
								<div className='pull-left logo-box '>
									<div className='logo '>
										<Link to='/'>
											<img
												style={{ height: '70px' }}
												src='images/cablogo.png'
												alt=''
												title=''
												className='user_dash_logo'
											/>
										</Link>
									</div>
								</div>
								<div className='nav-outer clearfix'>
									<div className='mobile-nav-toggler'>
										<span
											className='icon flaticon-menu'
											onClick={handleDrawerToggle}
											aria-label='open drawer'
										></span>
									</div>
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
					<div className='mobile-menu'>
						<div className='menu-backdrop'></div>
						<div className='close-btn'>
							<span className='icon fa fa-remove'></span>
						</div>

						<nav className='menu-box'>
							<div className='nav-logo'>
								<Link to='/'>
									<img
										style={{ height: '70px' }}
										src='images/cablogo.png'
										alt=''
										title=''
									/>
								</Link>
							</div>
						</nav>
					</div>
				</header>
			</AppBar> */}
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<MenuIconDiv
					// onClick={setisOpen.bind(this, !isOpen)}
					onClick={handleDrawerToggle}
				>
					{' '}
					<MenuIcon
						fontSize='medium'
						style={{
							color: 'rgb(190, 10, 10)',
							fontSize: '32px',
						}}
					/>
				</MenuIconDiv>
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						// open={isOpen}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<AppMenu handleDrawerToggle={handleDrawerToggle} />
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						<AppMenu handleDrawerToggle={handleDrawerToggle} />
					</Drawer>
				</Hidden>
			</nav>

			<main className={classes.content}>
				{/* <div className={classes.toolbar} /> */}
				{props.children}
			</main>
		</div>
	)
}

ResponsiveDrawer.propTypes = {
	container: PropTypes.instanceOf(
		typeof Element === 'undefined' ? Object : Element
	),
}

export default ResponsiveDrawer
