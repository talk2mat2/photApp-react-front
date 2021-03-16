import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, CssBaseline, Drawer, Hidden } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppMenu from '../components/AppMenu'
import { useDispatch } from 'react-redux'
import { signOut } from '../actions/authactions'

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
		padding: theme.spacing(3),
	},
}))

function ResponsiveDrawer(props) {
	const { container } = props
	const classes = useStyles()
	const theme = useTheme()
	const [mobileOpen, setMobileOpen] = React.useState(false)

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen)
	}
	const dispatch = useDispatch()
	const LogOut = () => {
		dispatch(signOut())
	}
	return (
		<div className={classes.root}>
			<CssBaseline />

			<AppBar position='fixed' className={classes.appBar}>
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
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<AppMenu />
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
						<AppMenu />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
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
