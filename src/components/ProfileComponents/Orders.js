import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOders } from "../../redux/actions/orders";
import { Cancel, CheckCircle, CurrencyRupee, Tag } from "@mui/icons-material";
import { ErrorProd, Spinner } from "../skeleton/NotFound";

const Orders = () => {
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderDetails.orders);
  const loading = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      console.log("gh");
      dispatch(getOders(user._id));
    }
  }, [dispatch, user]);

  console.log(orders);

  return (
    <Container>
      <Wrapper>
        {loading.loading ? (
            <Spinner />
        ) : (
          <>
          <Title>YOUR
            <span style={{ color: "darkorange" }}> ORDERS</span> </Title>
            {orders && orders.length===0 ? <ErrorProd type={"notFound"} error={"No orders found"}/> : orders &&
              orders.map((item) => {
                const { shipping } = item;
                return (
                  <Card key={item._id}>
                    <SubTitle>
                      {" "}
                      <Tag style={{ fontSize: 16 }} /> Order id : {item._id}{" "}
                    </SubTitle>
                    {item.item.map((order) => (
                      <OrderTitle key={order._id}>
                        <Type>{order.title}</Type>
                        <Price>
                          <CurrencyRupee style={{ fontSize: 14 }} />
                          {order.price}
                        </Price>
                      </OrderTitle>
                    ))}

                    <ShippingAddress>
                      <Address>
                        {shipping.area},&nbsp;
                        {shipping.street},&nbsp;
                        {shipping.city},&nbsp;
                        {shipping.pin}&nbsp;
                        {shipping.state}&nbsp;
                      </Address>
                    </ShippingAddress>

                    <PaymentDetails>
                      <span>Payment Id : {item.paymentId}</span>
                      <span>Payment Method : {item.paymentMethod}</span>
                      <span>
                        Delivered :{" "}
                        {item.delivered ? (
                          <CheckCircle style={{ fontSize: 15 }} />
                        ) : (
                          <Cancel
                            style={{
                              fontSize: 15,
                              color: "red",
                              verticalAlign: "bottom",
                            }}
                          />
                        )}
                      </span>
                    </PaymentDetails>
                  </Card>
                );
              })}{" "}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Orders;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Card = styled.div`
  border-radius: 8px;
  padding: 8px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  cursor: pointer;
`;
const SubTitle = styled.h4`
  font-size: 14px;
  margin-top: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 500;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  flex-basis: 100%;
`;
const Type = styled.p`
  margin: 2px 0;
  padding: 0;
  font-size: 14px;
  font-weight: 300;
  font-family: "Montserrat";
  color: rgba(0, 0, 0, 0.8);
`;
const Price = styled.p`
  margin: 2px 0;
  padding: 0;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const OrderTitle = styled.div`
  display: flex;
  gap: 2px 8px;
  align-items: center;
`;

const Address = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
`;

const ShippingAddress = styled.div``;

const PaymentDetails = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  font-family: 'MOntserrat';
  color: rgba(0,0,0,.8)
  font-weight: 600;
  align-items: center;
`;
