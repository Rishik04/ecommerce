import styled from "@emotion/styled";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React from "react";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: -4;
`;

const Arrow = styled.div`color: #000; 
background-color: #fafafa; 
border-radius: 50%; 
width: 50px; 
height: 50px; 
cursor: pointer; 
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=>props.direction === "left" && "15px"};
right: ${props=>props.direction === "right" && "15px"};
z-index: 200;`;

const Wrapper = styled.div`
height: 100%;
overflow: hidden;
display: flex;
transform: translateX(-30vw);
`

const Slide = styled.div`
display: flex; 
justify-content: space-around;
align-items: center; 
width: 100em;
height: 100vh; 
flex-shrink: 0;
z-index: 10;
background: linear-gradient(to bottom, rgba(255,255,255, .8), rgba(255, 255, 255, .8)), url('assets/bg.webp');
`

const Infocontainer = styled.div`flex: 1; padding: 50px 0; margin-left: 8em;`;
const Imagecontainer = styled.div`flex: 1; align-items: center;`;
const Image = styled.img`width: 500px; height: 500px; align-items: center; padding: 50px;`;
const H4text = styled.p`font-family: 'Montserrat'; color: darkorange; font-weight: 600; font-size: 22px; margin-bottom: 0`
const H1text = styled.h1`font-family: 'Lora'; font-weigth: 700; font-size: 70px; margin: 5px 0`
const Button = styled.button`background-color: darkorange; border: none; outline: none; border-radius: 25px; padding: 8px; font-weight: 600; color: white; font-family: 'Montserrat'; align-items: center; display: flex; margin-top: 15px; padding-left: 30px`


const Slider = () => {

    const handleClick = (direction)=>{

    }

  return (
    <div>
      <Container>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <EastOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <Infocontainer>
                    <H4text>WE ARE DELICACY</H4text>
                    <H1text>Choose the delicacy the best healthy <br/> way to life</H1text>
                    <Button>Order Now <EastOutlined style={{backgroundColor: "#fafafa", color: "black", borderRadius: 50, padding: 2, marginLeft: 10}}/></Button>
                </Infocontainer>
                <Imagecontainer>
                    <Image src="assets/plate.png"/>
                </Imagecontainer>
            </Slide>
            <Slide>
                <Infocontainer>
                    <H4text>WE ARE DELICACY</H4text>
                    <H1text>Choose the delicacy the best healthy <br/> way to life</H1text>
                    <Button>Order Now <EastOutlined style={{backgroundColor: "#fafafa", color: "black", borderRadius: 50, padding: 2, marginLeft: 10}}/></Button>
                </Infocontainer>
                <Imagecontainer>
                    <Image src="assets/plate.png"/>
                </Imagecontainer>
            </Slide>
           
        </Wrapper>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <WestOutlined/>
        </Arrow>

      </Container>
    </div>
  );
};

export default Slider;
