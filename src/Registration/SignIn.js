import React, { useState } from "react";
import styled from "styled-components";
import { Left } from "./SVG";
import { BsArrowLeftShort } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { app } from "../base";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const signin = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    Navigate("/userpage");
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Svg>
        <Left />
      </Svg>
      <LeftHolder>
        <Hold src="/image/1.png" />
        <LeftImage src="/image/5.jpg" />
      </LeftHolder>
      <RightHolder>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Arrow>
            <BsArrowLeftShort />
          </Arrow>
        </NavLink>
        <Rest>
          <Logo src="/image/1.png" />
          <Title>Welcome Back</Title>
          <Span>Login to your account</Span>
          <InputHolder>
            <Inputer>
              <Icon>
                <AiOutlineMail />
              </Icon>
              <Input
                placeholder="Email Adrress"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Inputer>
            <Inputer>
              <Icon>
                <FiUnlock />
              </Icon>
              <PassInput>
                {toggle ? (
                  <Passput
                    placeholder="Password"
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                ) : (
                  <Passput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                )}
                <PassIcon>
                  {toggle ? (
                    <AiOutlineEyeInvisible onClick={onToggle} />
                  ) : (
                    <AiOutlineEye onClick={onToggle} />
                  )}
                </PassIcon>
              </PassInput>
            </Inputer>
          </InputHolder>
          <Button onClick={signin}>Login</Button>
          <Alt>or continue with</Alt>
          <Button2>
            <FcGoogle
              style={{
                marginRight: "20px",
              }}
            />
            Google
          </Button2>
          <Bottom>
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <span>Sign Up</span>
            </NavLink>
          </Bottom>
        </Rest>
      </RightHolder>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  color: #525252;
  position: relative;
`;

const LeftHolder = styled.div`
  background: var(--deep);
  width: 55%;
  height: auto;
  position: relative;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 835px) {
    display: none;
  }
`;

const Hold = styled.img`
  z-index: 10000;
  position: fixed;
  top: 250px;
  height: 150px;
`;

const LeftImage = styled.img`
  width: 55%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.3;
`;

const RightHolder = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  z-index: 100;
  /* display: none; */
  @media screen and (max-width: 835px) {
    width: 100%;
  }
`;

const Svg = styled.div`
  position: fixed;
  z-index: 1;
  right: 0;
`;

const Arrow = styled.div`
  background: var(--back);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: var(--deep);
  margin: 20px;
  cursor: pointer;
`;

const Rest = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
`;

const Title = styled.span`
  font-size: 35px;
  font-weight: 500;
`;

const Span = styled.div`
  font-size: 20px;
`;

const InputHolder = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Inputer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Icon = styled.div`
  color: var(--deep);
  border-radius: 100%;
  background: var(--back);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: absolute;
`;

const Input = styled.input`
  height: 50px;
  width: 320px;
  border-radius: 100px;
  /* border: 1px solid var(--border); */
  border: none;
  margin-left: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 20%);
  padding-left: 70px;
  font-size: 17px;
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
    border: none;
  }
  ::placeholder {
    font-family: "Ubuntu";
    font-weight: 400;
    opacity: 0.6;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    font-size: 15px;
  }
  @media screen and (max-width: 395px) {
    width: 220px;
  }
`;

const PassInput = styled.div`
  height: 50px;
  width: 320px;
  border-radius: 100px;
  margin-left: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 20%);
  padding-left: 70px;
  display: flex;
  align-items: center;
  cursor: text;
  @media screen and (max-width: 425px) {
    width: 300px;
  }
  @media screen and (max-width: 395px) {
    width: 220px;
  }
`;

const Passput = styled.input`
  font-size: 17px;
  border: none;
  height: 90%;
  width: 85%;
  ::placeholder {
    font-family: "Ubuntu";
    font-weight: 400;
    opacity: 0.6;
  }
  :focus {
    border: none;
    outline: none;
  }
  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
  @media screen and (max-width: 395px) {
    width: 80%;
  }
`;

const PassIcon = styled.div`
  color: var(--deep);
  font-size: 23px;
  cursor: pointer;
  opacity: 0.7;
  transition: 350ms;
  :hover {
    opacity: 1;
  }
`;

const Button = styled.div`
  width: 390px;
  background: var(--deep);
  margin-top: 50px;
  border-radius: 100px;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 350ms;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 425px) {
    width: 360px;
  }
  @media screen and (max-width: 395px) {
    width: 290px;
  }
`;

const Alt = styled.div`
  margin-top: 20px;
`;

const Button2 = styled.div`
  width: 390px;
  background: var(--back);
  margin-top: 20px;
  border-radius: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 350ms;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 425px) {
    width: 360px;
  }
  @media screen and (max-width: 395px) {
    width: 290px;
  }
`;

const Bottom = styled.div`
  margin-top: 30px;
  span {
    color: var(--deep);
    cursor: pointer;
  }
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
