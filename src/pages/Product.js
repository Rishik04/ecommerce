import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const catType = location.state;
  
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const RequestToken = axios.CancelToken.source();
    // console.log(RequestToken);

    const getList = async ()=>{
      try{
        setIsLoading(true);
        const res = await axios.get(`http://localhost:8000/api/products/${catType}`, {
          cancelToken: RequestToken.token
        });
        setIsLoading(false);
        // console.log(res);
        if(res.data.status === 400)
          console.log("No Items")
        else
          setProduct(res.data.success.data);
      }
      catch(err){
      }
    }
    getList();
    
    return ()=>{
      RequestToken.cancel();
    }
  }, [catType])
  

  return (
    <>
      <Navbar />
      <Container>
      <Title>
          Browse Our <br />
          <span style={{ color: "darkorange" }}>Products</span> 
        </Title>
        <ProductSlider/>
        { (isLoading) ? "Loading" : <BestProductItems products={product}/>}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
