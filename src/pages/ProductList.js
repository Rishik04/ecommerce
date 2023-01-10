import React from "react";
import styled from "styled-components";
import BestProducts from "../components/BestProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const ProductList = () => {
  return (
    <>
      <Navbar />
      <BestProducts />
      <Footer />
    </>
  );
};

export default ProductList;
