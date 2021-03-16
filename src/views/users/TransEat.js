import React, { useState } from 'react'
import clsx from 'clsx'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
	InputLabel,
	TextField,
	Typography,
	ListItemIcon,
	Divider,
	MenuList,
	MenuItem,
} from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import avatar from '../../assets/avatar.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Avatar from '@material-ui/core/Avatar'
import languageJson from '../../config/language'
import {
	LocationCityRounded,
	PersonOutline,
	PersonPinCircle,
} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
	paper: {
		padding: theme.spacing(4),
		margin: 'auto',
		width: '100%',
	},
	image: {
		width: 70,
		height: 70,
		fontSize: 40,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300,
		maxWidth: 500,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	margin: {
		margin: theme.spacing(1),
	},
	card: {
		maxWidth: 300,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}))

const TransEat = () => {
	const classes = useStyles()
	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<div>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Avatar aria-label='recipe' className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label='settings'>
										<MoreVertIcon />
									</IconButton>
								}
								title='Shrimp and Chorizo Paella'
								subheader='September 14, 2016'
							/>
							<CardMedia
								className={classes.media}
								image='/static/images/cards/paella.jpg'
								title='Paella dish'
							/>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									This impressive paella is a perfect party dish and a fun meal
									to cook together with your guests. Add 1 cup of frozen peas
									along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label='add to favorites'>
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label='share'>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Avatar aria-label='recipe' className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label='settings'>
										<MoreVertIcon />
									</IconButton>
								}
								title='Shrimp and Chorizo Paella'
								subheader='September 14, 2016'
							/>
							<CardMedia
								className={classes.media}
								image='/static/images/cards/paella.jpg'
								title='Paella dish'
							/>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									This impressive paella is a perfect party dish and a fun meal
									to cook together with your guests. Add 1 cup of frozen peas
									along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label='add to favorites'>
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label='share'>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Avatar aria-label='recipe' className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label='settings'>
										<MoreVertIcon />
									</IconButton>
								}
								title='Shrimp and Chorizo Paella'
								subheader='September 14, 2016'
							/>
							<CardMedia
								className={classes.media}
								image='/static/images/cards/paella.jpg'
								title='Paella dish'
							/>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									This impressive paella is a perfect party dish and a fun meal
									to cook together with your guests. Add 1 cup of frozen peas
									along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label='add to favorites'>
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label='share'>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Avatar aria-label='recipe' className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label='settings'>
										<MoreVertIcon />
									</IconButton>
								}
								title='Shrimp and Chorizo Paella'
								subheader='September 14, 2016'
							/>
							<CardMedia
								className={classes.media}
								image='/static/images/cards/paella.jpg'
								title='Paella dish'
							/>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									This impressive paella is a perfect party dish and a fun meal
									to cook together with your guests. Add 1 cup of frozen peas
									along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label='add to favorites'>
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label='share'>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Avatar aria-label='recipe' className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label='settings'>
										<MoreVertIcon />
									</IconButton>
								}
								title='Shrimp and Chorizo Paella'
								subheader='September 14, 2016'
							/>
							<CardMedia
								className={classes.media}
								image='/static/images/cards/paella.jpg'
								title='Paella dish'
							/>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									This impressive paella is a perfect party dish and a fun meal
									to cook together with your guests. Add 1 cup of frozen peas
									along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label='add to favorites'>
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label='share'>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}

export default TransEat
