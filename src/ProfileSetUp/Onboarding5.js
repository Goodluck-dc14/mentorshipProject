import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Onboarding5 = () => {
  return (
    <Container>
      <ImgHolder>
        <Image src="/image/2.png" />
      </ImgHolder>
      <TextHolder>
        <Title>Welcome Romanus</Title>
        <Text>
          The algorithm takes care to create text that looks similar to an
          ordinary book but without meaning.{" "}
        </Text>
        <Holder>
          <NavLink
            to="/userpage"
            style={{
              textDecoration: "none",
            }}
          >
            <Button>Get Started</Button>
          </NavLink>
          <Location>
            <NotIt />
            <NotIt />
            <NotIt />
            <NotIt />
            <It />
          </Location>
        </Holder>
      </TextHolder>
    </Container>
  );
};

export default Onboarding5;

const Container = styled.div`
  display: flex;
  min-height: 100%;
  height: 100vh;
  color: #525252;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    padding-top: 20px;
  }
`;

const ImgHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
  }
`;

const Image = styled.img`
  height: 70%;
  @media screen and (max-width: 425px) {
    width: 100%;
    height: unset;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: black;
  @media screen and (max-width: 425px) {
    margin-top: 30px;
    font-size: 30px;
  }
`;

const Text = styled.div`
  max-width: 80%;
  margin-top: 20px;
  font-size: 18px;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Holder = styled.div``;

const Button = styled.div`
  margin-top: 30px;
  height: 45px;
  width: 220px;
  background: var(--deep);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const Location = styled.div`
  margin-top: 30px;
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const It = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--deep);
  margin-right: 15px;
  @media screen and (max-width: 425px) {
    margin-left: 15px;
    margin-right: unset;
    width: 20px;
  }
`;

const NotIt = styled.div`
  width: 30px;
  height: 3px;
  margin-right: 15px;
  background-color: var(--deep);
  opacity: 0.3;
  @media screen and (max-width: 425px) {
    margin-left: 15px;
    margin-right: unset;
    width: 20px;
  }
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
