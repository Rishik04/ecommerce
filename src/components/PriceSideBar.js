import React from "react";
import styled from "styled-components";

const Container = styled.div`position: relative`;

const Card = styled.div`
//   height: 400px;
  padding: 10px;
  width: 350px;
  background: #fff;
`;
const Title = styled.h1``;
const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px
`;
const ProductSec = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProductTitle = styled.p`
  color: gray;
  flex-wrap: wrap;
  margin: 10px
`;

const Wrapper = styled.div``;

const PriceSideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>Procees To Checkout</Title>
          <ProductSec>
            <Image src="assets/bg.jpg" />
            <ProductTitle>
              Kadhai Paneer Serves (250gm) Spicy
            </ProductTitle>
          </ProductSec>
          <ProductSec>
            <Image src="assets/bg.jpg" />
            <ProductTitle>
              Kadhai Paneer Serves (250gm) Spicy
            </ProductTitle>
          </ProductSec>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PriceSideBar;
