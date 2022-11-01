import {
  CurrencyRupeeOutlined,
  Favorite,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import React from "react";
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
  flex-shrink: 0;
//   width: 18%
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
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px
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
const Button = styled.button``;

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
  font-family: 'Montserrat'
`;

const CartQuan = styled.div``;

const BestProducts = () => {
  return (
    <Container>
      <Title>
        Best Selling <span style={{ color: "darkorange" }}>Products</span>
      </Title>
      <Wrapper>
        {bestSeller.map((product)=>(
            <ProductCard>
            <CardTop>
                <Discount>-{product.discount}%</Discount>
                <Wishlist>
                    {(product.wishlist) ? 
                        <Favorite style={{color: "red"}}/> : <FavoriteBorderOutlined />
                    }
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
                <Button>Button</Button>
            </CartQuan>
            </ProductCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default BestProducts;
