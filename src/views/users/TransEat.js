import React, { useState } from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TransitionsModal from './modal'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
const Container = Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color: #f1f0f0;
min-height:440px;
padding-top:10px;
overflow-y: scroll;
`
const BigText = Styled.p`
font-size:20px;
color:grey;
font-weight:500;
`
const Listing = Styled.ul`
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0px;
width:95%;
li{
	list-style:none;
	font-size:18px;
	color:grey;
}
`

const CardsContainer = Styled.div`
	width: 150px;
	height: 110px;
	background-color: #4c8bf5;
	border-radius: 8px;
	margin: 5px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3px;
	overflow-wrap: break-word;
	word-wrap: break-word;

	padding: 4px;
`
const CardContainer = Styled.div`
display:flex;
flex-direction:row;
width:100%;
padding:10px;
box-sizing:border-box;
align-items:center;
flex-wrap:wrap;
margin-top:15px;
justify-content:space-around;
background-color:#ffff;
align-items:center;`
const ButtonsStyle = {}
const Smalltext = Styled.p`
font-size:11px;
color:#ffff;
text=align:center;
`
const TextFields = Styled(TextField)`

border:none;

	

	
`
const Buttons = Styled(Button)`
&& {
align-self:center;
background-color:#ffff;
font-size:13px;
margin-top:8px;
width:50px;
min-height:20px;
//   color: rgb(190, 10, 10);
  border-color: rgb(190, 10, 10);
  &:focus {
outline:none;
  }
  // @media (max-width: 1100px) {
  //   display: none;
  // }
}
`

const TransEat = () => {
	const [open, setOpen] = React.useState(false)
	const [countLoading, setCountLoading] = React.useState(false)
	const [priceTag, setPricetag] = React.useState(0)
	const [count, setCount] = React.useState({
		usersCount: 0,
		phographersCount: 0,
	})
	const CurrentUser = useSelector((state) => state.user.currentUser)
	const token = CurrentUser && CurrentUser.token
	const [PricetagLoading, setPricetagLoading] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	const fetchPriceTag = async () => {
		setPricetagLoading(true)
		await axios
			.get(`${process.env.REACT_APP_API_URL}/users/GetPricePriceTag`)
			.then((res) => {
				setPricetagLoading(false)
				// setLoading(false)
				setPricetag(parseInt(res.data.userData.price))
				console.log(res.data)
				// setIsregistered(true)
				// history.push('/dashboard')
			})
			.catch((err) => {
				setPricetagLoading(false)
				if (err.response) {
					// setLoading(false)
					console.log(err.response.data.message)
					// err.response.data.message &&

					// err.response.data.error && setIsregistered(false)
				}
				console.log(err)
			})
	}
	const CountUsersAndPhotgraphers = async () => {
		setCountLoading(true)
		await axios
			.get(`${process.env.REACT_APP_API_URL}/users/CountUsersAndPhotgraphers`)
			.then((res) => {
				setCountLoading(false)
				// setLoading(false)
				setCount({
					...count,
					usersCount: res.data.userData.usersCount,
					phographersCount: res.data.userData.phographersCount,
				})
				// setPricetag(parseInt(res.data.userData))
				console.log(res.data)
				// setIsregistered(true)
				// history.push('/dashboard')
			})
			.catch((err) => {
				setCountLoading(false)
				// setPricetagLoading(false)
				if (err.response) {
					// setLoading(false)
					console.log(err.response.data.message)
					// err.response.data.message &&

					// err.response.data.error && setIsregistered(false)
				}
				console.log(err)
			})
	}
	React.useEffect(() => {
		fetchPriceTag()
		CountUsersAndPhotgraphers()
	}, [])
	return (
		<Container>
			<BigText
				style={{
					width: '100%',
					backgroundColor: '#ffff',
					height: '40px',
					textAlign: 'center',
					paddingTop: '7px',
				}}
			>
				Admin
			</BigText>
			<TransitionsModal
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				priceTag={priceTag}
				setPricetag={setPricetag}
			/>
			<Listing>
				<CardContainer>
					<CardsContainer>
						{countLoading ? (
							<CircularProgress
								size={20}
								style={{
									color: 'white',
									alignSelf: 'center',
								}}
							/>
						) : (
							<Smalltext>
								total registered users: <br />
								{count.usersCount}
							</Smalltext>
						)}
					</CardsContainer>
					<CardsContainer>
						{countLoading ? (
							<CircularProgress
								size={20}
								style={{
									color: 'white',
									alignSelf: 'center',
								}}
							/>
						) : (
							<Smalltext>
								{' '}
								total registered photgraphers: <br />
								{count.phographersCount}
							</Smalltext>
						)}
					</CardsContainer>
					<CardsContainer>
						{PricetagLoading ? (
							<CircularProgress
								size={20}
								style={{
									color: 'white',
									alignSelf: 'center',
								}}
							/>
						) : (
							<>
								<Smalltext>
									price per min: <br /> NGN {priceTag}
								</Smalltext>
								<Buttons onClick={handleOpen}>
									<small>update</small>
								</Buttons>
							</>
						)}
					</CardsContainer>
				</CardContainer>
				<CardContainer>
					<TextFields id='searchusers' label='search users' />
					<TextFields id='outlinedphotographers' label='search photgraphers' />
				</CardContainer>
			</Listing>
		</Container>
	)
}

export default TransEat
