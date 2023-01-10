import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceSideBar from "../components/PriceSideBar";

const Container = styled.div`
  margin: 30px
  position: relative;
  background: #f9f9f9
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ImageContainer = styled.div`
  height: 60vh;
//   flex: 2;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Desc = styled.div``;
const Title = styled.h1``;

const Price = styled.p``;

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
