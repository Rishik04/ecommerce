import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import Orders from "../components/ProfileComponents/Orders";
import Address from "../components/ProfileComponents/Address";
import Payments from "../components/ProfileComponents/Payments";
import WishList from "../components/ProfileComponents/WishList";
import AddAddress from "../components/ProfileComponents/AddAddress";
import { Logout } from "../redux/actions/userAuth";

const Profile = () => {
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  const carts = useSelector((state)=>state.carts.cartItems)
  useEffect(() => {
    if (Object.keys(user.users).length === 0) {
      navigate("/");
    }
  }, [navigate, user.users]);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Header>
            <Left>
              <InfoContainer>
                <Title>{user.users.name}</Title>
                <Desc>{user.users.email}</Desc>
              </InfoContainer>
            </Left>

            <Right>
              <ButtonContainer>
                <Button>Edit Profile</Button>
              </ButtonContainer>
            </Right>
          </Header>

          <Card>
            <Left>
              <LeftSideBar>
                <Menu>
                  <MenuItems>
                    <NavLink
                      to={"orders"}
                      style={{ textDecoration: "none", color: "darkorange" }}
                    >
                      Orders
                    </NavLink>
                  </MenuItems>
                  <MenuItems>
                    <NavLink
                      to={"address"}
                      style={{ textDecoration: "none", color: "darkorange" }}
                    >
                      Address
                    </NavLink>
                  </MenuItems>
                  <MenuItems>
                    <NavLink
                      to={"payments"}
                      style={{ textDecoration: "none", color: "darkorange" }}
                    >
                      Payments
                    </NavLink>
                  </MenuItems>
                  <MenuItems>
                    <NavLink
                      to={"favourites"}
                      style={{ textDecoration: "none", color: "darkorange" }}
                    >
                      Favourites
                    </NavLink>
                  </MenuItems>
                  <MenuItems>
                    <ButtonContainer>
                      <Button onClick={() => dispatch(Logout(user.users._id, carts))}>LOGOUT</Button>
                    </ButtonContainer>
                  </MenuItems>
                </Menu>
              </LeftSideBar>
            </Left>

            
              <RightContainer>
                <Routes>
                  <Route path="orders" element={<Orders />} />
                  <Route path="/address/*" element={<Address />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="address/add-address" element={<AddAddress />} />
                  <Route path="/favourites" element={<WishList />} />
                </Routes>
              </RightContainer>
            
          </Card>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;

const Container = styled.div`
  background: #37718e;
  min-height: 100vh;
  position: relative;
  padding: 30px 60px;
`;
const Wrapper = styled.div`
  padding: 60px;
`;

const Header = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;

const Left = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div``;
const Title = styled.h2`
  color: #fff;
  font-size: 50px;
  margin: 5px 0;
  font-family: "Montserrat";
`;
const Desc = styled.h6`
  color: #fff;
  font-size: 15px;
  margin: 10px auto;
  font-family: "Montserrat";
`;
const Card = styled.div`
  min-height: 60vh;
  background: #fff;
  margin: 20px 0;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  border: none;
  outline: none;
  background: #fff;
  padding: 10px 15px;
  font-size: 18px;
  color: darkorange;
  font-weight: 500;
  font-family: "Montserrat";
  background: darkorange;
  cursor: pointer;
  color: #fff;
`;

const LeftSideBar = styled.div`
  background: #fffee7;
  height: 100%;
  display: flex;
  align-item: center;
  width: 300px;
`;

const Menu = styled.ul`
  list-style: none;
  text-decoration: none;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MenuItems = styled.li`
  color: gray;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
`;

const RightContainer = styled.div`
  height: 80vh;
  overflow-y: scroll;
  flex: 2;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f3f3f3;
  }

  &::-webkit-scrollbar-thumb {
    background: darkorange;
    border-radius: 5px;
  }
`;
