import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddAddress from "./AddAddress";
import { ErrorProd } from "../skeleton/NotFound";

const Address = () => {
  const state = useSelector((state) => state.address);
  console.log(state);

  //   useEffect(() => {
  //     if (Object.keys(state).length === 0) {
  //       navigate("add-adress");
  //     }
  //   }, [navigate]);

  return (
    <Container>
      <Wrapper>
        <Card>
          {state.address.length === 0 ? (
            <ErrorProd type={"notFound"} />
          ) : (
            <AddressCard>
              {state.address.map((i) => (
                <AddressContainer>
                  <Street>{i.street}</Street>
                  <Street>{i.building}</Street>
                  <Street>{i.area}</Street>
                  <Street>{i.pin}</Street>
                  <Street>{i.state}</Street>
                </AddressContainer>
              ))}
            </AddressCard>
          )}
          <ButtonContainer>
            <Button>
              <NavLink
                to={"add-address"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add address
              </NavLink>
            </Button>
          </ButtonContainer>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Address;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;
const Button = styled.button`
  color: #fff;
  background: darkorange;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: 30%;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
`;

const AddressContainer = styled.div`
  border: 1px solid darkorange;
  min-width: 250px;
  padding: 10px;
`;
const Street = styled.p`
  font-size: 15px;
  font-family: "Montserrat";
  color: gray;
  margin: 5px;
`;

const AddressCard = styled.div`
  display: flex;
  padding: 10px;
  gap: 30px;
  justify-content: flex-start;
`;
