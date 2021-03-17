import React, { useState } from 'react'
import {
	Typography,
	ListItemIcon,
	Divider,
	MenuList,
	MenuItem,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import logo from '../assets/sidemenu_logo.jpg'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ExitIcon from '@material-ui/icons/ExitToApp'
import OfferIcon from '@material-ui/icons/LocalOffer'
import languageJson from '../config/language'
import { signOut } from '../actions/authactions'
import { makeStyles } from '@material-ui/core/styles'
import {
	AccountBalance,
	HeadsetMic,
	LocalTaxi,
	Restaurant,
	Settings,
	DirectionsBus,
	ReceiptTwoTone,
	AccountBalanceWalletOutlined,
} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
	active: {
		backgroundColor: '#444444',
		color: '#fff',
	},
	menuItem: {
		'&:hover': {
			textDecoration: 'none',
			backgroundColor: '#444444',
			color: '#fff',
			// Reset on touch devices, it doesn't add specificity
			// '@media (hover: none)': {
			// 	backgroundColor: 'transparent',
			// },
		},
	},
}))
function AppMenu() {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [active, setActive] = useState('')
	const LogOut = () => {
		dispatch(signOut())
	}

	const handleActive = (page) => {
		return () => {
			setActive(page)
		}
	}

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: '#444444',
				}}
			>
				<Link to='/'>
					{' '}
					<img
						src='/media/ogaphotos_favicon.png'
						width={100}
						height={100}
						alt='img'
					/>
				</Link>
				{/* <img
					style={{
						marginTop: '20px',
						marginBottom: '20px',
						width: '120px',
						height: '120px',
					}}
					src={logo}
					alt='Logo'
				/> */}
			</div>
			{/* <Divider /> */}
			<MenuList>
				<MenuItem
					className={
						(classes.menuItem, active === 'dashboard' && classes.active)
					}
					component={Link}
					to='/dashboard'
					onClick={handleActive('dashboard')}
				>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.dashboard_text}
					</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'looking' && classes.active)}
					component={Link}
					to='/looking'
					onClick={handleActive('looking')}
				>
					<ListItemIcon>
						<LocalTaxi />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.request_a_trip}
					</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'trips' && classes.active)}
					onClick={handleActive('trips')}
					component={Link}
					to='/trips'
				>
					<ListItemIcon>
						<ReceiptTwoTone />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.my_trips}</Typography>
				</MenuItem>
				<MenuItem
					className={
						(classes.menuItem, active === 'trans_eat' && classes.active)
					}
					onClick={handleActive('trans_eat')}
					component={Link}
					to='/trans_eat'
				>
					<ListItemIcon>
						<Restaurant />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.order_food}</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'eats' && classes.active)}
					onClick={handleActive('eats')}
					component={Link}
					to='/eats'
				>
					<ListItemIcon>
						<Restaurant />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.order_food_history}
					</Typography>
				</MenuItem>
				<MenuItem
					className={
						(classes.menuItem, active === 'delivery' && classes.active)
					}
					onClick={handleActive('delivery')}
					component={Link}
					to='/delivery'
				>
					<ListItemIcon>
						<DirectionsBus />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.delivery}</Typography>
				</MenuItem>
				<MenuItem
					className={
						(classes.menuItem, active === 'couriers' && classes.active)
					}
					onClick={handleActive('couriers')}
					component={Link}
					to='/couriers'
				>
					<ListItemIcon>
						<DirectionsBus />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.delivery_history}
					</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'wallet' && classes.active)}
					onClick={handleActive('wallet')}
					component={Link}
					to='/wallet'
				>
					<ListItemIcon>
						<AccountBalanceWalletOutlined />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.wallet}</Typography>
				</MenuItem>

				<MenuItem
					className={(classes.menuItem, active === 'promos' && classes.active)}
					onClick={handleActive('promos')}
					component={Link}
					to='/promos'
				>
					<ListItemIcon>
						<OfferIcon />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.promo}</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'support' && classes.active)}
					onClick={handleActive('support')}
					component={Link}
					to='/support'
				>
					<ListItemIcon>
						<HeadsetMic />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.support_messages}
					</Typography>
				</MenuItem>
				<MenuItem
					className={(classes.menuItem, active === 'profile' && classes.active)}
					onClick={handleActive('profile')}
					component={Link}
					to='/profile'
				>
					<ListItemIcon>
						<Settings />
					</ListItemIcon>
					<Typography variant='inherit'>
						{languageJson.profile_settings}
					</Typography>
				</MenuItem>

				<MenuItem onClick={LogOut}>
					<ListItemIcon>
						<ExitIcon />
					</ListItemIcon>
					<Typography variant='inherit'>{languageJson.logout}</Typography>
				</MenuItem>
			</MenuList>
		</div>
	)
}

export default AppMenu
