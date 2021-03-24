import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Container = Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color:#ffff;
min-height:440px;
padding-top:10px;
`
const BigText = Styled.p`
font-size:20px;
color:grey;
font-weight:500;
`
const Smalltext = Styled.p`
font-size:14px;
color:grey;
font-weight:500;
`
const Listing = Styled.ul`
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
background-color: #f1f0f0;
padding:0px;
width:95%;
li{
	list-style:none;
	font-size:18px;
	width:100%;
	background-color: #ffff;
	color:grey;
	margin-top:1.7px;
	margin-bottom:1.7px;
}
`
const Buttons = Styled(Button)`
  && {


margin-top:8px;
    color: rgb(190, 10, 10);
    border-color: rgb(190, 10, 10);
    &:focus {
      background-color: white;
    }
    // @media (max-width: 1100px) {
    //   display: none;
    // }
  }
`
const ButtonsStyle = {
	marginTop: '50px',
	marginLeft: '80px',
}
const FoodOrderHistory = () => {
	const [bookings, setBookings] = useState([])
	const CurrentUser = useSelector((state) => state.user.currentUser)
	const token = CurrentUser && CurrentUser.token
	// getSesssionHistory
	const getSesssionHistory = async () => {
		await axios
			.get(
				`${process.env.REACT_APP_API_URL}/users/getSesssionHistory`,

				{
					headers: { authorization: token },
				}
			)
			.then((res) => {
				console.log(res.data)
				// setBookinmgs(res.data.userData)
				setBookings(res.data.userData)
				// setIsregistered(true)
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

	useEffect(() => {
		getSesssionHistory()
	}, [])
	const BookingCards = ({ item }) => {
		return (
			<>
				<li>
					<small>
						request status: {!item.accepted ? 'pending' : 'accepted'}
					</small>
					<br />
					<small>Date : {item.bookingDate.substring(0, 10)}</small>
				</li>
			</>
		)
	}
	const MapBookings = () => {
		return (
			bookings.length > 0 &&
			bookings.map((item) => {
				return <BookingCards item={item} />
			})
		)
	}
	return (
		<Container>
			<BigText>My booking History</BigText>
			<Listing>
				{bookings.length > 0 ? MapBookings() : <small>empty</small>}
			</Listing>
		</Container>
	)
}

export default FoodOrderHistory
