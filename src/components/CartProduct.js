import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PriceSideBar from "./PriceSideBar";
import {
  Add,
  CurrencyRupeeOutlined,
  DeleteOutline,
  Remove,
} from "@mui/icons-material";
import {
  addQuantity,
  deleteItem,
  remoeQuantity,
} from "../redux/actions/quantity";
import { ErrorProd } from "./skeleton/NotFound";

const CartProduct = () => {
  const getState = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleIncQuantity = (item) => {
    dispatch(addQuantity(item));
  };

  const handleDecQuantity = (item) => {
    dispatch(remoeQuantity(item));
  };
  const deleteItems = (item) => {
    dispatch(deleteItem(item));
  };

  console.log(getState);

  return (
    <Container>
      <ProductContainer>
        {getState.cartItems.length === 0
          ? <ErrorProd type={"emptyCart"} error={"Oops! your cart is empty."}/>
          : getState.cartItems.map((item) => (
              <Card key={item._id}>
                <Left>
                  <ImageContainer>
                    <Image src={item.img} />
                  </ImageContainer>
                  <Description>
                    <Title>{item.title}</Title>
                    <Type>{item.type}</Type>
                  </Description>
                </Left>
                <Right>
                  <Quantity>
                    {item.qty === 1 ? (
                      <DeleteOutline
                        style={{
                          fontSize: "medium",
                          margin: 'auto',
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 5,
                        }}
                        onClick={() => deleteItems(item)}
                      />
                    ) : (
                      <Remove
                        style={{
                          margin: "auto",
                          fontSize: "medium",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 5,
                        }}
                        onClick={() => handleDecQuantity(item)}
                      />
                    )}
                    <InputField value={item.qty} disabled />
                    <Add
                      style={{
                        margin: "auto",
                        fontSize: "medium",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 5,
                      }}
                      onClick={() => handleIncQuantity(item)}
                    />
                  </Quantity>

                  <PriceContainer>
                    <CurrencyRupeeOutlined
                      style={{
                        fontize: 18,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    />
                    <Price>{item.price}</Price>
                  </PriceContainer>

                  <DeleteOutline
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                    }}
                    onClick={() => deleteItems(item)}
                  />
                </Right>
              </Card>
            ))}
      </ProductContainer>
      <PriceSideBar /> 
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding: 2px 10px;
  width: 60vw;
`;
const Title = styled.h3`
    margin: 5px 0;
`;

const Type = styled.p`
  font-family: "Lora";
  color: gray;
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  margin: 5px 0;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 60px;
  width: 60px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
`;

const ProductContainer = styled.div`
  flex: 2;
`;

const Description = styled.div`
  margin-left: 10px;
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 5px;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  background-color: #f3f3f3;
  width: 15px;
  padding: 5px 8px;
  margin: auto;
  font-size: 15px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;
`;
