import React from "react";
import styled from "styled-components";
import BestProductItems from "../components/BestProductItems";
import BestProducts from "../components/BestProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductSlider from "../components/ProductSlider";

const Container = styled.div`
  background: #f9f9f9;
  padding-top: 12vh;
`;
const Wrapper = styled.div`
`;
const ImageContainer = styled.div`
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align:center;
`;

const Price = styled.p``;

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
      <Title>
          Browse Our <br />
          <span style={{ color: "darkorange" }}>Products</span> 
        </Title>
        <ProductSlider/>
        <BestProductItems/>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
