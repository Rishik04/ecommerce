import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../redux/actions/userAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const getState = useSelector(state=>state.users);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(getState.message!=='')
      toast(getState.message);
  },[getState])

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email(),
    number: yup
      .number()
      .integer()
      .required("Number is required")
      .test("regex", "Enter a valid number", (val) => {
        let regExp = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
        return regExp.test(val);
      }),
    password: yup.string()
      .required("Password is required")
      .min(6, "Password must contain at least 6 characters")
      .max(10, "Password must contain at most 10 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(UserRegister(data));
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <Left>
            <ImageContainer>
              <Image src="assets/login.png" />
            </ImageContainer>
          </Left>

          <Right>
            <Title>Register</Title>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputContainer>
                <Label>Name:</Label>
                <Input
                  placeholder="Name"
                  {...register("name", { required: true })}
                  type="text"
                />
                {errors?.name?.message && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
              </InputContainer>

              <InputContainer>
                <Label>Email:</Label>
                <Input
                  placeholder="Email"
                  {...register("email", { required: true })}
                  type="email"
                />
                {errors?.email?.message && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
              </InputContainer>

              <InputContainer>
                <Label>Password:</Label>
                <ToggleButton>
                <Input
                  placeholder="Password"
                  {...register("password",{ required: true })}
                  type={showPassword ? "text" : "password"}
                />
                <div onClick={togglePassword} type="button">
                    {showPassword ? <img src="assets/eye_off.svg" alt="eyeoff"></img> : <img src="assets/eye.svg" alt="eye"></img>}
                </div>
                </ToggleButton>
                {errors?.password?.message && (
                  <ErrorMessage>{errors?.password?.message}</ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label>Number:</Label>
                <Input
                  placeholder="Number"
                  {...register("number", { required: true })}
                  type="tel"
                />
                {errors?.number?.message && <ErrorMessage>{errors?.number?.message}</ErrorMessage>}
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">Register</Button>
              </ButtonContainer>
            </Form>
            <ButtonContainer>
              <Link to={"/signin"}>
                <RegisterLink>Already have account? click here</RegisterLink>
              </Link>
            </ButtonContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
          </Right>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("assets/bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 10;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 11;
  }
`;
const Wrapper = styled.div`
  z-index: 1000;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fefefe;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  min-height: 450px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
  background: #fff;
  border-radius: 5px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
  width: 80%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 10px auto;
  width: 100%;
`;

const Title = styled.h2`
  margin: 5px;
`;

const Label = styled.label`
  font-family: "Montserrat";
  font-size: 14px;
  color: gray;
  margin: 5px 0;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  margin: 15px auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: darkorange;
  color: #fff;
  padding: 6px 2px;
  width: 25%;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
`;
const Form = styled.form`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const RegisterLink = styled.p`
  color: blue;
  text-decoration: underline;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
// Added ErrorMessage component for displaying errors
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;