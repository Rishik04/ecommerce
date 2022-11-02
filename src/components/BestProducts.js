import {
  Add,
  CurrencyRupeeOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { bestSeller } from "../data";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 30px 80px;
  flex-wrap: wrap;
  justify-content: flex-evenly;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  // box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex: 1;
  flex-shrink: 0;
  flex-grow: 1;
  max-width: 230px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0 2px 0;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const Wishlist = styled.span``;

const Discount = styled.span`
  color: white;
  background-color: darkorange;
  padding: 5px 8px;
  position: relative;
  left: -10px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  background: transparent;
  border: none; display: flex;
  align-items: center
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Type = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: "Montserrat";
  font-weight: 500;
  color: gray;
`;
const Category = styled.p`
  margin: 8px 0;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  color: gray;
`;

const Price = styled.p`
  align-items: center;
  display: flex;
  margin: 10px 0;
  color: darkorange;
  font-weight: 600;
  font-family: "Montserrat";
`;

const CartQuan = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartToggle = styled.div`
  display: flex;
  border: 1px solid #f3f3f3;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const QuanCount = styled.input`
  border: none;
  outline: none;
  background-color: #f3f3f3;
  width: 15px;
  padding: 7px 10px;
  margin: auto;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;
`;

const Cart = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const BestProducts = () => {
  const [Count, setCount] = useState(0);
  const handle = (toggle)=>{
    (toggle === "add") ? setCount(Count+1) : (Count === 0 ? setCount(0): setCount(Count-1));

    // console.log(Count);
  }
  return (
    <Container>
      <Title>
        Best Selling <span style={{ color: "darkorange" }}>Products</span>
      </Title>
      <Wrapper>
        {bestSeller.map((product) => (
          <ProductCard key={product.id}>
            <CardTop>
              <Discount>-{product.discount}%</Discount>
              <Wishlist>
                {product.wishlist ? (
                  <Favorite style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </Wishlist>
            </CardTop>
            <ImageContainer>
              <Image src={product.img} />
            </ImageContainer>
            <Description>
              <Category>{product.category}</Category>
              <CardTitle>{product.title}</CardTitle>
              <Type>{product.type}</Type>
              <Price>
                <CurrencyRupeeOutlined
                  style={{ alignItems: "center", fontSize: "medium" }}
                />
                {product.price}/-
              </Price>
            </Description>
            <CartQuan>
              <CartToggle>
                <Remove style={{ margin: "auto", fontSize: "medium", cursor: "pointer", display: "flex", alignItems: "center", justifyContent:"center", padding: 5 }} onClick={()=>handle("remove")}/>
                <QuanCount placeholder="0" value={Count} onChange= {e => setCount(e.target.value)}/>
                <Add style={{ margin: "auto", fontSize: "medium", cursor: "pointer", display: "flex", alignItems: "center", justifyContent:"center", padding: 5 }} onClick={()=>handle("add")}/>
              </CartToggle>
              <Cart>
                <Button>
                  <ShoppingBagOutlined
                    style={{
                      backgroundColor: "darkorange",
                      padding: 4,
                      borderRadius: 50,
                      color: "white",
                      margin: "auto"
                    }}
                  />
                </Button>
              </Cart>
            </CartQuan>
          </ProductCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default BestProducts;
