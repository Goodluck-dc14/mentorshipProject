import React from "react";
import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";

const Header = ({ clr, good, textColor }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
        color: textColor,
        borderBottom: good,
      }}
    >
      <Logo src="./Image/0.png" />
      <Wrapper style={{ color: textColor }}>
        <span>Home</span>

        <span>About</span>

        <span>Categories</span>

        <span>Contact</span>

        <span>Benefits</span>
      </Wrapper>
      <ButtonHolder>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          <Button style={{ color: textColor }}>Sign In</Button>
        </NavLink>

        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <Button1>Sign Up</Button1>
        </NavLink>
      </ButtonHolder>

      <Holder>
        <Menu
          onClick={() => {
            document.getElementById("nav").style.width = "200px";
          }}
        ></Menu>
      </Holder>
      <SideBar myId="nav" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 1000ms;
  z-index: 1;
  position: fixed;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    margin-right: 70px;
    font-size: 17px;
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1);
    font-weight: 400;
    @media screen and (max-width: 1024px) {
      margin-right: 25px;
    }
  }
`;

const Logo = styled.img`
  height: 90px;
  width: 150px;
  object-fit: contain;
  margin: 0 20px;
  @media screen and (max-width: 768px) {
    margin: unset;
    width: 125px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Button1 = styled.div`
  width: 120px;
  height: 50px;
  background-color: #123456;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled(HiMenuAlt2)`
  cursor: pointer;
  font-size: 40px;
  margin-right: 30px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Holder = styled.div`
  @media screen and (min-width: 770px) {
    display: none;
  }
`;
