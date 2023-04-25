import React from "react";
import styled, { keyframes } from "styled-components";

export const Skeleton = ({ type }) => {
  const COUNTER = 5;

  const ProductSkeleton = () => (
    <Container>
      <Wrapper>
        <Card>
          <TopBar>
            <Discount></Discount>
            <Wishlist></Wishlist>
          </TopBar>
          <ImageContainer></ImageContainer>
          <Category></Category>
          <Title></Title>
          <Category></Category>
          <Category></Category>
          <TopBar>
            <Quantity></Quantity>
            <Discount></Discount>
          </TopBar>
        </Card>
      </Wrapper>
    </Container>
  );

  const CategorySkeleton = () => (
    <Container>
      <Wrapper>
        <CategoryCard>
          <CategoryImageConatiner></CategoryImageConatiner>
          <Title></Title>
          <Category></Category>
        </CategoryCard>
      </Wrapper>
    </Container>
  );

  return type === "products"
    ? Array(COUNTER).fill(<ProductSkeleton />)
    : Array(COUNTER).fill(<CategorySkeleton />);
};

const shrimmer = keyframes`
to{
   opacity: .2;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  max-width: 230px;
  background: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  position: relative;
`;
const ImageContainer = styled.div`
  height: 150px;
  width: 200px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
  margin: 10px;
`;
const Category = styled.div`
  width: 50px;
  height: 15px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
  margin: 10px;
`;

const Title = styled.div`
  width: 150px;
  height: 22px;
  margin: 10px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
`;

const Quantity = styled.div`
  width: 70px;
  height: 20px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
  margin: 10px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wishlist = styled.span`
  width: 50px;
  height: 20px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
  margin: 10px;
`;
const Discount = styled.span`
  width: 50px;
  height: 20px;
  background: #ddd;
  animation: ${shrimmer} 2s linear infinite alternate;
  margin: 10px;
`;

const CategoryImageConatiner = styled.div`
  background: #ddd;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  animation: ${shrimmer} 2s linear infinite alternate;
`;

const CategoryCard = styled.div`
  height: 200px;
  width: 180px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
