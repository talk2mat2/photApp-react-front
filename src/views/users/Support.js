import React from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button'
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
const Support = () => {
	return (
		<Container>
			<BigText>Messages</BigText>
			<Listing>
				<li>No new messages availaible</li>
			</Listing>
		</Container>
	)
}

export default Support
