import { LocationOnOutlined, Search, ShoppingBagOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 80px;
box-shadow: 0 2px 5px 2px rgba(0,0,0,.1);
background-color: white;
font-family: 'Montserrat';
margin-bottom: 10px
`

const Wrapper = styled.div`
padding: 15px 20px;
display: flex;
justify-content: space-around;
align-items: center;

`
const Left = styled.div`flex: 1;`
const Centre = styled.div`flex: 1; display: flex; align-item: centre; justify-content: center`
const Right = styled.div`flex: 1; display: flex; justify-content: flex-end; align-items: center`

const BrandLogo = styled.h1`font-weight: 600; font-family: 'Montserrat'; font-size: 20px`

const LocationContainer = styled.div`display: flex;`

const Location = styled.span`display: flex; align-items: center;`

const SearchLocation = styled.div`
padding: 0 10px;
border-radius: 2px;
display: flex;
margin-left: 15px;
height: 40px;
align-items: center;
flex: 1;
background-color: #fafafa`

const Input = styled.input`border: none; outline:none; font-family: 'Montserrat'; width: 180px; background-color: #fafafa`;

const H3F = styled.h3` 
font-size: 12px; 
color: gray;
font-weight: 500;
`

const MenuItem = styled.div`font-size: 14px; margin: 15px; font-weight: 500`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><BrandLogo>My Logo</BrandLogo></Left>
            <Centre>
                <LocationContainer>
                    <Location>
                        <H3F>Delivery to</H3F>
                        <LocationOnOutlined/>
                    </Location>
                    <SearchLocation>
                        <Input placeholder='What are you looking for?'/>
                        <Search style={{color: "gray"}}/>
                    </SearchLocation>
                </LocationContainer>
            </Centre>
            <Right>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>Register</MenuItem>
                <MenuItem>Cart <Badge badgeContent={4} color='primary'><ShoppingBagOutlined/></Badge></MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar