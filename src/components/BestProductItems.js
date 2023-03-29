import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import BestProducts from "./BestProducts";
import {getProducts} from '../redux/actions/index'
import {addQuantity} from '../redux/actions/quantity'
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-evenly;
  margin: 30px 80px;
`;

const BestProductItems = ()=> {

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products);

  const {loading} = products;

  const cartItems = useSelector((state)=>state.carts);

  // console.log(cartItems);


  useEffect(() => {
    dispatch(getProducts())
   }, [dispatch]);

  //  useEffect(()=>{
  //   dispatch(getProducts())
  //  }, [cartItems])


   const handleQuantity = (item)=>{
      dispatch(addQuantity(item))
   }


    return (
      <Container>
        <Wrapper>
          { (loading) ? "Loading" :
            products.data.map((item) => {
              return (
                <BestProducts product = {item} key = {item._id}  addQuantity={()=>handleQuantity(item)} cart={cartItems}/>
              );
            })
          }
        </Wrapper>
      </Container>

    );
}

export default BestProductItems;
