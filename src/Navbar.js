import React from "react";
import styled from 'styled-components';


const Nav=styled.div`
height: 50px;
width:100%;
display: flex;
justify-content:space-between; 
background:linear-gradient(170deg, #1bc059, #0d47a1);`;

const Title=styled.div`
font-size:30;
color: #fff;
font-weight:600;
text-transform: uppercase;
margin-top: 15px;
margin-left: 10px;
font-family: "Montserrat";
&:hover{
    color: yellow;
};
`;

const CartImg=styled.img`
height:48px;
margin-right:30px;`;

const CartContainer=styled.div`
position:relative;
cursor:pointer;`;

const CartCount = styled.div`
    background: ${props => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${props => (props.show? "visible": "hidden")};
`;

class Navbar extends React.Component {
    render(){
        return(
            <Nav>
            <Title> Movie-App</Title>
            <CartContainer>
                <CartImg  src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png " alt="cart-icon" />   
                <CartCount color="pink" show={"true"}>5</CartCount>
            </CartContainer> 
            </Nav>
        )

        
    }
}

export default Navbar;