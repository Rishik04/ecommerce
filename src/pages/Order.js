import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PriceSideBar from "../components/PriceSideBar";
import { CurrencyRupeeOutlined } from "@mui/icons-material";

const Order = () => {
  const cart = useSelector((state) => state.carts?.cartItems);

  const total = cart.reduce((x, y) => x + y.price * y.qty, 0);

  const selectedAddress = useSelector((state) => state.address.selectedAddress);
  const cartItems = useSelector((state) => state.carts.cartItems);
  const paymentMethod = useSelector((state) => state.order?.paymentMethod);
  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <Orders>
            <OrderHeader>
              <Title>
                Order
                <span style={{ color: "darkorange" }}> Summary!</span>
              </Title>
            </OrderHeader>

            <Card>
              <OrderSummary>
                <SubTitle>Shipping Address</SubTitle>
                <AddressInfo>
                  <ProductInfo>
                    <Street>{selectedAddress.building}</Street>
                    <Street>{selectedAddress.street}</Street>
                    <Street>{selectedAddress.area}</Street>
                    <Street>{selectedAddress.city}</Street>
                    <Street>{selectedAddress.pin}</Street>
                    <Street>{selectedAddress.state}</Street>
                  </ProductInfo>
                </AddressInfo>
              </OrderSummary>

              <OrderSummary>
                <SubTitle>Items</SubTitle>
                {cart.map((item) => (
                  <AddressInfo>
                    <ProductImage>
                      <Image src={item.img} />
                    </ProductImage>
                    <ProductInfo>
                      <Street style={{fontSize: 18}}>{item.title}</Street>
                      <Street>{item.category}</Street>
                      <Street style={{display: "flex", alignItems: "center"}}><CurrencyRupeeOutlined style={{fontSize: 16}}/> {item.price}/-</Street>
                      <Street>{item.qty}</Street>
                      <Street>{item.type}</Street>
                    </ProductInfo>
                  </AddressInfo>
                ))}
              </OrderSummary>

              <OrderSummary>
                <SubTitle>Payment Method</SubTitle>
                <AddressInfo>
                  <ProductInfo>
                    <Input type="radio" checked disabled/>
                  </ProductInfo>
                  <Street>{paymentMethod}</Street>
                </AddressInfo>
              </OrderSummary>
            </Card>
          </Orders>
          <PriceSideBar pathName={"/order"} button={"PAY"} Total={total} />
        </Wrapper>
      </Container>

      <Footer />
    </>
  );
};

export default Order;

const Container = styled.div`
  background: #fef4ea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  height: 100%;
`;
const OrderHeader = styled.div``;
const Orders = styled.div`
  width: 100vw;
  margin: 10px;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
  margin: 15px 0;
`;

const OrderSummary = styled.div`
  padding: 10px;
  align-items: center;
  width: 60%;
  margin: 10px;
  background: #fff;
`;
const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`;

const Input = styled.input`
  margin: auto 2px;
`;
const Label = styled.label`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

const Image = styled.img`
  width: 80px;
  // height: 100%;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100px;
`;

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-size: 18px;
`;

const AddressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fef4ea;
  align-items: center;
  margin: 5px 0;
  width: 100%
`;
const Street = styled.p`
  margin: 8px;
  font-family: "Montserrat";
  font-weight: 500;
  color: gray;
  font-size: 15px;
`;

const ProductImage = styled.div`flex: 1`;
const ProductInfo = styled.div`flex: 1`;
